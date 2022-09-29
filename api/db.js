import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rill",
    database:"blog"
}) 

export default db;