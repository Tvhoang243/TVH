function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN") + ' ₫';
  }
  
  document.getElementById('topUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const network = document.getElementById('network').value;
    const amountInput = document.getElementById('amount');
    const amountText = amountInput.value.trim().replace(/\D/g, ''); // Loại bỏ các ký tự không phải số, bao gồm dấu phẩy
    const amount = parseFloat(amountText);
    const serial = document.getElementById('serial').value;
  
    if (network && amount && serial) {
      // Perform the deposit task here
      console.log(`Depositing ${formatCurrency(amount)} to ${network} with serial number ${serial}`);
      document.getElementById('message').innerText = 'Nạp thành công!';
  
      const moneyElement = document.getElementById('money');
      let currentAmount = localStorage.getItem("money");
      if (!currentAmount) {
        currentAmount = 0; // Gán giá trị mặc định là 0 nếu số hiện tại không hợp lệ
      }
      currentAmount = parseFloat(currentAmount);
      const newAmount = currentAmount + amount;
      moneyElement.innerText = formatCurrency(newAmount); // Hiển thị tổng số trong phần tử có id 'money' với đơn vị ₫ và dấu chấm ngăn cách hàng nghìn
  
      amountInput.value = ''; // Xóa giá trị trong input 'amount' sau khi nạp thành công
  
      // Cập nhật số tiền trong Local Storage
      localStorage.setItem("money", newAmount);
    } else {
      document.getElementById('message').innerText = 'Vui lòng điền đầy đủ thông tin.';
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const moneyElement = document.getElementById('money');
    let moneyAmount = localStorage.getItem("money");
    if (moneyAmount) {
      moneyAmount = parseFloat(moneyAmount);
      moneyElement.innerText = formatCurrency(moneyAmount);
    }
  });