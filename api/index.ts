import { server } from '../src/server.ts';

server.use(ctx => {
  ctx.response.body = {
    message: 'hello world',
  };
});

export default server.handle;