// deno-lint-ignore-file
import Fastify from "npm:fastify@5";
import { FastifyReply, FastifyRequest, verify } from "../tools/deps.ts";
import { authInfo } from "../models/users.ts";

const fastify = Fastify({ logger: true });

const JWT_SECRET = "secretCode";

export async function authenticate(
  request: FastifyRequest<{
    //Body: { id: number; role: string };
    Params: unknown;
    Body: authInfo;
  }>,
  reply: FastifyReply
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    reply.code(401).send({ error: "Missing authorization header." });
    return;
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    reply.code(401).send({ error: "Invalid authorization headers format." });
    return;
  }
  console.log(parts);

  const token = parts[1];

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

  try {
    const payload = await verify(token, key);
    reply.send({});
    return payload;
  } catch (error) {
    reply.code(401).send({ error: "Invalid or expired token." });
  }
}
