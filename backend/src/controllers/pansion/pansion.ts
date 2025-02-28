import { FastifyRequest, FastifyReply } from "../../tools/deps.ts";
//import { prisma } from "../../tools/prismaConf.ts";
//import { promisify } from "node:util";
//import { copy } from "https://deno.land/std@0.106.0/io/util.ts";
//import { join } from "https://deno.land/std@0.106.0/path/mod.ts";
/*
import { createRequire } from "node:module";
import { PrismaClient } from "../../generated/client/index.d.ts";
const require = createRequire(import.meta.url);
const Prisma = require("../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();
*/
import { prisma } from "../../tools/prismaConf.ts";

import { IPansion, Contract, PansionType } from "../../models/users.ts";

export const getPansions = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const pansions = await prisma.pansion.findMany();
  reply.send(pansions);
};

export const getPansion = async (
  request: FastifyRequest<{
    //Params: { id: string };
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  const { id } = request.body as IPansion;

  if (id) {
    const pansion = await prisma.pansion.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        address: true,
        codeParvane: true,
        numberOfRoom: true,
        numberOfBed: true,
        advancePayment: true,
        chargeMony: true,
        typeOfContract: true,
        typeOfPansion: true,
      },
    });
    reply.send(pansion);
  } else {
    reply.status(404).send("pansion not found");
  }
};

export const newPansion = async (
  request: FastifyRequest<{
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  const body = request.body as IPansion;

  const {
    name,
    phone,
    address,
    Capacity,
    codeParvane,
    numberOfRoom,
    numberOfBed,
    advancePayment,
    typeOfContract,
    typeOfPansion,
    chargeMony,
    provinceId,
    cityId,
  } = body;

  if (
    !name ||
    !phone ||
    !codeParvane ||
    !numberOfRoom ||
    typeOfPansion ||
    !typeOfContract ||
    !advancePayment ||
    !chargeMony ||
    !address ||
    Capacity
  ) {
    reply.status(501).send(" some values not required");
    return;
  }

  const existCodeParvane = await prisma.pansion.findUnique({
    where: { codeParvane: codeParvane },
  });

  if (existCodeParvane) {
    reply.send("code parvane not unique.");
  }

  const contractType = body.typeOfContract;
  if (
    contractType !== Contract.ANNUALLY &&
    contractType !== Contract.FOUR_MONTHS
  ) {
    reply.send("contract type not standard.");
    return;
  }

  const pansionType = body.typeOfPansion;
  if (
    pansionType !== PansionType.EMPLOYEE &&
    pansionType !== PansionType.STUDENT
  ) {
    reply.send(
      "pansion type not standard. or your choose is equals with STUDENT - EMPLOYEE , please check space word."
    );
    return;
  }

  try {
    const newPans = await prisma.pansion.create({
      data: {
        name,
        phone,
        address,
        Capacity,
        codeParvane,
        numberOfRoom,
        numberOfBed,
        advancePayment,
        chargeMony,
        provinceId,
        cityId,
        typeOfContract,
        typeOfPansion,
      },
      select: {
        id: true,
        name: true,
      },
    });
    reply.status(201).send(newPans);
  } catch (error) {
    reply.status(500).send("An error occurred while creating the pansion");
  }
};

export const updatePansion = async (
  request: FastifyRequest<{
    //Params: { id: string };
    Body: unknown;
  }>,
  reply: FastifyReply
) => {
  const { id, name, phone, active, address } = request.body as {
    id: number;
    name: string;
    phone: string;
    active: boolean;
    address: string;
  };

  if (!name || !phone) {
    reply.status(501).send(" not any true key/value for set");
  }

  try {
    const newInfo = await prisma.pansion.update({
      where: { id },
      data: { name, phone, active, address },
      select: {
        id: true,
        name: true,
        phone: true,
        address: true,
        active: true,
      },
    });

    reply.status(201).send(newInfo);
  } catch (error) {
    reply.status(404).send("this id for pansion not exist.");
  }
};

export const deletePansion = async (
  request: FastifyRequest<{ Body: unknown }>,
  reply: FastifyReply
) => {
  const data = request.body as IPansion;
  console.log(data);
  reply.send("you cant delete any pansion! just GHOST have this access.");
};

function ensureDir(uploadDir: string) {
  throw new Error("Function not implemented.");
}
//اسپیس های اول و آخر مقادیر رشته ای رو برنمیداره - این مورد هم باعث خطا در ایجاد/ساخت پانسیون جدید میشه

function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
/*
export const addImagePns = async (
  req: FastifyRequest<{ Body: IPansion; Files: { image: ImagePart } }>,
  rep: FastifyReply
) => {
  const { name, address } = req.body;
  const file = req.files?.image;

  if (!file) {
    return rep.status(400).send({ error: "no image file provided." });
  }

  //only allow JPEG content type
  if (file.mimetype !== "image/jpeg") {
    return rep.status(400).send({ error: "only JPG files are accepted." });
  }

  const filename = `${Date.now()}_${file.filename.replace(/ /g, "_")}.jpg`;
  const path = `./uploads/${filename}`;

  //ensure the uploads directory exists
  try {
    await Deno.stat("./uploads");
  } catch {
    await Deno.mkdir("./uploads", { recursive: true });
  }

  //validate jpeg header  (starts with 255, 216)
  const reader = file.filepipe().getReader();
  let headerBuffer = new Uint8Array();
  let headerRead = false;
  const output = await Deno.open(path, { create: true, write: true });
  const writer = output.writable.getWriter();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      // Write the chunk to the file
      await writer.write(value);
      if (!headerRead) {
        // Accumulate the header buffer
        const newHeaderBuffer = new Uint8Array(
          headerBuffer.length + value.length
        );
        newHeaderBuffer.set(headerBuffer);
        newHeaderBuffer.set(value, headerBuffer.length);
        headerBuffer = newHeaderBuffer;
        if (headerBuffer.length >= 2) {
          const jpegHeader = new Uint8Array([255, 216]);
          if (arraysEqual(headerBuffer.subarray(0, 2), jpegHeader)) {
            headerRead = true;
          } else {
            return rep.status(400).send({ error: "Invalid file type" });
          }
        }
      }
    }
  } finally {
    await writer.close();
    output.close();
  } // Generate image URL
  const imageUrl = `http://localhost:3000/uploads/${filename}`;

  // ایجاد در دیتابیس
  try {
    const pansion = await prisma.pansion.create({
      data: {
        name,
        address,
        imageUrl,
      },
    });
    rep.send(pansion);
  } catch (error) {
    console.error("Error creating pansion:", error);
    return rep.status(500).send({ error: "error creating user" });
  }
};

function arraysEqual(a: any, b: any) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
*/
