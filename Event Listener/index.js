// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector("h1").innerHTML="You have clicked the button"
// })

// $("button").click(function () {
//   $("h1").text("You have clicked the button");
// });
// $("button").click(function () {
//   $("h1").toggleClass("style1");
// });

// let totalButtons=document.querySelectorAll(".myButton").length;
// for(let i=0;i<totalButtons;i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//         let text=this.innerHTML;
//         document.querySelector("h1").innerHTML=text+"is Clicked"
//     })
// }

$(".myButton").mouseover(function () {
  let value = this.innerHTML;
  $("h1").text(value + "is Clicked");
});
