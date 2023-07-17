const ProductsModel = require("../models/products");

const getAllProduct = async (req, res) => {
  try {
    const [data] = await ProductsModel.getAllProducts();

    res.json({
      message: "Get all Products success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server Errorr",
      serverMessage: error,
    });
  }
};

const createNewProduct = async (req, res) => {
  const { body } = req;
  if (!body.name || !body.description || body.price || body.stock) {
    return res.status(400).json({
      message: "Data Salah masukan",
    });
  }
  try {
    await ProductsModel.createNewProduct(body);
    res.status(201).json({
      message: "Create all Products success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server Errorr",
      serverMessage: error,
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await ProductsModel.updateProduct(body, id);
    res.json({
      message: "Berhasil Update data",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server Errorr",
      serverMessage: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductsModel.deleteProduct(id);
    res.json({
      message: "Berhasil Delete data",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "server Errorr",
      serverMessage: error,
    });
  }
};

const searchProduct = async (req, res) => {
  const { name } = req.params;
  const [data] = await ProductsModel.searchProduct(name);

  try {
    // console.log(Object.keys(data).length === 0);

    if (Object.keys(data).length === 0) {
      res.json({
        message: "Data tidak ditemukan",
        data: null,
      });
    } else {
      res.json({
        message: "Berhasil cari data",
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
