import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";

/*
import { PrismaClient } from "../../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../tools/prismaConf.ts";
import { authInfo, Iuser, Role } from "../../models/users.ts";

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const allUsers = await prisma.user.findMany();
  reply.send(allUsers);
};

export const getUser = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  const userid = parseInt(request.params.id);
  console.log({ userid });

  const { id, positionId } = request.body as Iuser;

  console.log(request.body);
  if (!request.body) {
    reply.send("clean!");
  }
  if (!id) {
    reply.send("id not exist");
  }
  if (!positionId) {
    reply.send("pos id not exist");
  }

  if (userid) {
    const user = await prisma.user.findUnique({
      where: { id: userid },
      select: { id: true, lastName: true, firstName: true, email: true },
    });
    reply.send(user);
  } else {
    reply.status(404).send("user not found");
  }
};

export const newUser = async (
  request: FastifyRequest<{ Body: unknown }>,
  reply: FastifyReply
) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    pansionId,
    positionId,
    provinceId,
    cityId,
  } = request.body as Iuser;

  if (!firstName || !lastName || !email || !phone) {
    reply.send("some values nor required.");
  }

  const checkLevel = await prisma.position.findUnique({
    where: { id: positionId },
  });

  if (checkLevel.level == "GHOST") {
    reply.status(501).send("you cant add GHOST level");
  }

  const checkMail = await prisma.user.findUnique({ where: { email: email } });

  if (checkMail) {
    reply.send("this mail exist, please use another address.");
  }
  const newUser = await prisma.user.create({
    data: {
      lastName,
      firstName,
      email,
      phone,
      pansionId,
      positionId,
      provinceId,
      cityId,
    },
  });
  reply.status(201).send(newUser);
};

export const updateUser = async (
  request: FastifyRequest<{
    // Params: { id: string };
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  //const id = parseInt(request.params.id);
  const { lastName, firstName, email, id } = request.body as Iuser;

  if (!lastName || !firstName) {
    reply
      .status(201)
      .send("for update have to send us new firstName and new lastName");
  }
  const newInfo = await prisma.user.update({
    where: { id },
    data: { lastName, firstName, email },
  });
  reply.status(201).send(newInfo);
};

export const deleteUser = async (
  request: FastifyRequest<{ Params: { id: number }; Body: authInfo }>,
  reply: FastifyReply
) => {
  //const id = parseInt(request.params.id);
  const { id } = request.params;

  const findUser = await prisma.user.findUnique({ where: { id: id } });
  if (!findUser) {
    reply.send("this id not exist");
  }
  await prisma.user.delete({ where: { id } });
  reply.send({ message: "User deleted" });
};
