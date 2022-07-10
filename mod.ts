import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();
const port = 8000;

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${ctx.request.method} ${ctx.request.url} - ${ctx.response.status}: ${time}`,
  );
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

if (import.meta.main) {
  await app.listen({ port });
}
