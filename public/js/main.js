//icons
const sunIcon = document.querySelector('.bx-sun');
const moonIcon = document.querySelector('.bx-moon');

//themes

const userTheme = localStorage.getItem("Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;



// Year footer
let fecha = new Date();
let year = fecha.getFullYear();
let span = document.getElementById('year');
span.innerHTML= year;
