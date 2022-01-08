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

  var $saveButton = document.querySelector('.save-button');

  var newAgentCreated;
  var arrNewAgents = [];
  var count = 0;

  $saveButton.addEventListener('click', function(){
    var name = 'Eduardo';
    var function0 = document.getElementById('function-field').value;
    var description = document.getElementById('description-field').value;
    var type1 = document.getElementById('skills-field-1').value;
    var type2 = document.getElementById('skills-field-2').value;
    var type3 = document.getElementById('skills-field-3').value;
    var type4 = document.getElementById('skills-field-4').value;
    var damage1 = document.getElementById('damage-field-1').value;
    var damage2 = document.getElementById('damage-field-2').value;
    var damage3 = document.getElementById('damage-field-3').value;
    var damage4 = document.getElementById('damage-field-4').value;
    var image = 'images/KAYO_artwork.png';

    newAgentCreated = addNewAgent(name,function0,description,type1,type2,type3,type4,damage1,damage2,damage3,damage4,image);

    $popupAdd.style.display = 'none';

    console.log(newAgentCreated);

    document.getElementById('function-field').value = 0;
    document.getElementById('description-field').value = '';
    document.getElementById('skills-field-1').value = 0;
    document.getElementById('skills-field-2').value = 0;
    document.getElementById('skills-field-3').value = 0;
    document.getElementById('skills-field-4').value = 0;
    document.getElementById('damage-field-1').value = '';
    document.getElementById('damage-field-2').value = '';
    document.getElementById('damage-field-3').value = '';
    document.getElementById('damage-field-4').value = '';
    
    arrNewAgents.push(newAgentCreated);

    var textToAdd = '<div class="agent-div"><img class="agent-img" src="'+arrNewAgents[count].image+'" alt="agente '+arrNewAgents[count].name+'"><div class="agent"><p>'+arrNewAgents[count].name+'</p></div></div>';
    document.getElementById('agents-flexbox-id').insertAdjacentHTML('beforeend',textToAdd)

    count++;
  });
  

  function addNewAgent(name,function0,description,type1,type2,type3,type4,damage1,damage2,damage3,damage4,image){
    return {
          name,
          function0,
          description,
          skills: [{type1,damage1},{type2,damage2},{type3,damage3},{type4,damage4}],
          image  
          }
  }



}

