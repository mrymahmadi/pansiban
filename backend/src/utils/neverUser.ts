import { FastifyReply } from "npm:fastify@5.1.0";
import { PrismaClient } from "../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

const neverUser = async (reply: FastifyReply, posid: any) => {
  const findpos = await prisma.user.findFirst({ where: { positionId: posid } });
  const findPosLevel = await prisma.position.findUnique({
    where: { id: posid },
  });
  if (!findpos) {
    reply.send(" this pos not exist");
  }
  if (findPosLevel.level === "USER") {
    reply.send(
      " you cant add new province. just ADMIN & GHOST have this access."
    );
  }
  return neverUser;
};
//not complete
