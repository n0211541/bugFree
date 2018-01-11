var testArray=[17,42,311,5,9,10,28,7,6];
var sum=0;
for (var arrayPosition=0; arrayPosition<testArray.length; arrayPosition++)
{
	sum = sum + testArray[arrayPosition];
}

console.log ("the sum of " + testArray + " is " + sum);

