const IMAGES = document.querySelectorAll("img");
const SIZES = {
	showcase: "100vw",
	reason: "(max-width: 799px) 100vw, 372px",
	feature: "(max-width: 799px) 100vw, 558px",
	story: "(max-width: 799px) 100vw, 558px",
}

function makeSrcSet(imgSrc){
	let markSet= [];
	let width = 400;

	for(let i=0; i<5; i++)
	{
		markSet[i] = imgSrc + "-" + width + ".jpg " + width + "w";
		width+=400;
	}

	return markSet.join();
}

for(let i=0;i<IMAGES.length;i++)
{
	let imgSrc = IMAGES[i].getAttribute("src");
	imgSrc = imgSrc.slice(0,-8);

	let srcSet = makeSrcSet(imgSrc);
	// console.log(srcSet);
	IMAGES[i].setAttribute("srcset",srcSet);

	let imgType = IMAGES[i].getAttribute("data-type");
	IMAGES[i].setAttribute("sizes",SIZES[imgType]);
	// console.log(imgType);
}