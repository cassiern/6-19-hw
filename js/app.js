// EASY GOING:
 for (let i = 1; i <= 20; i++){
	console.log(i);
}

//GET EVEN:


for (let i = 0; i < 200; i += 2) {
	console.log(i);
}


//EXCITED KITTEN:
//1.

let i = 1;
while(i <= 20) {
	console.log("Love me, pet me! HSSSS!");
	i++;
}




//2.

const kittenArray = ["Human why you taking pictures of me?", "The catnip made me do it!", "Why does the red dot always get away?!"];


for (let i = 0; i <= 20; i++) {
	if(i % 2 === 0) {
	let sayings = kittenArray[Math.floor(Math.random() * 4)];
	console.log(sayings);
} 	else {
	console.log("Love me, pet me! HSSSS!")
}
}


for (let i = 1; i <= 100; i++) {
	if (i % 3 && i % 5 === 0) {
		console.log("FizzBuzz");
	}
	else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} 	else { 
		console.log(i);
	}
}



//GETTING TO KNOW YOU:
const kenny = ["Kenny", 1000, "Austin"];

const jimHaff = ["Jim H", 16, "All cities"];

const reuben = ["Reuben", 22, "Durham"];

const jimClark = ["Jim C", 186, "LA"];

const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
console.log(kenny);

jimClark[1] = jimClark[1] + 1;
console.log(jimClark);

ryan[2] = "Gotham City";
console.log(ryan);

reuben.pop();
console.log(reuben);
reuben.push("Chicago");
console.log(reuben);

jimHaff.pop();
console.log(jimHaff);
jimHaff.splice(3, 2, "Redding", "Arvada", "Goshen");
console.log(jimHaff);


//YELL AT NINJA TURTLES

const ninja = ["donatello", "leonardo", "raphael", "michaelangelo"]; 
for (let i = 0; i < ninja.length; i++) {
		console.log(ninja[i].toUpperCase());
}

//RETURN OF THE CLOSETS

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

 kristynsCloset.shift();
 console.log(kristynsCloset);

 const kristynsShoe = "left shoe";
 console.log(kristynsShoe);

 console.log(thomsCloset);
 thomsCloset[2].push(kristynsShoe);  
 console.log(thomsCloset[2]);

for (let i = 0; i < 3; i++) {
	
	let outfits = kristynsCloset[Math.floor(Math.random() * 3)];
	console.log(`Today Kristyn pick out these/this ${outfits}`);
}
for ( i = 0; i < 3; i++) {
	let outfits1 = thomsCloset[Math.floor(Math.random() * 2)];
	console.log(`Today Thom picked out these/this ${outfits1[i]}`);
}

for (i = 0; i < kristynsCloset.length; i++) {
 	console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
 }

 for (i = 0; i < 3; i++){
 		console.log(thomsCloset);
 }

//MULTIPLES OF 3 AND 5

 for (let i = 0; i < 1000; i++) {
 	if (i % 3 && i % 5 === 0) {
 		console.log(i);
 	}
 	let sum = i;
 }

// SUM OF 3 AND 5
sum = 0;
for (let i = 0; i <= 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
		}
};

console.log(sum);














