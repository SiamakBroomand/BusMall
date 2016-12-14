'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var result = document.createElement('button');
var resultContainer = document.getElementById('result');
var list = document.getElementById ('imageList');
// var ctx = document.getElementById('surveychart');
// var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck','dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-class'];


// Global variables
// -----------------
var allProducts = [];
var newArray =[];
var oldArray =[];
var clickCounter = 0;

// Constructor
// -----------------
function Product(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.clicks = 0;
  this.views =0;
  allProducts.push(this);
}

// Instances
// -----------------
new Product ('BusMallphotos/bag.jpg', 'bag');
new Product ('BusMallphotos/banana.jpg', 'banana');
new Product ('BusMallphotos/bathroom.jpg', 'bathroom');
new Product ('BusMallphotos/boots.jpg', 'boots');
new Product ('BusMallphotos/breakfast.jpg', 'breakfast');
new Product ('BusMallphotos/bubblegum.jpg', 'bubblegum');
new Product ('BusMallphotos/chair.jpg','chair');
new Product ('BusMallphotos/cthulhu.jpg', 'cthulhu');
new Product ('BusMallphotos/dog-duck.jpg', 'dog-duck');
new Product ('BusMallphotos/dragon.jpg', 'dragon');
new Product ('BusMallphotos/pen.jpg', 'pen');
new Product ('BusMallphotos/pet-sweep.jpg', 'pet-sweep');
new Product ('BusMallphotos/scissors.jpg', 'scissors');
new Product ('BusMallphotos/shark.jpg', 'shark');
new Product ('BusMallphotos/sweep.png', 'sweep');
new Product ('BusMallphotos/tauntaun.jpg', 'tauntaun');
new Product ('BusMallphotos/unicorn.jpg', 'unicorn');
new Product ('BusMallphotos/usb.gif', 'usb');
new Product ('BusMallphotos/water-can.jpg', 'water-can');
new Product ('BusMallphotos/wine-glass.jpg', 'wine-glass');
//// new Product('bag', 'BussMallphotos/bag.jpg');
//// new Product('banana');
// for (var i = 0; i< names.length; i++){
//   new Product(names[i]);
// }
// console.table(allProducts);


//chart
var myDoughtnutChart = new Chart(ctx,{
  type: 'doughnut',
  data: data,
  // options: options
});
var data = {
  labels:[
    'Name',
    'Views',
    'Clicks'
  ],
  datasets: [
    data: [name, views, clickCounter],
  ],
}
myDoughtnutChart();

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  return Math.floor(Math.random() * allProducts.length);
  // generate a random number between 0 and allProducts.length
}

function makeArrayOfThreeNumbers(){
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[0] = rand();
    // console.log('fixed');
  }

  newArray[1] = rand();
  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
    newArray[1] = rand();
  // console.log('old broken array');
    newArray[1] = rand();
  // console.log('caught duptes between first and second');
  }
  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    newArray[2] = rand();
  // console.log('caught dupe with the third');
  }
}

function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views +=1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views +=1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views +=1;
  // this will place three new images on the page
}

// function renderList() {
  // display a list of items and total clicks/views
// }

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  // console.log(event.target.src , 'was clicked');
  // alert for clicks not on images
  if (event.target.id === 'pic-container'){
    return alert('Click on picture not background');
  }


  // tally the click
  if (event.target.id === 'left'){
    allProducts[newArray[0]].clicks += 1;
    console.log(allProducts[newArray[0]]);
  }
  if (event.target.id === 'center'){
    allProducts[newArray[1]].clicks += 1;
    console.log(allProducts[newArray[1]]);
  }
  if (event.target.id === 'right'){
    allProducts[newArray[2]].clicks += 1;
    // console.log(allProducts[newArray[2]]);
  }
  clickCounter += 1;
  // console.log(clickCounter, 'total clicks so far');

  // check whether total clicks <25
  if (clickCounter > 25 ){
    result.textContent = 'Click Resluts';
    resultContainer.appendChild(result);
    return alert('No more clicks!');
    // picContainer.removeEventListener('click', handleClick);
  // after 25, remove event listeners on picNames
     // after 25, show "Results" button
     // clear old images
  // display 3 new images
  }
  showThreePics();
}
function resultButtonHandler(event){
  for (var i = 0; i < allProducts.length; i++){
    var liEl = document.createElement ('li');
    liEl.textContent = ' Name: ' + allProducts[i].name + ' ,Number of views ' + allProducts[i].views + ' ,Number of clicks ' + allProducts[i].clicks + ' times.';
    list.appendChild(liEl)
  }
}




// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
//
showThreePics();
picContainer.addEventListener('click', handleClick);
result.addEventListener('click', resultButtonHandler);
