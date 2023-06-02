const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser:true
}).then(()=>console.log(`DB connected successully`));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App runnig on port ${port}`);
});
