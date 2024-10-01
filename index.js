$(document).ready(() => {
  $("#menubar").click(() => {
    $("#menubar").toggleClass("fa-bars fa-xmark");
    $("#rowmenu").slideToggle();
  });
  $("#threeDot").click(() => {
    $("#more").show();
    $("#threeDot").hide();
    $("#showLess").show();
  });
  $("#showLess").click(() => {
    $("#more").hide();
    $("#threeDot").show();
    $("#showLess").hide();
  });
});
let dynamicText = document.getElementById('dynamicText')
let words = ["Frontend Developer", "Backend developer", "Fullstack Developer"];
let wordIndex = 0;
let charIndex = 0;
let blink = document.getElementById('cursor')
isDeleting = false;
let typer = () => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0,charIndex)
    dynamicText.textContent = currentChar;
    
    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        blink.classList.remove("blinking")
        setTimeout(typer,100)
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        blink.classList.remove("blinking")
        setTimeout(typer,100)
    }else{
        isDeleting = !isDeleting;
        
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        blink.classList.add("blinking")
        setTimeout(typer,1200)
    }

};
typer()

let Images = [
  '/assets'
]
