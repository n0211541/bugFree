var testArray = [0,1,1,"1",3,"311"];
for (var arrayPosition=0; arrayPosition<testArray.length-1; arrayPosition++)
{

//store the elements we are comparing in variables
	var currentElement=testArray[arrayPosition];
	var nextElement=testArray[arrayPosition+1];
	
	//is currentElement greater than nextElement?
	console.log("Testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement>nextElement));
	
	//is currentElement less than or equal to nextElement
	console.log("Testing " + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));
	
	//Are they equal to (==) each other?
	if(currentElement == nextElement)
		{
		
		//if they are equal, are they strictly equal?
		console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): "  + (currentElement ===nextElement));
		
		
		//if they are not strictly equal, what are their types?
		if (currentElement !== nextElement)
			{
			
			//use type of java function to identify the type of element
			console.log(currentElement + " is " + typeof(currentElement));
			console.log(nextElement + " is " + typeof(nextElement));
			}
		}
		else
			{
			console.log ("Testing " + currentElement + "and " + nextElement + "(equal to): false");
			}
}