import fastify from "fastify";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

app.get("/ping", (request, reply) => {
  return reply.status(200).send({
    ping: "pong",
  });
});

const start = async () => {
  try {
  await app.listen({ port: 4000 });
  console.log("servidor rodando");
} catch (err) {
  console.log(err);
  process.exit(1);
  }
}

start()
