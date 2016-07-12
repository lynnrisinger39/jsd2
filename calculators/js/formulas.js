
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

// pythagoreon theroem 

function calcLongestSide(pyA,pyB) {

	var pyC = Math.sqrt((pyA*pyA) + (pyB*pyB));
	return pyC;

}


// circumference

function calcCircumference(radius) {

	var circumference = 2 * (Math.PI) * radius;
	return circumference;
}

// farenheit (fTemp) to celcius (cTemp)

function calcFahrenheitToCelcius(cTemp) {

	var fTemp = cTemp * (9/5) + 32;
	return fTemp;


}

// celcius (cTemp) to farenheit (fTemp)

function calcFahrenheitToCelcius(fTemp){
		
		var cTemp = (fTemp - 32) * (5/9);
		return cTemp; 

}

