import Fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "npm:fastify@5.1.0";
//import { Pool } from "https://deno.land/x/postgres/mod.ts";
const fastify: FastifyInstance = Fastify();

import { authInfo, IPosInPansion } from "../../models/users.ts";
/*
import { PrismaClient } from "../../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../tools/prismaConf.ts";

export const getPosInpansions = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const poSs = await prisma.posInPansion.findMany();
  reply.send(poSs);
};

export const getPosInPansion = async (
  request: FastifyRequest<{ Params: { id: string }; Body: authInfo }>,
  reply: FastifyReply
) => {
  const position = parseInt(request.params.id);

  if (position) {
    const pansion = await prisma.posInPansion.findFirst({
      where: { positionId: position },
      include: { pansion: true },
    });
    reply.send(pansion);
  } else {
    reply.status(404).send("position not found");
  }
};

export const addPosInPansion = async (
  request: FastifyRequest<{
    // Body: { positionId: number; pansionId: number; assignedBy: number };
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  const body = request.body as IPosInPansion; // تبدیل نوع به IPosInPansion

  const { positionId, pansionId, assignedBy } = body;
  //const { positionId, pansionId, assignedBy } = request.body as IPosInPansion;
  try {
    // Check if related records exist
    const positionExists = await prisma.position.findUnique({
      where: { id: positionId },
    });
    console.log("Position exists:", positionExists);

    const pansionExists = await prisma.pansion.findUnique({
      where: { id: pansionId },
    });
    console.log("Pansion exists:", pansionExists);

    const userExists = await prisma.user.findUnique({
      where: { id: assignedBy },
    });
    console.log("User exists:", userExists);

    if (!positionExists || !pansionExists || !userExists) {
      reply.status(400).send("Invalid positionId, pansionId, or assignedBy");
      return;
    }

    // Check for duplicate composite key
    const existingRecord = await prisma.posInPansion.findUnique({
      where: {
        positionId_pansionId: {
          positionId,
          pansionId,
        },
      },
    });
    console.log("Existing PosInPansion record:", existingRecord);

    if (existingRecord) {
      reply
        .status(400)
        .send("A record with this positionId and pansionId already exists");
      return;
    }

    // Create new record
    const newPosInPansion = await prisma.posInPansion.create({
      data: {
        positionId,
        pansionId,
        assignedBy,
      },
    });

    reply.status(201).send(newPosInPansion);
  } catch (error) {
    console.error("Error creating PosInPansion:", error);
    reply.status(500).send("Failed to create PosInPansion");
  }
};

// this endpoint does not DELETE & UPDATE action
//just ghost add new pos in pansion
