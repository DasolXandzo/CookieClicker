var click = document.getElementById('click');
var score = document.getElementById('score');
var point = "$";
var tap = 1;
number = 0
vaule = 0
click.onclick = function () {
	number = number + tap
	vaule = number + point
	if (number > 9999999)
	{
		vaule = "AAAAAHHH!"
		score.innerHTML = vaule
		tap = 0
		number = 0
		click.style.backgroundImage = "url('img/face.png')"
	}
	else
	{
		
		score.innerHTML = vaule
	}
	
};

var lvlup = document.getElementById('lvlup');
var price = document.getElementById('price');
var LVL = document.getElementById('LVL');
price2 = 50
LVL2 = 0
lvlup.onclick = function () {
	if  (number >= price2)
	{
		number = number - price2
		vaule = 0
		vaule = number + point
		score.innerHTML = vaule
		tap = tap * 2
		price2 = price2 * 3
		price.innerHTML = price2
		LVL2 = LVL2 + 1
		if (LVL2 == 10)
		{
			LVL.innerHTML = LVL2 + " MAX"
			price2 = "-"
			price.innerHTML = price2
		}
		else
		{
			LVL.innerHTML = LVL2
		}
		
	}
	else
	{
		score.innerHTML = vaule
	}
};

var reset = document.getElementById('reset');
reset.onclick = function () {
	vaule = 0 + point
	score.innerHTML = vaule
	price.innerHTML = 50
	LVL.innerHTML = 0
	tap = 1
	number = 0
	price2 = 50
	LVL2 = 0
};