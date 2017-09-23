
//1
const func = function(x, y, z){
	return x + y + z;
};
 
 const func1 = func(5, 10, 15);

	console.log (func1);

//2
const func2 = function () {
	return (1) 
};

//3
const func3 = function (num1, num2) {
	return num1 * num2;
};

//4
const a = function () {
	return  'Amalya' ;
};

const b = function () {
	return 'Yeghiazarian'
};

const fullName = function (fName, lName) {
	return fName + ' ' + lName;
};

console.log (fullName(a(), b()));

//5
  const str = function (x1, y1, z1) { 
  if (x1.length > y1.length) {
  	return x1 };
  	if (y1.length > z1.legth) {
  		return y1 };
  		if (z1.length > y1.length && z1.length > x1.length) {
  			return z1 };
  			const f = str ('hello', 'world', 'yay');
  			console.log (str.length)};


//6
    const func4 = function (num1, num2) {
    	if (num1 === num2) { 
    	console.log (0); 
    } 
    		else if (num1 > num2) {
    	console.log (1); 
    }
    	else {
    		console.log ('-1');    
    	}
   
    };
    
//7
const isTruthy = function (a, b, c) {
	if (a)
		return a;
	else if (b)
		return b;
else (c)
	return c; 
};
const isTruthy1 = (1, 0,2);
console.log (isTruthy1); 
