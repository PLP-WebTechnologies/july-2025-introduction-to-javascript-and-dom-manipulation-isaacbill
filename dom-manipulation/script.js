// ================================
// Part 1: Basics
// ================================
function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You can shop independently!";
  } else if (age > 0) {
    result.textContent = "⚠️ You might need an adult with you to shop.";
  } else {
    result.textContent = "Please enter a valid age.";
  }
}

// ================================
// Part 2: Functions
// ================================
function showGreeting(name) {
  document.getElementById("greeting").textContent = 
    `👋 Welcome, ${name}! Ready to shop?`;
}

// ================================
// Part 3 + 4: Shopping Cart + DOM
// ================================
let cart = [];
let discountApplied = false;

// Add item to cart
document.getElementById("addItemBtn").addEventListener("click", function() {
  let name = document.getElementById("itemName").value;
  let price = parseFloat(document.getElementById("itemPrice").value);

  if (name && price > 0) {
    cart.push({ name: name, price: price });
    updateCart();
  } else {
    alert("Please enter a valid item and price.");
  }

  // Reset inputs
  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
});

// Update cart display
function updateCart() {
  let cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; // clear previous list

  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

    // Add remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener("click", function() {
      removeItem(index);
    });

    li.appendChild(removeBtn);
    cartList.appendChild(li);

    total += item.price;
  });

  // Apply discount if already applied
  if (discountApplied) {
    total *= 0.9; // 10% off
    document.getElementById("discountMsg").textContent = "✅ Discount applied: 10% off";
  }

  document.getElementById("totalBill").textContent = 
    `Total: $${total.toFixed(2)}`;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Apply discount code
document.getElementById("applyDiscountBtn").addEventListener("click", function() {
  let code = document.getElementById("discountCode").value.trim();
  
  if (code === "SAVE10" && !discountApplied) {
    discountApplied = true;
    updateCart();
  } else if (discountApplied) {
    document.getElementById("discountMsg").textContent = "⚠️ Discount already applied.";
  } else {
    document.getElementById("discountMsg").textContent = "❌ Invalid code.";
  }
});

// ================================
// Extra: Countdown (while loop)
// ================================
function countdown(start) {
  let result = document.getElementById("countdownResult");
  let i = start;
  let output = "";

  while (i > 0) {
    output += i + " ";
    i--;
  }
  result.textContent = "⏳ Countdown: " + output + "Go!";
}
