import {createPool} from "mysql2/promise";

export const pool = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'juanpassword',
  database: 'tasksdb'
})
try {
  console.log("Conectado a la base de datos")
} catch (error) {
  console.log(error)
}

