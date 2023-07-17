const dbPool = require("../config/database.js");

const getAllProducts = () => {
  const SQLQuery = "SELECT * FROM items";

  return dbPool.execute(SQLQuery);
};

const createNewProduct = (body) => {
  const SQLQuery = `INSERT INTO items (name, description, price, stock) VALUES ('${body.name}', '${body.description}', ${body.price}, ${body.stock})`;

  return dbPool.execute(SQLQuery);
};
const updateProduct = (body, id) => {
  const SQLQuery = `UPDATE items SET name='${body.name}', description='${body.description}', price=${body.price}, stock=${body.stock} WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

const deleteProduct = (id) => {
  const SQLQuery = `DELETE FROM items WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};
const searchProduct = (name) => {
  const SQLQuery = `SELECT * FROM items WHERE name LIKE '${name}%';`;

  return dbPool.execute(SQLQuery);
};
module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
