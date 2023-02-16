const express = require("express");

const app = express();

require("dotenv").config();

const postsRouter = require("./routes/post.routes");
const postInfoRouter = require("./routes/postinfo.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/posts", postsRouter);
app.use("/api/postsinfo", postInfoRouter);


app.get("/", (req, res) => {
  res.send("ola");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor na porta 3000 rodando...");
});
