//import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";
import { FastifyRequest, FastifyReply } from "../../tools/deps.ts";
/*
import { PrismaClient } from "../../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../tools/prismaConf.ts";

import { ICity } from "../../models/users.ts";

export const getCities = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const cities = await prisma.city.findMany();
  if (!cities) {
    reply.status(404).send("not yet any cities.");
  } else {
    reply.send(cities);
  }
};

export const getCity = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  console.log(id);
  if (id) {
    const user = await prisma.city.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        enName: true,
        province: true,
        pansions: true,
        users: true,
      },
    });
    reply.send(user);
  } else {
    reply.status(404).send("city not found");
  }
};

export const newCity = async (
  request: FastifyRequest<{
    Body: ICity;
  }>,
  reply: FastifyReply
) => {
  const { name, enName, provinceId } = request.body;
  if (!name || !enName || !provinceId) {
    reply.status(501).send("please check -name , enName - provinceId");
    return;
  }

  const existProvince = await prisma.province.findUnique({
    where: { id: provinceId },
  });

  if (!existProvince) {
    reply.status(400).send("this provinceId actully not exist");
  }

  try {
    const newCity = await prisma.city.create({
      data: { name, enName, provinceId },
    });
    reply.status(201).send(newCity);
  } catch (error) {
    reply.status(500).send("An error occurred while creating the city");
  }
};

export const updateCity = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: ICity;
  }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  const { enName } = request.body;
  if (!enName) {
    reply.status(501).send("can not set new value for name");
  }
  const newInfo = await prisma.city.update({
    where: { id },
    data: { enName },
  });
  reply.status(201).send(newInfo);
};

export const deletecity = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  await prisma.city.delete({ where: { id } });
  reply.send({ message: "city deleted" });
};

//have to provide this file to:>  just ghost have access Create & Delete operation
