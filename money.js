function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN") + ' ₫';
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const moneyElement = document.getElementById('money');
    let moneyAmount = localStorage.getItem("money");
    if (moneyAmount) {
      moneyAmount = parseFloat(moneyAmount);
      moneyElement.innerText = formatCurrency(moneyAmount);
    }
  });