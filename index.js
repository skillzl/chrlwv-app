require("dotenv").config();
require("./src/utils/Types")();

const Bot = require("./src/struct/Bot");
const client = new Bot();

(async () => await client.start(process.env.TOKEN))();
