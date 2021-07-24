$(document).ready(function()

{

  //  hidding the description paragraphs for the icons

  $("#design").hide();    //hides the description paragraph for design.

  $("#development").hide();    //hides the description paragraph for development.

  $("#product-mgt").hide();    //hides the description paragraph for product management.
  

  // toggle for design icon and description

   $(".design").on('click', () =>  $("#design, .design").toggle());
   $("#design").on('click', () =>  $(".design, #design").toggle());

   //toggle for development icon and description.

   $(".development").on('click',() => $("#development, .development").toggle());
   $("#development").on('click', () => $(".development, #development").toggle());

  // toggle for product management and description.

   $(".product-mgt").on('click',() => $("#product-mgt, .product-mgt").toggle());
   $("#product-mgt").on('click',() => $(".product-mgt, #product-mgt").toggle());
})
