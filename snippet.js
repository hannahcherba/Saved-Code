/*-----------------------------
JS Slider
------------------------------*/
// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const itemWidth = 110;
// let currentPosition = 0;

// nextButton.addEventListener('click', () => {
//   currentPosition -= itemWidth;
//   if (currentPosition < -itemWidth * (slider.children.length - 3)) {
//     currentPosition = 0;
//   }
//   slider.style.transform = `translateX(${currentPosition}px)`;
// });

// prevButton.addEventListener('click', () => {
//   currentPosition += itemWidth;
//   if (currentPosition > 0) {
//     currentPosition = -itemWidth * (slider.children.length - 3);
//   }
//   slider.style.transform = `translateX(${currentPosition}px)`;
// });




const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let translateX = 0;

leftArrow.addEventListener('click', () => {
  if (translateX < 0) {
    translateX += carousel.offsetWidth / Math.floor(carousel.offsetWidth / carousel.firstElementChild.offsetWidth);
    carousel.style.transform = `translateX(${translateX}px)`;
  }
});

rightArrow.addEventListener('click', () => {
  if (translateX > -(carousel.scrollWidth - carousel.offsetWidth)) {
    translateX -= carousel.offsetWidth / Math.floor(carousel.offsetWidth / carousel.firstElementChild.offsetWidth);
    carousel.style.transform = `translateX(${translateX}px)`;
  }
});

/*-----------------------------
The JS Search
------------------------------*/
//Couldn't get to fully operate correctly 
//tutorial found here: https://www.youtube.com/watch?v=QxMBHi_ZiT8

//Create an array of names

// const contacts = [
//     'Dan Oliver',
//     'dan.oliver82@example.com',
//     'Daun Wood',
//     'daun.wood16@example.com',
//     'Dale Byrd',
//     'dale.byrd52@example.com',
//     'Victoria Chambers',
//     'victoria.chambers80@example.com'
// ]
// //Create an input variable
// const searchWrapper = document.querySelector('.search-div');
// const inputBox = searchWrapper.querySelector('input');
// const resultBox= searchWrapper.querySelector('.result-box');

// //if a user types in the search box

// inputBox.onkeyup = (e)=> {
//     let info= e.target.value; //user entered info
//     let result= [];
//     if(info){
//         result = contacts.filter((data)=> {

//             //filtering array value and user char to lowercase
//             //and returning only words/sentences that start with matching letters

//             return data.toLocaleLowerCase().startsWith(info.toLocaleLowerCase());
//         });
//         result = result.map((data)=>{
//             return data = '<li>' + data + '</li>';
//         });
//         console.log(result);
//         searchWrapper.classList.add("active");//show autocomplete box
//         showSuggestions(result);
//         let allList = resultBox.querySelectorAll('li');
//         for (let i=0; i < allList.length; i++){
//             //adding onclick attribute for all li tags
//             allList[i].setAttribute('onclick', 'select(this)');
//         }

//     } else {
//         searchWrapper.classList.remove("active"); //hide autocomplete box
//     }
   
// }

// function select(element) {
//     let selectUserData = element.textContent;
//     inputBox.value = selectUserData; //passing the user selected list into the search bar
//     searchWrapper.classList.remove("active"); //hide autocomplete box
// }

// function showSuggestions(list){
//     let listData;
//     if(!list.length){
//         userValue = inputBox.value;
//         listData = '<li>' + userValue + '</li>';
//     } else {
//        listData= list.join(''); 
//     }
//     resultBox.innerHTML = listData;
// }
