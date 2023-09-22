function calculateMinCost() {
  //your code here
	const arr = document.getElementById("rope-lengths");
	const result = document.getElementById("result");
	
	const ar = arr.value.split(",").map(Number);
    let sum = 0;
	
    while (ar.length > 1) {
        ar.sort((a, b) => a - b);
        let p = ar.shift();
        let q = ar.shift();
        sum += p + q;
        ar.push(p + q);
    }

    // Display the result in the result div
    result.textContent = `${sum}`;
  
}  


// function calculateMinCost(arr) {
//     const ropeLengthsInput = document.getElementById("rope-lengths");
//     const result = document.getElementById("result");

//     // Get the input value and split it into an array of integers
//     const inputValues = ropeLengthsInput.value.split(",").map(Number);

//     // Check if the input is valid
//     if (inputValues.some(isNaN)) {
//         result.textContent = "Invalid input. Please enter comma-separated integers.";
//         return;
//     }

//     // Calculate the minimum cost using your algorithm
//     let sum = 0;
//     while (inputValues.length > 1) {
//         inputValues.sort((a, b) => a - b);
//         let p = inputValues.shift();
//         let q = inputValues.shift();
//         sum += p + q;
//         inputValues.push(p + q);
//     }

//     // Display the result in the result div
//     result.textContent = `Minimum cost of ropes: ${sum}`;
// }
