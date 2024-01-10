const path = require("path");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes");
const port = 3000;
const cors = require("cors");
const methodOverride = require("method-override");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { httpProxy } = require("http-proxy");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: 
      "http://localhost:3001",
      "https://vercel.com/syle-van/front-end-blog-web",
    credential: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

console.log("static", path.join(__dirname, "app/public/images/upload"));

app.use(
  "/static",
  express.static(path.join(__dirname, "app/public/images/upload"))
);
route(app);

mongoose
  .connect(
    "mongodb+srv://sycung:07122002@blogweb.c8um31o.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.log(err);
    console.error("Could not connect to MongoDB...");
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
