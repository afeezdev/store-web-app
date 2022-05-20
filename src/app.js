const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");


// RENDER PRODUCTS
function renderProdcuts() {
    items.forEach((item) => {
      productsEl.innerHTML += `
              <div class="item">
                  <div class="item-container">
                      <div class="item-img">
                          <img src="${item.imgSrc}" alt="${item.name}">
                      </div>
                      <div class="desc">
                          <h2>${item.name}</h2>
                          <h2><small>£</small>${item.price}</h2>
                          <p>
                              ${item.special_offer}
                          </p>
                      </div>
                      <div class="add-to-wishlist">
                          <img src="./icons/heart.png" alt="add to wish list">
                      </div>
                      <div class="add-to-cart" onclick="addToCart(${item.id})">
                          <img src="./icons/bag-plus.png" alt="add to cart">
                      </div>
                  </div>
              </div>
          `;
    });
  }
  renderProdcuts();

  // cart array
let cart = []
//  JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();

// ADD TO CART
function addToCart(id) {

  // check if prodcut already exist in cart
//   if (cart.some((item) => item.id === id)) {
//     changeNumberOfUnits("plus", id);
//   } else {
//     const item = items.find((item) => product.id === id);

//     cart.push({
//       ...item,
//       numberOfUnits: 1,
//     });
//   }

//   updateCart();
}