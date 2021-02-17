const disemvowel = () => {
  const el = document.querySelector("#name-to-disemvowel");
  const p = document.querySelector(".disemvowel-string");
  const str = el.value;
  let output = "";
  const vowels = "aeiouAEIOU";
  for (const char of str) {
    if (!vowels.includes(char)) {
      output += char;
    }
  }
  p.textContent = output;
};

const isPalindrome = () => {
  const str = document.querySelector("#is-palindrome-input").value;
  const p = document.querySelector("#is-palindrome-p");
  let palindrome = "";
  for (let i = str.length - 1; i >= 0; i--) {
    palindrome += str[i];
  }
  if (str === palindrome) {
    p.innerText = true;
  } else {
    p.innerText = false;
  }
};

let list = document.querySelectorAll("#favorite-numbers li");
let arr = [];
list.forEach((listItem) => {
  arr.push(Number(listItem.innerText));
  return arr;
});

const sumOfNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    sum += num;
  }
  return sum;
};

const average = (arr) => {
  let sumOfNums = sumOfNumbers(arr);
  return sumOfNums / arr.length;
};

let onlyOdds = (arr) => {
  return arr.filter((num) => num % 2 === 1);
};

const favoriteNumbers = () => {
  let sumOfNums = sumOfNumbers(arr);
  const averageOfNums = average(arr);
  let onlyOddsOfNums = onlyOdds(arr);

  const sumOfFav = document.querySelector("#sum-of-favorite-nums");
  sumOfFav.textContent += sumOfNums;

  const aveOfFav = document.querySelector("#average-of-favorite-nums");
  aveOfFav.textContent += averageOfNums;

  let oddList = document.querySelector("#list-of-odd-favorite-nums");

  onlyOddsOfNums.forEach((odd) => {
    let li = document.createElement("li");
    li.innerText = odd;
    oddList.appendChild(li);
  });
};
favoriteNumbers();

const incrementCount = () => {
  const p = document.querySelector("#click-count"); // counter = 0
  p.innerText  = Number(p.innerText) + 1;
  debugger;
};

const reset = () => {
  const counter = document.querySelector("#click-count");
  counter.innerText = 0;
};

const addItem = () => {
  const shoppingList = document.querySelector(".shopping-list");
  const input = document.querySelector("#add-item");
  const item = input.value;
  const listItem = document.createElement("li");
  listItem.textContent = item;
  shoppingList.appendChild(listItem);
};

const killButton = () => {
  const button = document.querySelector("#kill-button");
  button.removeChild(button);

  const header = document.querySelector("#kill-button-header");
  header.innerText = "Yay you were victorious!";
  header.style.color = "green";
};
