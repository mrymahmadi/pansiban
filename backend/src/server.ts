import Fastify from "npm:fastify";
import userRoutes from "./routes/user/users.ts";
import provinceRoutes from "./routes/province/province.ts";
import cityRoutes from "./routes/city/city.routes.ts";
import posRoutes from "./routes/position/position.ts";
import pansionRoutes from "./routes/pansion/pansion.ts";
import posInPansion from "./routes/posInPansion/posInPansion.ts";

const fastify = Fastify({ logger: false });

fastify.register(userRoutes);
fastify.register(provinceRoutes);
fastify.register(cityRoutes);
fastify.register(posRoutes);
fastify.register(pansionRoutes);
fastify.register(posInPansion);

fastify.listen({ port: 2000 }, (err, server) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on ${server} `);
  }
});
