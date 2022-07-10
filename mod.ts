import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();
const port = 8000;

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

if (import.meta.main) {
  await app.listen({ port });
}
