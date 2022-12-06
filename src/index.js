require("dotenv").config();
require("./utils/Types")();

const Bot = require("./struct/Bot");
const client = new Bot();

(async () => await client.start(process.env.TOKEN))();
