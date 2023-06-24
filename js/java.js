$(function(){
  $('#toglee-menu').on('click', function(){
  $('nav ul').slideToggle("Slow")
  $("header").css({backgroundColor:"rgba(128, 128, 128, 0.119)" })
  $(".buttons").slideToggle("Slow")
  $('nav ul').css({
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      height:"100vh",
      position:"absolute",
      top:"100%",
      left:"0%",
      gap:"1rem",
      width: "100%",
      backgroundColor: "",

  })
  $('li').css({
      paddingTop:"20px",
      paddingBottom:"20PX"
  })
  $('nav ul').css({
    position:"relative",
  })

  })
})
