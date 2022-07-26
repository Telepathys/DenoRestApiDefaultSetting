// @ts-ignore
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
    ctx.response.body = "Hello world!";
});
router.get("/test", (ctx) => {
    ctx.response.body = "test complete";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
    "listen",
    (e) => console.log("Listening on http://localhost:8080"),
);
// @ts-ignore
await app.listen({ port: 8080 });