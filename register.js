function register() {
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value; 
    var user = {
       email : email,
       password : password, 
    }
    var json = JSON.stringify(user);
    localStorage.setItem("info", json);
    alert ( "Đăng kí thành công");
    return false;
}
