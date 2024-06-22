function login(){
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value; 
    var user = localStorage.getItem("info");
    var data = JSON.parse(user);
    if (user == null){
        alert("Vui lòng đăng ký tài khoản")
    }
    else if (email == data.email && password==data.password){ 
        alert(" Đăng nhập thành công")
        window.location.href = "home.html"
    }
    else {
        alert("Đăng nhập thất bại")
    }
    return false;

}