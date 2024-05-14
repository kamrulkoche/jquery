// document.querySelector("h1").innerHTML = "Hi"; //Js
// $("h1").text("Goodbye");
$("#p1").html("<b>Hello</b>");
// $("h1").append(" Kamrul");
$("h1").prepend("Kamrul ");

// after before

let para2 = $("<p></p>").text("This is paragraph");
$("#ba").before(para2);
// $("#ba").after(para2);
