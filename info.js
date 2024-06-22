let previouslyClickedBlock = null;

function changeBorderColor(block) {
  if (previouslyClickedBlock !== null) {
    previouslyClickedBlock.classList.remove("clicked");
  }
  block.classList.add("clicked");
  previouslyClickedBlock = block;
}



let countElement = document.getElementById("count");
let count = 0;

function decrease() {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
}

function increase() {
  count++;
  countElement.textContent = count;
}






function changeContent(boxId) {
  var contentDiv = document.getElementById("content");

  if (boxId === "box1") {
    contentDiv.innerHTML = "<p>Khi thế giới ngày càng phát triển hơn về mọi mặt, thời trang cũng vì thế mà không ngừng tiến bước về phía trước. Nhưng! Tất cả những cái mới đều được xây dựng dựa trên một thứ gọi là NỀN TẢNG. Và dĩ nhiên, VANS được cộng đồng thể thao biết đến như một thương hiệu thời trang chuyên về giày dành cho các bộ môn nghệ thuật đường phố, nổi bật là trượt ván. Với chiều dài hoạt động chuyên môn hơn 50 năm trong ngành thời trang may mặc, thương hiệu được sáng lập bởi một nghệ nhân giày - ông Paul Van Doren vào năm 1966. VANS được đặt trụ sở đầu tiên tại Anaheim, California, Mỹ và hoạt động cho đến ngày nay. VANS AUTHENTIC là một trong những sản phẩm xung phong đầu tiên, mở đầu cho một con đường tiếp nối đam mê của một thương hiệu giày vươn tầm thế giới. Và khi mà cái cũng cùng cái mới giao thoa kết hợp cùng với sự tinh tế và sự cố gắng không ngừng phá bỏ giới hạn của nhà OFF THE WALL, một tinh hoa đã của làng Sneaker đã ra đời được ra mắt sớm nhất từ năm 1966 với tên gọi VANS #44, được trang bị đế cao su độ bám tốt cho những môn thể thao mạo hiểm như trượt ván, BMX v.v..., upper vải canvas cao cấp, phong cách cổ điển hợp với cả nam lẫn nữ</p><img src='https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-2.png?v=1625925620597' alt='Ảnh'><h6>VANS CLASSIC AUTHENTIC BLACK/WHITE:</h6><p>Là phiên bản được ưa chuộng nhất trong bộ sưu tập Authentic của VANS với sự kết hợp 2 màu đen trắng dễ phối đồ và custom, đặc biệt là phiên bản cổ nhất có tuổi đời hơn 50 năm, dù vậy vẫn được fan hâm mộ săn đón và được sử dụng khá nhiều với những vận động viên trượt ván chuyên nghiệp. VANS CLASSIC AUTHENTIC BLACK/WHITE được đánh giá là một siêu phẩm cần có khi bạn quyết định sẽ trở thành một tín đồ của nhà VANS đấy!</p><img src='https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-3.png?v=1625925623543' alt='Ảnh'><img src='https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-4.png?v=1625925626347' alt='Ảnh'><img src='https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317' alt='Ảnh'><img src='https://bizweb.dktcdn.net/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-5.png?v=1625925629497' alt='Ảnh'>"
  } else if (boxId === "box2") {
    contentDiv.innerHTML = "<h6>Các bước kiểm tra size giày VANS:</h6><p>Bước 1: Chuẩn bị một tờ giấy và đặt chân lên tờ giấy đó</p><p>Bước 2: Vẽ gót chân và mũi chân lên tờ giấy.</p><p>Bước 3: Kẻ 1 đường từ đầu gót chân đến đầu ngón dài nhất như hình (lưu ý: sử dụng ngón chân dài nhất vì một số người dài ngón cái, một số người dài ngón giữa v.v...)</p><p>Bước 4: Đo chiều dài đường thẳng vừa kẻ và so sánh với mục Cm của bảng size.</p><img src='https://bizweb.dktcdn.net/100/140/774/files/bang-size-vans-chuan-nhat-1.jpg?v=1626244976740' alt='Ảnh'><p>Lưu ý: Mỗi hãng thể thao có mỗi bảng size khác nhau, không áp dụng size của hãng khác vào hãng VANS.</p><p>Những sản phẩm thuộc VANSVN phân phối sẽ có những yếu tố sau đây:</p><img src='https://bizweb.dktcdn.net/100/140/774/files/vans-vinh-quang-minh.jpg?v=1626767992769' alt='Ảnh'><p>Những sản phẩm không có phiếu bảo hành, tag độc quyền v.v... chúng tôi sẽ không chịu trách nhiệm cho sản phẩm đó</p>"
  }

  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("selected");
  }

  var selectedBox = document.getElementById(boxId);
  selectedBox.classList.add("selected");
}





document.addEventListener("DOMContentLoaded", function() {
  const moneyElement = document.getElementById('money');
  let moneyAmount = localStorage.getItem("money");
  if (moneyAmount) {
    moneyAmount = parseFloat(moneyAmount);
    moneyElement.innerText = formatCurrency(moneyAmount);
  }
});











