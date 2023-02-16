const pool = require("../database/index.js");
const postsController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from posts");
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "select * from posts where id_post = ?",
        [id]
      );
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
  create: async (req, res) => {
    try {
      const {
        id_post,
        titulo,
        descricao,
        horario_post,
        autor,
        categoria,
        imagem,
      } = req.body;
      const sql =
        "insert into posts (id_post,titulo,descricao,horario_post,autor,categoria,imagem) values (?,?,?,?,?,?,?)";
      const [rows, fields] = await pool.query(sql, [
        id_post,
        titulo,
        descricao,
        horario_post,
        autor,
        categoria,
        imagem,
      ]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
  update: async (req, res) => {
    try {
      const {
        id_post,
        titulo,
        descricao,
        horario_post,
        autor,
        categoria,
        imagem,
      } = req.body;
      const { id } = req.params;
      const sql =
        "update posts set titulo = ?, descricao = ?, horario_post = ?, autor = ?, categoria = ?, imagem = ? where id_post = ?";
      const [rows, fields] = await pool.query(sql, [
        titulo,
        descricao,
        horario_post,
        autor,
        categoria,
        imagem,
        id,
      ]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const sql = "delete from posts where id_post = ?";
      const [rows, fields] = await pool.query(sql, [id]);
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
      });
    }
  },
};
module.exports = postsController;
