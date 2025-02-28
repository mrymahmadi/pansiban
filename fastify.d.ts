/*import "fastify";
declare module "fastify" {
  interface FastifyRequest {
    users?: {
      id: number;
      email: string;
      phone: number;
    };
  }
}

import "npm:@fastify/jwt";
import { FastifyJWT } from "npm:@fastify/jwt";

declare module "npm:@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: number; role: string };
    user: {
      id: number;
      role: string;
    };
  }
}

declare module "fastify" {
  interface FastifyRequest {
    jwt: FastifyJWT;
    user: FastifyJWT["user"];
  }
}

*/
//new
import "npm:@fastify/jwt";
import { FastifyJWT } from "npm:@fastify/jwt";

declare module "npm:@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: number; role: string };
    user: {
      id: number;
      role: string;
    };
  }
}

declare module "fastify" {
  interface FastifyRequest {
    jwt: FastifyJWT;
    user: FastifyJWT["user"];
  }
}
