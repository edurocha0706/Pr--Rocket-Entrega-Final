window.onload=function(){
  'use strict';

  var $popupClose = document.querySelector('.popup-agent-close');
  var $popupWrapper = document.querySelector('.popup-wrapper');

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

  var name = '';
  var function0 = 0;
  var description = '';
  var type1 = 0;
  var type2 = 0;
  var type3 = 0;
  var type4 = 0;
  var damage1 = '';
  var damage2 = '';
  var damage3 = '';
  var damage4 = '';
  var image = '';

  var arrNewAgents = [];

  var newAgentCreated;
  var textToAdd= '';
  var agentsTextToView= '';
  
  var count = 0;
  var arrCardText = [];

  $saveButton.addEventListener('click', function(){
    name = document.getElementById('name-field').value;
    function0 = document.getElementById('function-field').value;
    description = document.getElementById('description-field').value;
    type1 = document.getElementById('skills-field-1').value;
    type2 = document.getElementById('skills-field-2').value;
    type3 = document.getElementById('skills-field-3').value;
    type4 = document.getElementById('skills-field-4').value;
    damage1 = document.getElementById('damage-field-1').value;
    damage2 = document.getElementById('damage-field-2').value;
    damage3 = document.getElementById('damage-field-3').value;
    damage4 = document.getElementById('damage-field-4').value;
    image = 'images/'+document.getElementById('image-field').files[0].name;

    newAgentCreated = addNewAgent(name,function0,description,type1,type2,type3,type4,damage1,damage2,damage3,damage4,image);

    $popupAdd.style.display = 'none';

    console.log(newAgentCreated);

    clean();
    
    arrNewAgents.push(newAgentCreated);

    textToAdd = '<div class="agent-div" id="agent-div-id"><img class="agent-img" src="'+arrNewAgents[count].image+'" alt="agente '+arrNewAgents[count].name+'"><div class="agent agent'+count+'"><p>'+arrNewAgents[count].name+'</p></div></div>';
    document.getElementById('agents-flexbox-id').insertAdjacentHTML('beforeend',textToAdd)

    var agentsTextToView = '<div class="content-data" id="content-data-id"><h3>FUNÇÃO</h3><p class="function">'+arrNewAgents[count].function0+'</p><p class="description">'+arrNewAgents[count].description+'</p><h3>HABILIDADES</h3><div class="skills-flexbox"><div class="types-of-weapons"><p>'+arrNewAgents[count].skills[0].type1+'</p><p>'+arrNewAgents[count].skills[1].type2+'</p><p>'+arrNewAgents[count].skills[2].type3+'</p><p>'+arrNewAgents[count].skills[3].type4+'</p></div><div class="damages"><p>'+arrNewAgents[count].skills[0].damage1+' Dano</p><p>'+arrNewAgents[count].skills[1].damage2+' Dano</p><p>'+arrNewAgents[count].skills[2].damage3+' Dano</p><p>'+arrNewAgents[count].skills[3].damage4+' Dano</p></div></div></div><div class="content-image" id="content-image-id"><img class="agent-img" src="'+arrNewAgents[count].image+'" alt="imagem do agente"></div>';

    arrCardText.push(agentsTextToView);
    
    if(count !== 0){
      document.getElementById('content-data-id').remove();
      document.getElementById('content-image-id').remove();
    }

    document.getElementById('popup-content-flexbox-id').insertAdjacentHTML('beforeend',arrCardText[count]);

    for(var i=0; i<arrCardText.length; i++){
      var $agentClassName = document.querySelector('.agent'+count);
      
      if('.agent'+count === '.agent'+i){
        
        $agentClassName.addEventListener('click', function(){
        $popupWrapper.style.display = 'block';
        });
      } else {
        
        $agentClassName.addEventListener('click', function(){
        $popupWrapper.style.display = 'block';
        });
      }
    }
    count++;
  });

  var $cancelButton = document.querySelector('.cancel-button');

  $cancelButton.addEventListener('click', function(){
    $popupAdd.style.display = 'none';
    
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
  
  function clean(){
    document.getElementById('name-field').value = '';
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
    document.getElementById('image-field').value = '';
  }

}

