function abc() {
    document.getElementById("nav").style.display = 'block';
    document.getElementById("nav").style.width = '250px';
}
function abcd() {
    document.getElementById("nav").style.display = 'none';
    document.getElementById("nav").style.width = '0';
}

let flag = 0 ;

function controler (x)
{
	flag = flag + x ;

	slideshow (flag);
}

setInterval(function()
{
	flag +=1;
	slideshow (flag);

},3000)

slideshow (flag);



function slideshow (num)
{
	let slides = document.getElementsByClassName('slide');

	if (num == slides.length) 
	{
		flag = 0 ;
		num = 0 ;
	}

	if (num < 0) 
	{
		flag = slides.length -1 ;
		num = slides.length -1;
	}

	for(let y of slides)
	{
		y.style.display = 'none' ;
	}

	slides[num].style.display = 'block';
}