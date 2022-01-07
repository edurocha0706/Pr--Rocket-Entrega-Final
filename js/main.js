window.onload=function(){
  'use strict';

  var $agent = document.querySelector('.agent');
  var $popupClose = document.querySelector('.popup-agent-close');
  var $popupWrapper = document.querySelector('.popup-wrapper');
  
  $agent.addEventListener('click', function(){
    $popupWrapper.style.display = 'block';
  });
  $popupClose.addEventListener('click', function(){
    $popupWrapper.style.display = 'none';
  });

  var $seeAllDiv = document.querySelector('.seeall-div-text')
  var $searchFilterFlexbox = document.querySelector('.search-filter-flexbox');
  var $addDivText = document.querySelector('.add-div-text');

  $seeAllDiv.addEventListener('click', function(){
    
    $seeAllDiv.remove();
    $searchFilterFlexbox.style.display = 'block';
    $addDivText.style.display = 'block';
    
  });

  var $addDivText = document.querySelector('.add-div-text');
  var $popupClose = document.querySelector('.popup-add-close');
  var $popupAdd = document.querySelector('.popup-add');
  
  $addDivText.addEventListener('click', function(){
    $popupAdd.style.display = 'block';
  });
  $popupClose.addEventListener('click', function(){
    $popupAdd.style.display = 'none';
  });

}