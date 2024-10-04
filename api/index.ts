import { Application } from "https://deno.land/x/oak@v17.0.0/mod.ts";

const app = new Application();

app.use(ctx => {
  ctx.response.body = {
    message: 'hello world',
  };
});

export default app.handle;