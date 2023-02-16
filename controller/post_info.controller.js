const pool = require("../database/index.js");
const postsController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from post_info");
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
        "select * from post_info where id_blog = ?",
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
        id_blog,
        titulo,
        descricao_curta,
        horario_post,
        autor_post,
        categoria,
      } = req.body;
      const sql =
        "insert into post_info (id_blog,titulo,descricao_curta,horario_post,autor_post,categoria) values (?,?,?,?,?,?)";
      const [rows, fields] = await pool.query(sql, [
        id_blog,
        titulo,
        descricao_curta,
        horario_post,
        autor_post,
        categoria,
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
        id_blog,
        titulo,
        descricao,
        horario_post,
        autor,
        categoria,
        imagem,
      } = req.body;
      const { id } = req.params;
      const sql =
        "update post_info set titulo = ?, descricao_curta = ?, horario_post = ?, autor_post = ?, categoria = ? where id_blog = ?";
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
      const sql = "delete from post_info where id_blog = ?";
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
