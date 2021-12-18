let cat = window.location.hash.split("=")[1];
console.log(cat);
var AllProducts;
var newAllProducts;
fetch(`https://flipkart-dummy-server.herokuapp.com/products/category/${cat}`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    // console.log(res);
    document.getElementById("productList").innerHTML = null;
    AllProducts = res.products;
    ogData = res.products;
    if (
      AllProducts[0].category == "shoes" ||
      AllProducts[0].category == "cloth"
    ) {
      let gender = document.getElementById("gender");
      gender.style.visibility = "visible";
    }

    products(AllProducts);
  });

function products(AllProducts) {
  let Allproductslist = document.getElementById("productList");
  console.log(AllProducts.length);
  let total = document.getElementById("total");
  total.innerHTML = "( " + AllProducts.length + " Results)";
  AllProducts.forEach((prod) => {
    let a = document.createElement("a");
    a.href = `./product.html#id=${prod._id}`;

    let product_div = document.createElement("div");
    product_div.className = "card";

    let product_img = document.createElement("div");
    product_img.className = "card_img";

    let prod_img = document.createElement("img");
    prod_img.src = prod.image[0];

    product_img.append(prod_img);

    let product_details = document.createElement("div");
    product_details.className = "cardBody";

    let title = document.createElement("p");
    title.innerText = prod.name;
    title.className = "title";

    let prices_div = document.createElement("div");
    prices_div.className = "prices";

    let disc_price = document.createElement("p");
    disc_price.innerText = "₹" + prod.discount_price;
    disc_price.className = "fontsize18";

    let mrp = document.createElement("del");
    mrp.innerText = "₹" + prod.retail_price;
    mrp.className = "grey";

    let disc_per = document.createElement("p");
    let per = Math.floor((prod.discount_price / prod.retail_price) * 100);
    if (per == 100) {
      disc_per.innerText = 0 + "% off";
    } else {
      disc_per.innerText = per + "% off";
    }

    disc_per.className = "disc_per";

    prices_div.append(disc_price, mrp, disc_per);

    let assure_img = document.createElement("img");
    assure_img.src =
      "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    assure_img.className = "assure_icon";

    let ratings_div = document.createElement("div");
    ratings_div.className = "ratingdiv";
    let star = document.createElement("i");
    star.className = "fa fa-star";

    ratings_div.append((Math.random() * 5).toFixed(1), star);

    let rating_assure_div = document.createElement("div");
    rating_assure_div.className = "rating_assure_div";
    rating_assure_div.append(ratings_div, assure_img);

    if (per > 50) {
      product_details.append(title, prices_div, rating_assure_div);
    } else {
      let emptyspace = document.createElement("p");
      product_details.append(title, prices_div, ratings_div);
    }

    product_div.append(product_img, product_details);

    a.append(product_div);
    Allproductslist.append(a);
    // console.log(a);
  });
}

function lowtohigh() {
  document.getElementById("productList").innerHTML = null;
  newAllProducts = AllProducts.sort((a, b) => {
    return a.discount_price - b.discount_price;
  });
  products(newAllProducts);
}

function hightoLow() {
  document.getElementById("productList").innerHTML = null;

  newAllProducts = AllProducts.sort((a, b) => {
    return b.discount_price - a.discount_price;
  });
  products(newAllProducts);
}
var check;
function sortByrange() {
  document.getElementById("productList").innerHTML = null;
  let min = +document.getElementById("min").value;
  let max = +document.getElementById("max").value;

  console.log(typeof min, max);
  newAllProducts = AllProducts.filter(
    (prod) => prod.discount_price >= min && prod.discount_price <= max
  );
  // console.log(newAllProducts);
  products(newAllProducts);
  check = 1;
}

function assuredprods() {
  document.getElementById("productList").innerHTML = null;
  console.log(newAllProducts);
  let assured = document.querySelector(".assurecheckbx").checked;
  console.log(assured);
  if (assured == true) {
    if (check == 1) {
      let anewAllProducts = newAllProducts.filter(
        (prod) =>
          Math.floor((prod.discount_price / prod.retail_price) * 100) >= 50
      );
      console.log(anewAllProducts);
      products(anewAllProducts);
    } else {
      let anewAllProducts = AllProducts.filter(
        (prod) =>
          Math.floor((prod.discount_price / prod.retail_price) * 100) >= 50
      );
      console.log(anewAllProducts);
      products(anewAllProducts);
    }
  } else {
    products(newAllProducts);
  }
}

function bygen() {
  document.getElementById("productList").innerHTML = null;
  console.log(AllProducts);
  let gen = document.getElementById("gen").value;
  // console.log(gen);
  if (gen == "men" || gen == "women") {
    newAllProducts = AllProducts.filter((prod) => prod.gender == gen);
    // AllProducts.forEach(p => console.log(p.gender))
    // console.log(newAllProducts);
    products(newAllProducts);
  } else {
    products(AllProducts);
  }
}

// function catprods() {
//   // document.getElementById("productList").innerHTML = null;
//   let newlist;

//   if (document.querySelector(".shoes").checked) {
//     newlist = AllProducts.filter((prod) => prod.gender == "Men");
//     console.log(newlist);
//   } else {
//     console.log("M0");
//   }

//   if (document.querySelector(".womens").checked) {
//     console.log("womens");
//   } else {
//     console.log("W0");
//   }
// }
