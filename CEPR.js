// ==UserScript==
// @name         expired Captcha page refresher
// @github       http://github.com/
// @version      1.0
// @description  feel free to donate: 17Gyqxoexraa9qfVKYZW7buftuVYtaEp49
// @author       Sarge
// @match        https://freebitco.in/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
  
    var body = $('body');
  
  setInterval(function() {
  
  $(document).ready(function()
  {
  
  
    var element = document.getElementById("free_play_error");
    var hidden_or_display = element.style.display;
  
  if (hidden_or_display == "none")
  {
  //alert("Loop Works");
  
  }else{location.reload();}
  
   
  
  })}, 10000);
  
    })();
  