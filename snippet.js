
//Couldn't get to fully operate correctly 
//tutorial found here: https://www.youtube.com/watch?v=QxMBHi_ZiT8

/*-----------------------------
The JS Search
------------------------------*/
//Create an array of names

const contacts = [
    'Dan Oliver',
    'dan.oliver82@example.com',
    'Daun Wood',
    'daun.wood16@example.com',
    'Dale Byrd',
    'dale.byrd52@example.com',
    'Victoria Chambers',
    'victoria.chambers80@example.com'
]
//Create an input variable
const searchWrapper = document.querySelector('.search-div');
const inputBox = searchWrapper.querySelector('input');
const resultBox= searchWrapper.querySelector('.result-box');

//if a user types in the search box

inputBox.onkeyup = (e)=> {
    let info= e.target.value; //user entered info
    let result= [];
    if(info){
        result = contacts.filter((data)=> {

            //filtering array value and user char to lowercase
            //and returning only words/sentences that start with matching letters

            return data.toLocaleLowerCase().startsWith(info.toLocaleLowerCase());
        });
        result = result.map((data)=>{
            return data = '<li>' + data + '</li>';
        });
        console.log(result);
        searchWrapper.classList.add("active");//show autocomplete box
        showSuggestions(result);
        let allList = resultBox.querySelectorAll('li');
        for (let i=0; i < allList.length; i++){
            //adding onclick attribute for all li tags
            allList[i].setAttribute('onclick', 'select(this)');
        }

    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
   
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list into the search bar
    searchWrapper.classList.remove("active"); //hide autocomplete box
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
       listData= list.join(''); 
    }
    resultBox.innerHTML = listData;
}
