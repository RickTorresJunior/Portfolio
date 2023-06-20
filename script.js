const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };
  
  resizeOps();
  window.addEventListener("resize", resizeOps);
  
  $(document).on('mobileinit', function () {
      $.mobile.ignoreContentEnabled = true;
  });
  
function openProject(project_title) {
    var i;
    var x = document.getElementsByClassName("project_title");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    document.getElementById(project_title).style.display = "grid";
}

// jQuery(document).ready(($) => {
//     $('.quantity').on('click', '.plus', function(e) {
//         let $input = $(this).prev('input.qty');
//         let val = parseInt($input.val());
//         $input.val( val+1 ).change();
//     });

//     $('.quantity').on('click', '.minus', 
//         function(e) {
//         let $input = $(this).next('input.qty');
//         var val = parseInt($input.val());
//         if (val > 0) {
//             $input.val( val-1 ).change();
//         } 
//     });
// });