const { Application } = await import("https://deno.land/x/oak@v17.0.0/mod.ts");

const server = new Application();

server.use(ctx => {
  ctx.response.body = {
    message: 'hello world',
  };
});

export { server };
