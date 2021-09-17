let userInput = document.querySelector("#user-text");
let btnReverse = document.querySelector("#btn-submit");
let outputPara = document.querySelector(".output-para");


btnReverse.addEventListener('click', () => {
    let userText = userInput.value;
    let reverseText = userText.split(' ').reverse().join(" ");
    console.log(reverseText);
    outputPara.textContent = reverseText;

})

// Total time : 6 minutes