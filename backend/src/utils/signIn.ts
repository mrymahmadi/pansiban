// deno-lint-ignore-file
import Fastify from "npm:fastify@5";
import {
  FastifyReply,
  FastifyRequest,
  create,
  getNumericDate,
} from "../tools/deps.ts";
/*import { PrismaClient } from "../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../tools/prismaConf.ts";
const fastify = Fastify({ logger: true });

const JWT_SECRET = Deno.env.get("JWT_SECRET") || "secretCode";

export const signin = async (
  request: FastifyRequest<{ Body: { email: string; phone: number } }>,
  reply: FastifyReply
) => {
  try {
    const { email } = request.body;
    const chechEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!chechEmail) {
      fastify.log.info(`user not found for email: ${email}`);
      reply.status(401).send("email not found.");
    }

    async function getCryptoKey(secret: string): Promise<CryptoKey> {
      const encoder = new TextEncoder();
      const encodedSecret = encoder.encode(secret);

      return await crypto.subtle.importKey(
        "raw",
        encodedSecret,
        { name: "HMAC", hash: "SHA-512" },
        false,
        ["sign", "verify"]
      );
    }

    const key = await getCryptoKey(JWT_SECRET);
    const jwt = await create(
      { alg: "HS512", type: "JWT" },
      { exp: getNumericDate(60 * 60), email: chechEmail.email },
      key
    );

    return reply.status(200).send({
      token: jwt,
      userId: chechEmail.id,
      userName: chechEmail.firstName,
    });
  } catch (err: any) {
    return reply
      .status(500)
      .send({ error: "internal server error", details: err.message });
  }
};
