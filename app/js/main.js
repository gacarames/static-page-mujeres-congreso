/* (function () {
    function nombrar(nombre) {
        return nombre;
    }
    function saludar(nombre) {
        console.info(nombre, ', un saludo desde infobae');
    }

    saludar(nombrar('Cambio funciona'));
})(); */

var marketRates = document.getElementById("root");

function placeItems(arrayValue) {

    if (marketRates != null || marketRates != undefined) {

        for (let i = 0; i < arrayValue; i++) {
            marketRates.innerHTML += `<div class="img-wrapper" style="background-image: url(../img/09.jpg);"></div>`;
        }
    } else {
        console.log('El elemento (root) no existe');
    }

}

placeItems(97);

/* function placeEmptyItems(emptyValue) {

    if (marketRates != null || marketRates != undefined) {
		
		for (let i = 0; i < emptyValue; i++) {
            marketRates.innerHTML += `<div class="empty"></div>`;
        }		
	} else {
		console.log('El elemento (root) no existe');
	}
    
}

placeEmptyItems(16); */


var imagesList = document.querySelectorAll('.img-wrapper');

var imgesArr = Array.from(imagesList);

console.log(imgesArr);

var defaultImagesArr = imgesArr.slice(84, 96);

var mediumImagesArr = imgesArr.slice(79, 84);

/* var largeImagesArr = imgesArr.slice(95, 96); */

for (i = 0; i < defaultImagesArr.length; i++) {
    defaultImagesArr[i].className += ' default';
}

for (i = 0; i < mediumImagesArr.length; i++) {
    mediumImagesArr[i].className += ' medium';
}

/* for (i = 0; i < largeImagesArr.length; i++) {
    largeImagesArr[i].className += ' large';
} */


/* console.log(largeImagesArr) */