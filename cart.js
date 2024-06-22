document.addEventListener("DOMContentLoaded", function() {
  // Lấy danh sách sản phẩm từ Local Storage (nếu đã tồn tại)
  const products = localStorage.getItem("products");
  if (products) {
    const productList = JSON.parse(products);

    // Lấy thẻ tbody trong bảng
    const tableBody = document.getElementById("fill-product");

    // Duyệt qua danh sách sản phẩm và tạo hàng mới trong bảng
    productList.forEach(function(product) {
      // Tạo một hàng mới
      const newRow = document.createElement("tr");

      // Tạo các ô dữ liệu cho hàng mới
      const nameCell = document.createElement("td");
      nameCell.textContent = product.name;

      const priceCell = document.createElement("td");
      const formattedPrice = formatPrice(product.price);
      priceCell.textContent = formattedPrice;

      const quantityCell = document.createElement("td");
      quantityCell.textContent = product.quantity;

      const totalCell = document.createElement("td");
      const totalPrice = parseFloat(product.price) * parseInt(product.quantity);
      const formattedTotalPrice = formatPrice(totalPrice);
      totalCell.textContent = formattedTotalPrice;

      // Thêm các ô dữ liệu vào hàng mới
      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(quantityCell);
      newRow.appendChild(totalCell);

      // Thêm hàng mới vào tbody của bảng
      tableBody.appendChild(newRow);
    });
  }

  function formatPrice(price) {
    return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  }

  function handleBuyButtonClick(event) {
    const productElement = event.target.closest(".product");
    const productName = productElement.dataset.name;
    const productPrice = parseFloat(productElement.dataset.price);
    const productImage = productElement.dataset.image;

    const countElement = document.getElementById("count");
    const quantity = parseInt(countElement.innerText);

    if (quantity === 0) {
      alert("Vui lòng nhập số lượng sản phẩm.");
      return;
    }

    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: quantity
    };

    let products = localStorage.getItem("products");
    if (products) {
      products = JSON.parse(products);
    } else {
      products = [];
    }

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Sản phẩm đã được thêm vào giỏ hàng thành công!");
  }

  function decrease() {
    const countElement = document.getElementById("count");
    let count = parseInt(countElement.innerText);
    if (count > 0) {
      count--;
      countElement.innerText = count;
    }
  }

  function increase() {
    const countElement = document.getElementById("count");
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
  }

  const buyButtons = document.getElementsByClassName("buy-button");
  Array.from(buyButtons).forEach(function(button) {
    button.addEventListener("click", handleBuyButtonClick);
  });

  const moneyElement = document.getElementById('money');
  let moneyAmount = localStorage.getItem("money");
  if (moneyAmount) {
    moneyAmount = parseFloat(moneyAmount.replace(/[^0-9.-]+/g,"")); // Chuyển đổi chuỗi thành số
    moneyElement.innerText = formatCurrency(moneyAmount);
  }

  const paymentButton = document.getElementById('paymentButton');
  paymentButton.addEventListener('click', function(event) {
    const requiredAmount = 1377500; // Số tiền cần thiết để thanh toán
    if (!products || products.length === 0) {
      alert("Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
      event.preventDefault();
      return;
    }
    if (moneyAmount && moneyAmount >= requiredAmount) {
      // Thực hiện thanh toán
      moneyAmount -= requiredAmount; // Trừ giá tiền sản phẩm
      localStorage.setItem("money", moneyAmount); // Cập nhật lại giá trị trong local storage

      // Xóa khóa "products" khỏi local storage
      localStorage.removeItem("products");

      // Chuyển hướng đến trang "thank.html"
      // ...
    } else {
      event.preventDefault(); // Ngăn chặn chuyển hướng đến trang "thank.html"
      alert('Không đủ tiền!');
    }
  });
});