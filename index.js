const express  = require("express");

const cors = require("cors");

const ProductController = require("./controllers/product.controller");
const CartController = require("./controllers/cart.controller");
const wishlistController = require("./controllers/wishlist.controller");

const app = express();

app.use(cors());

app.use(express.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


app.use("/products",ProductController);
app.use("/cart",CartController);
app.use("/wishlist",wishlistController);

module.exports = app;