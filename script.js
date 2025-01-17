const button = document.querySelector("button");
const main=document.querySelector("main");
const submit=document.querySelector("#submitMessage");
const selectedStars = document.querySelector("#SelectedStars");

const form = document.getElementById("form")

button.addEventListener("click", update);

function update(event){
    event.preventDefault();
    main.style.display="none";
    const selectedRating = form.querySelector('input[name="star"]:checked');
    submit.style.display="flex";
    selectedStars.innerHTML="You selected " + selectedRating.id + " out of 5";
}

