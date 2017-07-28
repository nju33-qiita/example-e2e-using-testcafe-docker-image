const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = '<h1>Hello</h1>';
});

app.listen(3000);
console.log('listen to 3000');
