'use strict'

//var
var allImages = [];
// var name = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck','dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-class'];
var imageContainer = document.getElementById('imageContainer');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var leftImg;
var centerImg;
var rightImg;
var counter = 0;

//constructor
function Image(path, name){
  this.path = path;
  this.image = name;
  // this.tally = function(){
  //
  // }
  // this.views = function(){
  //
  // }
  allImages.push(this);
}




//instances
function makeImageObj(){
  new Image ('bag.jpg', 'bag');
  new Image ('banana.jpg', 'banana');
  new Image ('bathroom.jpg', 'bathroom');
  new Image ('boots.jpg', 'boots');
  new Image ('breakfast.jpg', 'breakfast');
  new Image ('bubblegum.jpg', 'bubblegum');
  new Image ('chair.jpg','chair');
  new Image ('cthulhu', 'cthulhu');
  new Image ('dog-duck.jpg', 'dog-duck');
  new Image ('dragon.jpg', 'dragon');
  new Image ('pen.jpg', 'pen');
  new Image ('pet-sweep.jpg', 'pet-sweep');
  new Image ('scissors.jpg', 'scissors');
  new Image ('shark.jpg', 'shark');
  new Image ('sweep.png', 'sweep');
  new Image ('tauntaun.jpg', 'tauntaun');
  new Image ('unicorn.jpg', 'unicorn');
  new Image ('usb.gif', 'usb');
  new Image ('water-can.jpg', 'water-can');
  new Image ('wine-glass', 'wine-glass');
}
makeImageObj();


//set up functions
//eventhandler
//click - prevent-default //tally click // get 3 new imgs// stop duplicates// alert pick click// clear add imgs//total<25
// remove event listener after 25//show button
function selectThree(){
  if (counter >=25){
    imageContainer.removeEventListener('click', handleClick);
  //  return;
  }
  else{
    leftImg = Math.floor(Math.random() * 20);
    centerImg = Math.floor(Math.random() * 20);
    rightImg = Math.floor(Math.random() * 20);
  }
}

selectThree();

//handleClick
function handleClick(event){
  event.preventDefault();
  if (leftImg === centerImg || leftImg ===rightImg || centerImg === leftImg || centerImg === rightImg || rightImg === leftImg || rightImg === centerImg){
    selectThree();
  } else {
    left.src = allImages[leftImg].src;
    center.src = allImages[centerImg].src;
    right.src = allImages[rightImg].src;
  }



}






//function to select 3 images

//tally click

//prevent duplicate in a select

//prevent duplicate between sets

//render list


//execute actions



//eventlistener
//click add
imageContainer.addEventListener('click', handleClick);
