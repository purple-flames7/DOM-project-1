const products = document.querySelectorAll(".card");

function updateTotal() {
  let total = 0;
  const allProducts = document.querySelectorAll(".card");
  allProducts.forEach((product) => {
    const priceText = product.querySelector(".unit-price").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    total += price * quantity;
  });

  document.querySelector(".total").textContent = `${total} $`;
}

products.forEach((product) => {
  const plusBtn = product.querySelector(".fa-plus-circle");
  const minusBtn = product.querySelector(".fa-minus-circle");
  const quantityEl = product.querySelector(".quantity");
  const deleteBtn = product.querySelector(".fa-trash-alt");
  const heartBtn = product.querySelector(".fa-heart");

  // + button
  plusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityEl.textContent);
    quantityEl.textContent = ++quantity;
    updateTotal();
  });

  // - button
  minusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityEl.textContent);
    if (quantity > 0) {
      quantityEl.textContent = --quantity;
      updateTotal();
    }
  });

  // Delete button
  deleteBtn.addEventListener("click", () => {
    product.closest(".card-body").remove();
    updateTotal();
  });

  // Like button
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
    heartBtn.style.color = heartBtn.classList.contains("liked")
      ? "red"
      : "black";
  });
});

updateTotal(); // initialize total on load
