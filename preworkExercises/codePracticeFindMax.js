function findMax(someArray)
{
var max=0;
for (var i=0; i< someArray.length; i++)
	{
		if (max>someArray[i])
			{
			max=max;
			}
		else
			{
			max=someArray[i];
			}
		
	}
	return console.log(max);
}
