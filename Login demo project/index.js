$("#loginButton").click(function () {
  let password1 = $("#pass1").val();
  let password2 = $("#pass2").val();

  if (password1 != "" && password2 != "") {
    if (password1 == password2) {
      alert("Successfully login");
    } else {
      alert("Password Missmatch");
    }
  } else {
    alert("Please Enter Password");
  }
});
