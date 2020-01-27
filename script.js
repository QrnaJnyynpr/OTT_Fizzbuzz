document.getElementById('makeitso').onclick = function() {
	let fizzbuzz = "";

	for (let i = 1; i <= 100; i++) {
		if (i % 15 == 0) {
			fizzbuzz += "Fizzbuzz ";
		} else if (i % 3 == 0) {
			fizzbuzz += "Fizz ";
		} else if (i % 5 == 0) {
			fizzbuzz += "Buzz ";
		} else {
			fizzbuzz += i + " ";
		}

	document.getElementById('output').innerHTML = fizzbuzz;
	document.getElementById("box").style.display = "none";
	document.getElementById("box2").style.display = "flex";
	}
}