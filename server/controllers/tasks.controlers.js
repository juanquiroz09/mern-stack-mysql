import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    //throw new Error("Error de conexion");
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  //console.log(req.params.id);
  try {
    //throw new Error("error de conexion");
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    //console.log([result]);
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
      //console.log(req.params.id)
  const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Task no found" });
  }
  return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};