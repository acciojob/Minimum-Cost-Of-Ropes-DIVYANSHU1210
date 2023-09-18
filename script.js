function calculateMinCost(arr) {
  //your code here
	let sum = 0;
  while(arr.length > 1){
	  arr.sort((a,b) => a-b);
	  let p = arr.shift();
	  let q = arr.shift();
	  sum += p+q;
	  arr.push(p+q);
  }
	return sum;
  
  
}  
