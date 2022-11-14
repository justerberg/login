
function getInfo() {
    event.preventDefault();

  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("outcome");

  const user = {
    username: "justerberg",
    password: "kodes",
  };


  if (userName == user.username && password == user.password) {
    // alert("successful");
    message.innerHTML = 'successful!';
  } else {
    // alert("Wrong username or Password");
    message.innerHTML = 'Wrong Username or Password';
  }
}
