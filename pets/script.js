const pet = [
  {
    "name": "Jennifer",
    "img": "../Assets/Img/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../Assets/Img/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../Assets/Img/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../Assets/Img/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../Assets/Img/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../Assets/Img/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../Assets/Img/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../Assets/Img/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

const mediaWidth1280 = window.matchMedia('(min-width: 1280px)');
const mediaWidth768 = window.matchMedia('(min-width: 768px)');
const mediaWidth200 = window.matchMedia('(min-width: 200px)');

document.addEventListener("DOMContentLoaded",  ()=>{ 
  cardRender();
});

window.addEventListener("resize", displayWindowSize);

function displayWindowSize(){
  cardRender();
}

let burger = function() {
  document.querySelector('.header-burger').classList.toggle("active");
  document.querySelector('.header-nav').classList.toggle("active");
  document.querySelector('.header-logo').classList.toggle("active");
  document.querySelector('body').classList.toggle("lock");
};

let arrayIndex =[];
let cardRender = function(){
  let cards = document.querySelector('.content__cards');
  arrayIndex =[];
  cards.innerHTML = "";
  pet.map((item, index)=>{
    if(mediaWidth1280.matches){
        arrayIndex.push(index);
        cards.innerHTML += card(item['name'], item['img'], index);
    }else if(mediaWidth768.matches){
      if(index <= 5){
        arrayIndex.push(index);
        cards.innerHTML += card(item['name'], item['img'], index);
      }
    } else if(mediaWidth200.matches){
      if(index <= 2){
        arrayIndex.push(index);
        cards.innerHTML += card(item['name'], item['img'], index);
      }
    }   
  })
};

let cardInfoRender = function(itemIndex){
  document.querySelector('.info-pets').classList.add('active');
  document.querySelector('body').classList.add('lock');
  let infoCard = document.querySelector('.info-content');
  pet.map((item, index)=>{
    if(itemIndex == index){
       infoCard.innerHTML = cardInfo(item['name'], item['img'], item['type'], item['breed'], item['description'], item['age'], item['inoculations'], item['diseases'], item['parasites'], index);
    } 
  })
};

let deleteInfoCard = function(){
  document.querySelector('.info-pets').classList.remove('active');
  document.querySelector('body').classList.remove('lock');
  document.querySelector('.info-content').innerHTML = '';
};

let randomItems = function(){
	let arrayRandomIndex = [];
  if(mediaWidth1280.matches){
    while(arrayRandomIndex.length < 8){
        let indexRandom = Math.floor(Math.random()*8)
        if(!arrayRandomIndex.includes(indexRandom)){
          arrayRandomIndex.push(indexRandom);
        }
      }
  } else if(mediaWidth768.matches){
    while(arrayRandomIndex.length < 6){
      let indexRandom = Math.floor(Math.random()*8)
      if(!arrayRandomIndex.includes(indexRandom)){
        arrayRandomIndex.push(indexRandom);
      }
    }
  }	else if(mediaWidth200.matches){
    while(arrayRandomIndex.length < 3){
      let indexRandom = Math.floor(Math.random()*8)
      if(!arrayIndex.includes(indexRandom) && !arrayRandomIndex.includes(indexRandom)){
        arrayRandomIndex.push(indexRandom);
      }
    }  
  }
	arrayIndex = arrayRandomIndex;
};

let renderCardRight = function(){
  page ++; 
  document.querySelector('.slider.number').innerHTML = `<span>${page}</span>`;
  document.getElementsByClassName('left')[0].classList.add('active');
  document.getElementsByClassName('left')[1].classList.add('active');
  randomItems();
  document.querySelector('.content__cards').innerHTML = '';
  let cards = document.querySelector('.content__cards');
  for(let i = 0; i < arrayIndex.length; i++){
    pet.map((item, index)=>{
      if(arrayIndex[i] == index){
        cards.innerHTML += card(item['name'], item['img'], index);
      }
    })
  }
};

let page = 1;
let directionRight = function(){
  if(mediaWidth1280.matches){
    if(page >= 6){
      return 0;
    }else{
      renderCardRight();
      if(page == 6){
        document.getElementsByClassName('right')[0].classList.remove('active');
        document.getElementsByClassName('right')[1].classList.remove('active');
      }
    }
  }else if(mediaWidth768.matches){
    if(page >=8){
      return 0;
    } else{
      renderCardRight();
    if(page == 8){
        document.getElementsByClassName('right')[0].classList.remove('active');
        document.getElementsByClassName('right')[1].classList.remove('active');
      }
    } 
  }else if(mediaWidth200.matches){
    if(page >=16){
      return 0;
    } else{
      renderCardRight();
    if(page == 16){
        document.getElementsByClassName('right')[0].classList.remove('active');
        document.getElementsByClassName('right')[1].classList.remove('active');
      }
    } 
  }
};

let activeClass = function () {
  document.querySelector('.slider.number').innerHTML = `<span>${page}</span>`;
  document.getElementsByClassName('left')[0].classList.add('active');
  document.getElementsByClassName('left')[1].classList.add('active');
  document.getElementsByClassName('right')[0].classList.remove('active');
  document.getElementsByClassName('right')[1].classList.remove('active');
}

let directionRightMax = function(){
  if(mediaWidth1280.matches){
    if(page != 6){
      page = 6;
      activeClass();
      randomItems();
      document.querySelector('.content__cards').innerHTML = '';
      let cards = document.querySelector('.content__cards');
      for(let i = 0; i < arrayIndex.length; i++){
        pet.map((item, index)=>{
          if(arrayIndex[i] == index){
            cards.innerHTML += card(item['name'], item['img'], index);
          }
        })
      }
    }
  }else if(mediaWidth768.matches){
    if(page != 8){
      page = 8;
      activeClass();
      randomItems();
      document.querySelector('.content__cards').innerHTML = '';
      let cards = document.querySelector('.content__cards');
      for(let i = 0; i < arrayIndex.length; i++){
        pet.map((item, index)=>{
          if(arrayIndex[i] == index){
            cards.innerHTML += card(item['name'], item['img'], index);
          }
        })
      }
    }
  }else if(mediaWidth200.matches){
    if(page != 16){
      page = 16;
      activeClass();
      randomItems();
      document.querySelector('.content__cards').innerHTML = '';
      let cards = document.querySelector('.content__cards');
      for(let i = 0; i < arrayIndex.length; i++){
        pet.map((item, index)=>{
          if(arrayIndex[i] == index){
            cards.innerHTML += card(item['name'], item['img'], index);
          }
        })
      }
    } 
  } 
};

let directionLeft = function(){  
  if(page <= 1){
    return 0;
  } else{
    page --;
    document.querySelector('.slider.number').innerHTML = `<span>${page}</span>`;
    document.getElementsByClassName('right')[0].classList.add('active');
    document.getElementsByClassName('right')[1].classList.add('active');
    randomItems();
    document.querySelector('.content__cards').innerHTML = '';
    let cards = document.querySelector('.content__cards');
    for(let i = 0; i < arrayIndex.length; i++){
      pet.map((item, index)=>{
        if(arrayIndex[i] == index){
          cards.innerHTML += card(item['name'], item['img'], index);
        }
      })
    }
    if(page == 1){
      document.getElementsByClassName('left')[0].classList.remove('active');
      document.getElementsByClassName('left')[1].classList.remove('active');
    }
  }
};

let directionLeftMax = function(){
  if(page != 1){
    page = 1;
    document.querySelector('.slider.number').innerHTML = `<span>${page}</span>`;
    document.getElementsByClassName('right')[0].classList.add('active');
    document.getElementsByClassName('right')[1].classList.add('active');
    document.getElementsByClassName('left')[0].classList.remove('active');
    document.getElementsByClassName('left')[1].classList.remove('active');
    randomItems();
    document.querySelector('.content__cards').innerHTML = '';
    let cards = document.querySelector('.content__cards');
    for(let i = 0; i < arrayIndex.length; i++){
      pet.map((item, index)=>{
        if(arrayIndex[i] == index){
          cards.innerHTML += card(item['name'], item['img'], index);
        }
      })
    }
  }  
};

let card = function(name, img, index){
  return `<div class="card">
              <img src="${img}" alt="">
              <span>${name}</span>
              <div class="button">
                  <button onclick="cardInfoRender(${index})" class="pets-button">Learn more</button>
              </div> 
          </div>`;
}; 

let cardInfo = function(name, img, type, breed, description, age, inoculations, diseases, parasites){
  return `<img src="${img}" alt="${name}">
          <div class="content-text">
              <h3 class="text__title">${name}</h3>
              <h4 class="text__subtitle">${type} - ${breed}</h4>
              <h5 class="text__about">${description}</h5>
              <ul class="text__collumn">
                  <li><span class="weight">Age: </span><span class="color">${age}</span></li>
                  <li><span class="weight">Inoculations: </span><span class="color">${inoculations}</span></li>
                  <li><span class="weight">Diseases: </span><span class="color">${diseases}</span></li>
                  <li><span class="weight">Parasites: </span><span class="color">${parasites}</span></li>
              </ul> 
          </div>`
};