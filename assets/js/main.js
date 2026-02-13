// main.js

console.log("Hello, World!");

let targetElement = document.querySelector("h1");

console.log(targetElement.outerHTML);

targetElement.addEventListener("mouseover", function () {
	console.log(this.innerText);
	this.innerText = "Pay Now!";
	this.style = "cursor: wait";

	targetElement.addEventListener("mouseout", function () {
	this.innerText = "Play Now!";
	this.style = "cursor: pointer";
	});
});