const selectedBtn = document.querySelectorAll(".btn");
const ratingState = document.querySelector(".rating_state");
const appreciationState = document.querySelector(".appreciation");
const chosenRate = document.querySelector("span");
const submit = document.querySelector(".submit");
let rate = " ";


// pick up rate phase

selectedBtn.forEach((btn) => {
    
    btn.addEventListener('click', (e) => {
        chosenRate.textContent = e.target.textContent;
        chosenRate.innerText = chosenRate.textContent
        console.log(chosenRate.textContent)
    })
})


submit.addEventListener('click', () =>{
    if ( chosenRate.innerText ==! "null"){
        return alert ("Pease ... Rate")
        console.log(chosenRate.innerText)}
    else{
    ratingState.style.display = "none"
    appreciationState.style.display = "flex"
    }
})

