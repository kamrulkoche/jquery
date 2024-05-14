$("#btn").click(function () {
  //   alert("Hello");
  //   $("#div1").hide();
  //   $("#div1").show();
  //   $("#div1").hide(2000).show(2000);
  //   $("#div1").toggle(2000);
  //   $("#div1").fadeIn(2000);
  //   $("#div1").fadeOut(2000);
  //   $("#div1").fadeOut(2000).fadeIn(2000);
  //   $("#div1").fadeToggle(2000);
  //   $("#div1").fadeTo(2000, 0.6);
  //   $("#div1").slideUp(2000);
  //   $("#div1").slideUp(2000).slideDown(2000);
  //   $("#div1").slideToggle(2000);
  $("#div1").animate(
    {
      height: "400px",
      width: "900px",
      marginLeft: "30px",
      opacity: "0.6",
    },
    2000
  );
});
