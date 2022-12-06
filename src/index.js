require("dotenv").config();
require("./utils/Types")();
import { api } from "@nitric/sdk";

const helloApi = api('main');

helloApi.get("/hello/:name", async (ctx) => {
    const { name } = ctx.req.params;

    ctx.res.body = `Hello ${name}`;

    return ctx;
});

const Bot = require("./struct/Bot");
const client = new Bot();

(async () => await client.start(process.env.TOKEN))();
