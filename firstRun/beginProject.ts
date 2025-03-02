import Fastify from "npm:fastify";
import { prisma } from "../backend/src/tools/prismaConf.ts";
import console from "node:console";
import { Role } from "../backend/src/models/users.ts";

const fastify = Fastify({ logger: false });

fastify.addHook("onReady", async () => {
  const firstProvince = {
    id: 100,
    name: "همدان",
    enName: "hamedan",
  };

  const createProvince = await prisma.province.create({ data: firstProvince });
  console.log(`province: ${createProvince}, input: ${firstProvince}`);

  const firstCity = {
    id: 101,
    name: "همدان",
    enName: "hamedan",
    provinceId: 100,
  };

  const createCity = await prisma.city.create({ data: firstCity });
  console.log(`city: ${createCity}, input: ${firstCity}`);

  const ghostPosition = {
    id: 102,
    name: "مدیر ارشد",
    level: Role.GHOST,
  };

  const createPosition = await prisma.position.create({ data: ghostPosition });
  console.log(`city: ${createPosition}, input: ${ghostPosition}`);

  //this has some problems
  const Ghost = {
    firstName: "mrym",
    lastName: "ahmadi",
    email: "test@gmail.com",
    phone: "990839894",
    positionId: 3,
    provinceId: 1,
    cityId: 2,
  };
  const createUserGhost = prisma.user.create({ data: Ghost });
  console.log(`city: ${createUserGhost}, input: ${Ghost}`);
});
