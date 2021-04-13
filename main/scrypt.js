let active = document.getElementsByClassName('header-burger');
let nav = document.getElementsByClassName('header-nav');
let body = document.getElementsByTagName('body');
let logo = document.getElementsByClassName('header-logo')

let burger = function() {
  active[0].classList.toggle("active");
  nav[0].classList.toggle("active");
  logo[0].classList.toggle("active");
  body[0].classList.toggle("lock");
}

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
const mediaWidth980 = window.matchMedia('(min-width: 980px)');
const mediaWidth768 = window.matchMedia('(min-width: 768px)');
const mediaWidth320 = window.matchMedia('(min-width: 320px)');

document.addEventListener("DOMContentLoaded",  ()=>{ 
  cardRender();
});

window.addEventListener("resize", displayWindowSize);

function displayWindowSize(){
  cardRender();
}

let arrayIndex = [];
let cardRender = function(){
  let cards = document.getElementsByClassName('slider-cards')[0];
  cards.innerHTML = "";
  pet.map((item, index)=>{
    if(mediaWidth1280.matches){
        if(index <= 2){
        arrayIndex.push(index);
        cards.innerHTML += card(item['name'], item['img'], index);
      } 
    }else if(mediaWidth768.matches){
      if(index <= 1){
        arrayIndex.push(index);
        cards.innerHTML += card(item['name'], item['img'], index);
      } 
    }else if(mediaWidth320.matches){
      if(index == 0){
        arrayIndex.push(index);
        cards.innerHTML += card(item['name'], item['img'], index);
      }
    } 
  })
}

let randomItems = function(){
	let arrayRandomIndex = [];
  if(mediaWidth1280.matches){
    while(arrayRandomIndex.length < 3){
        let indexRandom = Math.floor(Math.random()*8)
        if(!arrayIndex.includes(indexRandom) && !arrayRandomIndex.includes(indexRandom)){
          arrayRandomIndex.push(indexRandom);
        }
      }
  } else if(mediaWidth768.matches){
    while(arrayRandomIndex.length < 2){
      let indexRandom = Math.floor(Math.random()*8)
      if(!arrayIndex.includes(indexRandom) && !arrayRandomIndex.includes(indexRandom)){
        arrayRandomIndex.push(indexRandom);
      }
    }
  }	else if(mediaWidth320.matches){
    while(arrayRandomIndex.length < 1){
      let indexRandom = Math.floor(Math.random()*8)
      if(!arrayIndex.includes(indexRandom) && !arrayRandomIndex.includes(indexRandom)){
        arrayRandomIndex.push(indexRandom);
      }
    }  
  }
	
	arrayIndex = arrayRandomIndex;
};

let directionRandom = function(){
  randomItems();
  document.getElementsByClassName('slider-cards')[0].innerHTML = '';
  let cards = document.getElementsByClassName('slider-cards')[0];
  for(let i = 0; i < arrayIndex.length; i++){
    pet.map((item, index)=>{
      if(arrayIndex[i] == index){
        cards.innerHTML += card(item['name'], item['img'], index);
      }
    })
  }
};

let cardInfoRender = function(itemIndex){
  document.getElementsByClassName('info-pets')[0].classList.add('active');
  document.getElementsByTagName('body')[0].classList.add('lock');
  let infoCard = document.getElementsByClassName('info-content')[0];
  pet.map((item, index)=>{
    if(itemIndex == index){
       infoCard.innerHTML = cardInfo(item['name'], item['img'], item['type'], item['breed'], item['description'], item['age'], item['inoculations'], item['diseases'], item['parasites'], index);
    } 
  })
}

let deleteInfoCard = function(){
  document.getElementsByClassName('info-pets')[0].classList.remove('active');
  document.getElementsByTagName('body')[0].classList.remove('lock');
  document.getElementsByClassName('info-content')[0].innerHTML = '';
}


let card = function(name, img, index){
  return `<div class="card">
              <img src="${img}" alt="">
              <span>${name}</span>
              <div onclick="cardInfoRender(${index})" class="button">
                  <button class="pets-button">Learn more</button>
              </div> 
          </div>`
}

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
}