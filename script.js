const button = document.querySelector("button");
const main=document.querySelector("main");
const submit=document.querySelector("#submitMessage");
const selectedStars = document.querySelector("#SelectedStars");


button.onclick = update;

function update(event){
    event.preventDefault();
    main.style.display="none";
    submit.style.display="flex";
}

