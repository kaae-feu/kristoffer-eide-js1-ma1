const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];

// question 1

const cat = {
	complain: function() {
		console.log("Meow!");
	}
};

// question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3

const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";

// question 5

const paragraphs = document.querySelector("p");

for (let i = 0; i < paragraphs.length; i++) {
	paragraphs.style.color = "red";
}

// question 6

const resultsContainer = document.querySelector("results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];

function createList(list) {
	for (let i = 0; i < cats.name.length; i++) {
		console.log(cats.name(i));
	}
}

createList(cats.name);

// question 8
