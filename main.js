canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
green_width = 75;
green_height = 100;
green_x = 5;
green_y = 225;
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	green_imgTag = new Image();
	green_imgTag.onload = uploadgreencar();
	green_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(green_imgTag, green_x, green_y, green_width, green_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(green_y >= 0)
	{
		green_y = green_y - 10;
		console.log("When up arrow is pressed, x = " + green_x + " | y " + green_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(green_y >= 0)
	{
		green_y = green_y + 10;
		console.log("When up arrow is pressed, x = " + green_x + " | y " + green_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(green_x >= 0)
	{
		green_x = green_x - 10;
		console.log("When up arrow is pressed, x = " + green_x + " | y " + green_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(green_x >= 0)
	{
		green_x = green_x + 10;
		console.log("When up arrow is pressed, x = " + green_x + " | y " + green_y);
		uploadBackground();
		uploadgreencar();
	}
}
