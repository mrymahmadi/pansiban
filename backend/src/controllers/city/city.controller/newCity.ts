import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";
import { ICity } from "../../../models/users.ts";
/*
import { PrismaClient } from "../../../../generated/client/index.d.ts";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../../tools/prismaConf.ts";
export const newCity = async (
  request: FastifyRequest<{
    Body: ICity;
  }>,
  reply: FastifyReply
) => {
  const { name, enName, provinceId } = request.body;
  if (!name || !enName || !provinceId) {
    reply.status(501).send("please check -name, enName, provinceId");
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

//باید مقادیر غیر انگلیسی رو برای ایدی مدیریت کنم
