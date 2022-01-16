window.onload=function(){
  'use strict';

  // --- INÍCIO --- Mostra os agentes que constam no banco de dados.

    const json = `[{
      "data": {
        "agents": [
          {
            "name": "JETT",
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
            "name": "RAZE",
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
            "name": "BREACH",
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
            "name": "OMEN",
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
            "name": "BRIMSTONE",
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
            "name": "PHOENIX",
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
            "name": "SAGE",
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
            "name": "SOVA",
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
            "name": "VIPER",
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
            "name": "CYPHER",
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
            "name": "REYNA",
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

    var allagents = JSON.parse(json);
    var numberOfAgents = allagents[0].data.agents.length;
    
    for(var i=0;i<numberOfAgents;i++){
      createCardOfAgent(i);
      showAgentOfData(i);
    }
        
    var textToView3 = '<div class="add-div-text"><h2>adicionar</h2></div>';
    document.getElementById('agents-flexbox-id').insertAdjacentHTML('afterbegin',textToView3);

    
  
    function createCardOfAgent(agtX){
      var agt = agtX;      
      var textToView5 = '<li><div class="agent-div" id="agent'+(agtX+1)+'-id"><img class="agent-img" src="'+allagents[0].data.agents[agt].image+'" alt="agente"><div class="agent agent'+agtX+'"><p>'+allagents[0].data.agents[agt].name+'</p></div></div></li>';
      document.getElementById('agents-flexbox-id').insertAdjacentHTML('beforeend',textToView5);
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

    var textToView4 = '<div class="seeall-div-text"><h2>ver todos</h2></div>';
    document.getElementById('agents-flexbox-id').insertAdjacentHTML('beforeend',textToView4);

  // --- FIM --- Mostra os agentes que constam no banco de dados.

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

  // --- INÍCIO --- Carroséis de armas.

  var numberOfGunsCarousel1 = allagents[0].data.guns.primaryGun.length

  for(var i=0;i<numberOfGunsCarousel1;i++){
    addGunsInCarousel1(i);
  }

  function addGunsInCarousel1(aux){
    var textToAddGuns1 = '<figure><img src="'+allagents[0].data.guns.primaryGun[aux]+'" alt="imagem de arma"></figure>';
    document.getElementById('images-slideshow-1').insertAdjacentHTML('beforeend',textToAddGuns1);
  }

  var numberOfGunsCarousel2 = allagents[0].data.guns.secondaryGun.length

  for(var i=0;i<numberOfGunsCarousel2;i++){
    addGunsInCarousel2(i);
  }

  function addGunsInCarousel2(aux){
    var textToAddGuns2 = '<figure><img src="'+allagents[0].data.guns.secondaryGun[aux]+'" alt="imagem de arma"></figure>';
    document.getElementById('images-slideshow-2').insertAdjacentHTML('beforeend',textToAddGuns2);
  }


  var numberOfGunsCarousel3 = allagents[0].data.guns.steel.length

  for(var i=0;i<numberOfGunsCarousel3;i++){
    addGunsInCarousel3(i);
  }

  function addGunsInCarousel3(aux){
    var textToAddGuns3 = '<figure><img src="'+allagents[0].data.guns.steel[aux]+'" alt="imagem de arma"></figure>';
    document.getElementById('images-slideshow-3').insertAdjacentHTML('beforeend',textToAddGuns3);
  }
  
  var carouselImgs = new Carousel({
    container: '.carousel-1 .slideshow-1',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

  var carouselImgs = new Carousel({
    container: '.carousel-2 .slideshow-2',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

  var carouselImgs = new Carousel({
    container: '.carousel-3 .slideshow-3',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

  // --- FIM --- Carroséis de armas.

  // --- INÍCIO --- Scroll de mapas.

  var numberOfMapsCarousel = allagents[0].data.maps.length

  for(var i=0;i<numberOfMapsCarousel;i++){
    addMapsInCarousel(i);
  }

  function addMapsInCarousel(aux){
    var textToAddMaps = '<figure><img class="image-map" src="'+allagents[0].data.maps[aux]+'" alt="imagem de mapa"></figure>';
    document.getElementById('maps-slideshow-id').insertAdjacentHTML('beforeend',textToAddMaps);
  }

  // --- FIM --- Scroll de mapas.

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
      name = document.getElementById('name-field').value.toUpperCase();
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
      // console.log(allagents[0].data.agents);
      
      textToAdd = '<li><div class="agent-div" id="agent'+(allagents[0].data.agents.length+count)+'-id"><img class="agent-img" src="'+arrNewAgents[count].image+'" alt="agente '+arrNewAgents[count].name+'"><div class="agent newAgent'+count+'"><p>'+arrNewAgents[count].name+'</p></div></div></li>';
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
  
  // --- INÍCIO --- Busca de agentes (por nome).

  const $inputSearchField = document.querySelector('#search-field-id');
  $inputSearchField.addEventListener('input', searchByName);
  
  function searchByName(e) {
      
    var divsAgents1 = document.getElementById("agents-flexbox-id");
    var divOfOneAgent1 = divsAgents1.getElementsByTagName('li');
    for(var i=0;i<allagents[0].data.agents.length;i++){
      if(allagents[0].data.agents[i].name.includes(e.target.value.toUpperCase())){
        divOfOneAgent1[i].style.display = "block";
      } else {
        divOfOneAgent1[i].style.display = "none";
      }
    }
  }

  // --- FIM --- Busca de agentes (por nome).

  // --- INÍCIO --- Filtro de agentes (por dano).

  var $filterButton = document.querySelector('.filter-button');

  $filterButton.addEventListener('click', function(){

    var selectSkills = document.getElementById('skills-field-id');
    var selectedValueOfSkills = selectSkills.options[selectSkills.selectedIndex].value;
    console.log(selectedValueOfSkills);

    var selectCondition = document.getElementById('filter-field-id');
    var selectedValueOfCondition = selectCondition.options[selectCondition.selectedIndex].value;
    console.log(selectedValueOfCondition);

    var damageByUser = document.getElementById("damage-field-id").value;
    console.log(damageByUser);
    
    switch (selectedValueOfSkills){
      case '1':
        if(selectedValueOfCondition === 'menor'){
          compareValuesLessThan(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'maior'){
          compareValuesBiggerThen(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'igual'){
          compareValuesEqualsTo(damageByUser,selectedValueOfSkills)}
        break;
      case '2':
        if(selectedValueOfCondition === 'menor'){
          compareValuesLessThan(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'maior'){
          compareValuesBiggerThen(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'igual'){
          compareValuesEqualsTo(damageByUser,selectedValueOfSkills)}
        break;
      case '3':
        if(selectedValueOfCondition === 'menor'){
          compareValuesLessThan(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'maior'){
          compareValuesBiggerThen(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'igual'){
          compareValuesEqualsTo(damageByUser,selectedValueOfSkills)}
        break;
      case '4':
        if(selectedValueOfCondition === 'menor'){
          compareValuesLessThan(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'maior'){
          compareValuesBiggerThen(damageByUser,selectedValueOfSkills)}
        if(selectedValueOfCondition === 'igual'){
          compareValuesEqualsTo(damageByUser,selectedValueOfSkills)}
        break;
    }    
  });

  var divsAgents2 = document.getElementById("agents-flexbox-id");
  var divOfOneAgent2 = divsAgents2.getElementsByTagName('li');

  function compareValuesLessThan(value, skill){
    switch(skill){
      case '1':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[0].damage < value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '2':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[1].damage < value)
            divOfOneAgent2[i].style.display = "block";
          else 
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '3':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[2].damage < value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '4':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[3].damage < value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
    }   
  }
  
  function compareValuesBiggerThen(value, skill){
    switch(skill){
      case '1':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[0].damage > value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '2':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[1].damage > value)
            divOfOneAgent2[i].style.display = "block";
          else 
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '3':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[2].damage > value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '4':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[3].damage > value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
    } 
  }

  function compareValuesEqualsTo(value, skill){
    switch(skill){
      case '1':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[0].damage == value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '2':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[1].damage == value)
            divOfOneAgent2[i].style.display = "block";
          else 
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '3':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[2].damage == value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
      case '4':
        for(var i=0;i<allagents[0].data.agents.length;i++){
          if(allagents[0].data.agents[i].skills[3].damage == value)
            divOfOneAgent2[i].style.display = "block";
          else
            divOfOneAgent2[i].style.display = "none";
        }
        break;
    } 
  }

  // --- FIM --- Filtro de agentes (por dano).

}