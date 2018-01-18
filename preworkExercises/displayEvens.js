
/*maybe place verify function here and if it's true/false, have it call the evenNumbers function or display warning and reset fields*/
function verify()
{
	var y=document.getElementById("evens");
	var startNum=parseInt(y.elements["startingNumber"].value);
	var endNum=parseInt(y.elements["endingNumber"].value);
	var stepNum= parseInt(y.elements["step"].value);
	var msg = "";
	
	if (stepNum <0)
	{
		msg+="Please enter a positive number value! \n";
		stepNum.className = "inpBoxError";
	}
	
	if (endNum <= startNum)
	{
		msg+="Please enter a number greater than the starting Number! \n"
		endNum.className = "inpBoxError";
	}
	
	if (msg=="")
	{
	return true;
	} else {
	alert(msg);
	return false;
	}
	
}




function evenNumbers (start, end, step)
{
var beginArray=new Array();
var evenArray= new Array();
var x=document.getElementById("evens");
var starting=parseInt(x.elements["startingNumber"].value);
var end=parseInt(x.elements["endingNumber"].value);
var step=  parseInt(x.elements["step"].value);
	
	
		verify();

	
		for (var i=start; i<=end; i++)
		{
		beginArray.push(i);
		}
	
	
		for (var x=0; x<beginArray.length;x=x+step)
		{
			if (beginArray[x]%2==0)
			{
			evenArray.push(beginArray[x]);
			
			}
		}
		
		var answer=document.write ("Here are the even numbers between " + starting +" and " + end + " by " + step + "s: \n" + evenArray[] );
		
	return (answer);
	
}