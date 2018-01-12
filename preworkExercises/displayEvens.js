function evenNumbers (start, end, step)
{
var beginArray=new Array();
var evenArray= new Array();
	
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
	
	 console.log ("Here are the even numbers between " + start +" and " + end + " by " + step + "s:");
	 console.log (evenArray);
}