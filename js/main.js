window.onload=function(){
  'use strict';

  var $popupClose = document.querySelector('.popup-agent-close');
  var $popupWrapper = document.querySelector('.popup-wrapper');

  $popupClose.addEventListener('click', function(){
    $popupWrapper.style.display = 'none';
    document.getElementById('content-data-id').remove();
    document.getElementById('content-image-id').remove();
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

  var $cancelButton = document.querySelector('.cancel-button');

  $cancelButton.addEventListener('click', function(){
    $popupAdd.style.display = 'none';
    
  });

// --- INÍCIO --- Mostra os agentes que constam no banco de dados.

  const json = `[{
    "data": {
      "agents": [
        {
          "name": "Jett",
          "function0": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 30
            }
          ],
          "image": "./agents/jett.png"
        },
        {
          "name": "Raze",
          "function0": "Sentinela",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 6
            },
            {
              "type": 2,
              "damage": 3
            },
            {
              "type": 3,
              "damage": 13
            },
            {
              "type": 4,
              "damage": 25
            }
          ],
          "image": "./agents/raze.png"
        },
        {
          "name": "Breach",
          "function0": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 15
            },
            {
              "type": 4,
              "damage": 10
            }
          ],
          "image": "./agents/breach.png"
        },
        {
          "name": "Omen",
          "function0": "Controlador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 9
            },
            {
              "type": 2,
              "damage": 5
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "./agents/omen.png"
        },
        {
          "name": "Brimstone",
          "function0": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 5
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "./agents/brimstone.png"
        },
        {
          "name": "Phoenix",
          "function0": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 15
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 30
            }
          ],
          "image": "./agents/phoenix.png"
        },
        {
          "name": "Sage",
          "function0": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 25
            },
            {
              "type": 2,
              "damage": 4
            },
            {
              "type": 3,
              "damage": 15
            },
            {
              "type": 4,
              "damage": 25
            }
          ],
          "image": "./agents/sage.png"
        },
        {
          "name": "Sova",
          "function0": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 10
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 40
            }
          ],
          "image": "./agents/sova.png"
        },
        {
          "name": "Viper",
          "function0": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 12
            },
            {
              "type": 2,
              "damage": 18
            },
            {
              "type": 3,
              "damage": 20
            },
            {
              "type": 4,
              "damage": 15
            }
          ],
          "image": "./agents/viper.png"
        },
        {
          "name": "Cypher",
          "function0": "Controlador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 10
            },
            {
              "type": 2,
              "damage": 15
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "./agents/cypher.png"
        },
        {
          "name": "Reyna",
          "function0": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 14
            },
            {
              "type": 2,
              "damage": 18
            },
            {
              "type": 3,
              "damage": 27
            },
            {
              "type": 4,
              "damage": 45
            }
          ],
          "image": "./agents/reyna.png"
        }
      ],
      "guns": {
        "primaryGun": [
          "./guns/gun6.png",
          "./guns/gun7.png",
          "./guns/gun8.png",
          "./guns/gun11.png",
          "./guns/gun12.png"
        ],
        "secondaryGun": [
          "./guns/gun14.png",
          "./guns/gun15.png",
          "./guns/gun13.png",
          "./guns/gun9.png",
          "./guns/gun10.png"
        ],
        "steel": [
          "./guns/gun1.png",
          "./guns/gun2.png",
          "./guns/gun3.png",
          "./guns/gun4.png",
          "./guns/gun5.png"
        ]
      },
      "maps": [
        "./maps/map1.png",
        "./maps/map2.png",
        "./maps/map3.png",
        "./maps/map4.png",
        "./maps/map5.png"
      ]
    }
  }]`

  let allagents = JSON.parse(json);

  var numberOfAgents = allagents[0].data.agents.length;

  for(var i=0;i<numberOfAgents;i++){
    showAgentOfData(i);
  }
  
  function showAgentOfData(agtX){
    var agt = agtX;
    var $agentId = document.querySelector('.agent'+agtX);
    
    var textToView2 = '<div class="content-data" id="content-data-id"><h3>FUNÇÃO</h3><p class="function">'+allagents[0].data.agents[agt].function0+'</p><p class="description">'+allagents[0].data.agents[agt].description+'</p><h3>HABILIDADES</h3><div class="skills-flexbox"><div class="types-of-weapons"><p>'+'Arma branca'+'</p><p>'+'Arma primária'+'</p><p>'+'Arma secundária'+'</p><p>'+'Especial'+'</p></div><div class="damages"><p>'+allagents[0].data.agents[agt].skills[0].damage+' Dano</p><p>'+allagents[0].data.agents[agt].skills[1].damage+' Dano</p><p>'+allagents[0].data.agents[agt].skills[2].damage+' Dano</p><p>'+allagents[0].data.agents[agt].skills[3].damage+' Dano</p></div></div></div><div class="content-image" id="content-image-id"><img class="agent-img" src="'+allagents[0].data.agents[agt].image+'" alt="imagem do agente"></div>';
    $agentId.addEventListener('click', function(){
      document.getElementById('popup-content-flexbox-id').insertAdjacentHTML('beforeend',textToView2);
      $popupWrapper.style.display = 'block';
    })
  }

// --- FIM --- Mostra os agentes que constam no banco de dados.

// --- INÍCIO --- Cria novos agentes.

  var $saveButton = document.querySelector('.save-button');

  var name = '';
  var function0 = 0;
  var description = '';
  var type1 = 0;
  var type2 = 0;
  var type3 = 0;
  var type4 = 0;
  var damage1 = 0;
  var damage2 = 0;
  var damage3 = 0;
  var damage4 = 0;
  var image = '';

  var arrNewAgents = [];
  var newAgentCreated;
  var textToAdd= '';
  var count = 0;

  $saveButton.addEventListener('click', function(){
    name = document.getElementById('name-field').value;
    function0 = document.getElementById('function-field').value;
    description = document.getElementById('description-field').value;
    type1 = parseInt(document.getElementById('skills-field-1').value);
    type2 = parseInt(document.getElementById('skills-field-2').value);
    type3 = parseInt(document.getElementById('skills-field-3').value);
    type4 = parseInt(document.getElementById('skills-field-4').value);
    damage1 = parseInt(document.getElementById('damage-field-1').value);
    damage2 = parseInt(document.getElementById('damage-field-2').value);
    damage3 = parseInt(document.getElementById('damage-field-3').value);
    damage4 = parseInt(document.getElementById('damage-field-4').value);
    image = 'images/'+document.getElementById('image-field').files[0].name;

    newAgentCreated = addNewAgent(name,function0,description,type1,type2,type3,type4,damage1,damage2,damage3,damage4,image);

    $popupAdd.style.display = 'none';

    cleanAgentsField();
    
    arrNewAgents.push(newAgentCreated);

    allagents[0].data.agents.push(newAgentCreated);
    console.log(allagents[0].data.agents);
    
    textToAdd = '<div class="agent-div" id="agent-div-id"><img class="agent-img" src="'+arrNewAgents[count].image+'" alt="agente '+arrNewAgents[count].name+'"><div class="agent newAgent'+count+'"><p>'+arrNewAgents[count].name+'</p></div></div>';
    document.getElementById('agents-flexbox-id').insertAdjacentHTML('beforeend',textToAdd)

    showNewAgents(count);

    count++;    
  });

  function addNewAgent(name,function0,description,type1,type2,type3,type4,damage1,damage2,damage3,damage4,image){
    return {
          name,
          function0,
          description,
          skills: [{type: type1,damage: damage1},{type: type2,damage: damage2},{type: type3,damage: damage3},{type: type4,damage: damage4}],
          image  
          }
  }
  
  function cleanAgentsField(){
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

  // --- FIM --- Cria novos agentes.
  
  // --- INÍCIO --- Mostra os novos agentes criados.

  function showNewAgents(agtX){
    var agt = agtX;
    var $agentId = document.querySelector('.newAgent'+agtX);
    
    var textToView = '<div class="content-data" id="content-data-id"><h3>FUNÇÃO</h3><p class="function">'+arrNewAgents[agt].function0+'</p><p class="description">'+arrNewAgents[agt].description+'</p><h3>HABILIDADES</h3><div class="skills-flexbox"><div class="types-of-weapons"><p>'+'Arma branca'+'</p><p>'+'Arma primária'+'</p><p>'+'Arma secundária'+'</p><p>'+'Especial'+'</p></div><div class="damages"><p>'+arrNewAgents[agt].skills[0].damage+' Dano</p><p>'+arrNewAgents[agt].skills[1].damage+' Dano</p><p>'+arrNewAgents[agt].skills[2].damage+' Dano</p><p>'+arrNewAgents[agt].skills[3].damage+' Dano</p></div></div></div><div class="content-image" id="content-image-id"><img class="agent-img" src="'+arrNewAgents[agt].image+'" alt="imagem do agente"></div>';
    $agentId.addEventListener('click', function(){
      document.getElementById('popup-content-flexbox-id').insertAdjacentHTML('beforeend',textToView);
    $popupWrapper.style.display = 'block';
    })
  }

  // --- FIM --- Mostra os novos agentes criados.

  // --- INÍCIO --- Mostrar na tela os dados do "formulário Suporte".

  var $sendSupportButton = document.querySelector('.send-support-button');

  var nameSupport = '';
  var lastNameSupport = '';
  var emailSupport = '';
  var nickNameSupport = '';
  var subjectSupport = '';
  var descriptionSupport = '';

  var newSupportMsgCreated;
  var arrNewSupportMsgs = [];
  var count2 = 0;

  $sendSupportButton.addEventListener('click', function(){
    nameSupport = document.getElementById('support-name-id').value;
    lastNameSupport = document.getElementById('support-lastname-id').value;
    emailSupport = document.getElementById('support-e-mail-id').value;
    nickNameSupport = document.getElementById('support-nick-name-id').value;
    subjectSupport = document.getElementById('support-subject-id').value;
    descriptionSupport = document.getElementById('support-description-id').value;

    newSupportMsgCreated=newSupportMsg(nameSupport,lastNameSupport,emailSupport,nickNameSupport,subjectSupport,descriptionSupport);
    
    $popupWrapper.style.display = 'block';

    console.log(newSupportMsgCreated);

    cleanSupportMsg();

    arrNewSupportMsgs.push(newSupportMsgCreated);

    console.log(arrNewSupportMsgs);

    var textToViewSupportMsg = '<div class="content-data" id="content-data-id"><br><br><p>Nome completo: '+arrNewSupportMsgs[count2].name+' '+arrNewSupportMsgs[count2].lastName+'</p><br><p>Apelido: '+arrNewSupportMsgs[count2].nickName+'</p><br><p>E-mail: '+arrNewSupportMsgs[count2].email+'</p><br><p>Assunto: '+arrNewSupportMsgs[count2].subject+'</p><br><p>Mensagem: '+arrNewSupportMsgs[count2].description+'</p></div>'; 
    document.getElementById('popup-content-flexbox-id').insertAdjacentHTML('beforeend',textToViewSupportMsg);

    count2++;
  });

  function newSupportMsg(name,lastName,email,nickName,subject,description){
    return {
          name,
          lastName,
          email,
          nickName,
          subject,
          description
          }
  }

  function cleanSupportMsg(){
    document.getElementById('support-name-id').value = '';
    document.getElementById('support-lastname-id').value = '';
    document.getElementById('support-e-mail-id').value = '';
    document.getElementById('support-nick-name-id').value = '';
    document.getElementById('support-subject-id').value = '';
    document.getElementById('support-description-id').value = '';
  }

// --- FIM --- Mostrar na tela os dados do "formulário Suporte".

}

