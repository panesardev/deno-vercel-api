import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const server = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    message: 'hello world',
  };
});

server.use(router.routes());
server.use(router.allowedMethods());

export { server };
