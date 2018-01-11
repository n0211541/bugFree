var isMouseTracking = false;

//we need a function to update the position
//on our front end, we have 2 labels-
//one for x, one for y

function updateMousePosition()
{
	if (isMouseTracking)
	{
	//we can get the mouse position with event.clientX and event.clientY
	//we can update the text of an html element with the innerText property
	
	var positionX=document.getElementsById("mousePositionX");
	positionX.innerText=event.clientX;
	var positionY = document.getElementsById("mousePositionY");
	positionY.innerText=event.clientY;
	}
}


//need a function to toggle whether tracking is enabled

function toggleTracking()
{
	//if isMouseTracking is true, set it to false
	//Otherwise it is false and needs to be set to true
	
	isMouseTracking = !isMouseTracking;
	
	//update the tracking status to show whether it is enabled
	
	if (isMouseTracking)
	{
		document.getElementById("trackingStatus")
			.innerText = "TRACKING";
	}
	
	else
	{
		document.getElementById("trackingStatus")
			.innerText = "NOT TRACKING";
	}
}