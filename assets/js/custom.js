// /**
//  *
//  * You can write your JS code here, DO NOT touch the default style file
//  * because it will make it harder for you to update.
//  * 
//  */

// "use strict";
 
var menu = document.getElementById("menu");
var contactme= document.getElementById("contactme");
var maindiv=document.getElementById("mainsidebarmain");
var body=$('body');
 
$(window).resize(function(){

    if($(window).width() >=764){
    //   $('.submenu').hide();
    
    menu.style.display = "none";
    body.removeClass("sidebar-gone");
     body.removeClass("sidebar-show");
    $('.main-sidebar').hide();
   // مخفی کردن در حالت بزرگ

   

    }
    if($(window).width() <=764){
        menu.style.display = "block";
         body.removeClass("sidebar-gone");
         body.addClass("sidebar-show");
        $('.main-sidebar').show();
//بازشدن در حالت کوچک
}
});
     
   
 
if ($(window).width() >= 764) {
    menu.style.display = "none";
    body.removeClass("sidebar-gone");
     body.removeClass("sidebar-show");
    $('.main-sidebar').hide();
   // مخفی کردن در حالت بزرگ
 

}
if ($(window).width() <= 764) {
    menu.style.display = "block";
    body.removeClass("sidebar-gone");
    body.addClass("sidebar-show");
   $('.main-sidebar').show();
//بازشدن در حالت کوچک

 

}
menu.addEventListener("onClick", opensidebar);

function opensidebar() {
  alert("hhh");
}
 
 
 
 

