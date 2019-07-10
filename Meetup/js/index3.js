console.log("Ok");

var imgs = [];

for (let i = 0; i <=8; i++) {
    let img = new Image();
    img.src = "./images/GermanShepherd-" + i +".jpg";
    imgs.push(img);
}

var idx = 0;


function loaded() {
    load(0);
}





// var loaded = () => {
//     load(0);
// };
//





function load(pidx) {
    let imgCtrl = document.querySelector("#gs");
    imgCtrl.src = imgs[pidx].src;
}
