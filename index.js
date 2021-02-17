
const disemvowel = () => {
    const el = document.querySelector("#name-to-disemvowel");
    const p = document.querySelector(".disemvowel-string");
    const str = el.value;
    let output = "";
    const vowels = "aeiouAEIOU"; 
    for(const char of str) {
        if(!vowels.includes(char)) {
            output += char;
        }
    }
    p.textContent = output;
}

const isPalindrome = () => {
    const str = document.querySelector("#is-palindrome-input").value;
    const p = document.querySelector("#is-palindrome-p");
    let palindrome = ""
    for(let i = str.length - 1; i >= 0 ; i--) {
        palindrome += str[i]
    }
    if(str === palindrome){
        p.innerText = true
    } else {
        p.innerText = false
    }
    
}

let list = document.querySelectorAll("#favorite-numbers li");
    let arr = []; 

    list.forEach(listItem => {
         arr.push(Number(listItem.innerText))
    })

const sumOfNumbers = (arr) => {
    let sum = 0; 
    for(let i = 0; i <= arr.length; i++) {
        const num = arr[i];
        sum += num
    }
    return sum; 
}


const average = (arr) => {
    let sumOfNums = sumOfNumbers(arr) 
    return sumOfNums / arr.length; 
}

let onlyOdds = arr => {
    arr.filter(num => num % 2 === 1)
}



const favoriteNumbers = () => {
    // let list = document.querySelectorAll("#favorite-numbers li");
    // let arr = []; 

    // list.forEach(listItem => {
    //      arr.push(Number(listItem.innerText))
    // })
    

    const sum = sumOfNumbers(arr);
    const averageOfNums = average(arr);
    let onlyOddsOfNums = onlyOdds(arr);

    const sumOfFav = Number(document.querySelector("#sum-of-favorite-nums"));
    sumOfFav.textContent += sum; 

    const aveOfFav = document.querySelector("#average-of-favorite-nums");
    aveOfFav.textContent += averageOfNums; 

    let oddList = document.querySelector("#is-palindrome-p");
    
    const li = document.createElement("h1");
    onlyOddsOfNums.forEach((odd) => {
        debugger
      li.innerText = odd;
      oddList.removeChild(li);
    });
}
    favoriteNumbers();



const incrementCount = () => {
    const counter = Number(document.querySelector("#click-count"));
    counter.textContent = counter.textContent + 1;
}

const reset = () => {
    const counter = document.querySelector("#click-count");
    counter.displayContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector("ul");
    const input = document.querySelector(".add-item")
    const item = input;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem)
    input.value = "Empty";
}

const killButton = () => {
    const button = document.querySelector("#kill-button");
    button.removeChild(button)

    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}