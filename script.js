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


   $('.project1').mouseenter(() => $('.project1-overlay').show()).mouseleave(() => $('.project1-overlay').hide());
  $(".project2").mouseenter(() => $(".project2-overlay").show()).mouseleave(() => $(".project2-overlay").hide());
  $(".project3").mouseenter(() => $(".project3-overlay").show()).mouseleave(() =>  $(".project3-overlay").hide());
  $(".project4").mouseenter(() => $(".project4-overlay").show()).mouseleave(() => $(".project4-overlay").hide());
  $(".project5").mouseenter(() => $(".project5-overlay").show()).mouseleave(() => $(".project5-overlay").hide());
  $(".project6").mouseenter(() => $(".project6-overlay").show()).mouseleave(() => $(".project6-overlay").hide());
  $(".project7").mouseenter(() => $(".project7-overlay").show()).mouseleave(() => $(".project7-overlay").hide());
  $(".project8").mouseenter(() => $(".project8-overlay").show()).mouseleave(() => $(".project8-overlay").hide());

  // contact form .

  $("#form").on('submit', () => {return Swal.fire(
    'Sent!',
    'Thank You, Message Recieved!',
    'success'
  )});
})
