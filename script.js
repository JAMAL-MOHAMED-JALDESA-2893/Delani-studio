$(document).ready(() =>{

  //  hidding the description paragraphs for the icons

  $("#design-description").hide();    //hides the description paragraph for design.

  $("#development-description").hide();    //hides the description paragraph for development.

  $("#product-description").hide();    //hides the description paragraph for product management.
  

  // toggle for design icon and description

   $(".design-icon").on('click', () =>  $("#design-description, .design-icon").toggle());
   $("#design-description").on('click', () =>  $(".design-icon, #design-description").toggle());

   //toggle for development icon and description.

   $(".development-icon").on('click',() => $("#development-description, .development-icon").toggle());
   $("#development-description").on('click', () => $(".development-icon, #development-description").toggle());

  // toggle for product management and description.

   $(".product-icon").on('click',() => $("#product-description, .product-icon").toggle());
   $("#product-description").on('click',() => $(".product-icon, #product-description").toggle());
})
