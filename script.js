$(document).ready(() =>{

  //  hidding the description paragraphs for the icons

  $("#design-description").hide();    //hides the description paragraph for design.

  $("#development-description").hide();    //hides the description paragraph for development.

  $("#product-description").hide();  
  
//hides the description paragraph for product management.
  

  // toggle for design icon and description

   $(".design-icon").on('click', () =>  $("#design-description, .design-icon").toggle());
   $("#design-description").on('click', () =>  $(".design-icon, #design-description").toggle());

   //toggle for development icon and description.

   $(".development-icon").on('click',() => $("#development-description, .development-icon").toggle());
   $("#development-description").on('click', () => $(".development-icon, #development-description").toggle());

  // toggle for product management and description.

   $(".product-icon").on('click',() => $("#product-description, .product-icon").toggle());
   $("#product-description").on('click',() => $(".product-icon, #product-description").toggle());

   // mouse hover effect on the portfolio section.



   $('.project1').mouseover(function() {
    $('.project1-overlay').show();
  }).mouseout(function() {
    $('.project1-overlay').hide();
  });
  $(".project2").mouseenter(function() {
    $(".project2-overlay").show();
  }).mouseleave(function() {
    $(".project2-overlay").hide();
  });
  $(".project3").mouseenter(function() {
    $(".project3-overlay").show();
  }).mouseleave(function() {
    $(".project3-overlay").hide();
  });
  $(".project4").mouseenter(function() {
    $(".project4-overlay").show();
  }).mouseleave(function() {
    $(".project4-overlay").hide();
  });
  $(".project5").mouseenter(function() {
    $(".project5-overlay").show();
  }).mouseleave(function() {
    $(".project5-overlay").hide();
  });
  $(".project6").mouseenter(function() {
    $(".project6-overlay").show();
  }).mouseleave(function() {
    $(".project6-overlay").hide();
  });
  $(".project7").mouseenter(function() {
    $(".project7-overlay").show();
  }).mouseleave(function() {
    $(".project7-overlay").hide();
  });
  $(".project8").mouseenter(function() {
    $(".project8-overlay").show();
  }).mouseleave(function() {
    $(".project8-overlay").hide();
  });
})
