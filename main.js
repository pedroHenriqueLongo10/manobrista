//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro

greencarWidth = 75;
greencarHeight= 150;

backgroundImage = "parkingLot.jpg";
greencarImage = "greencar.png";

//Defina a posição inicial para uma imagem de carro.

greencarX = 5;
greencarY = 400;

function add() {
	//carregar carro e imagens de fundo na tela.
	backgroudImgTag = new Image();
	backgroudImgTag.onload = uploadBackground;
	backgroudImgTag.src = backgroundImage;

	greencarImgTag = new Image();
	greencarImgTag.onload = uploadgreencar;
	greencarImgTag.src = greencarImage;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(backgroudImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencarImgTag, greencarX, greencarY, greencarWidth, greencarHeight);

}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
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
	//Definir função para mover o carro para cima
	if(greencarY >=0)
	{
		greencarY = greencarY - 10;
		console.log("Quando cima é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencarY <=500)
	{
		greencarY = greencarY + 10;
		console.log("Quando cima é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}

}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencarX >=0)
	{
		greencarX = greencarX - 10;
		console.log("Quando cima é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}

}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencarX <=700)
	{
		greencarX = greencarX + 10;
		console.log("Quando cima é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}
