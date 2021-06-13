var images = ["https://media1.thehungryjpeg.com/thumbs2/ori_3483759_ffd6da4dfc2303dd5818113748c10f9bc04b3560_cute-cartoon-family-vector-characters-in-casual-clothes.jpg","http://4.bp.blogspot.com/-obSIZwU9yTs/UsjF3J2p20I/AAAAAAAAC9Q/c8Kd88eSg7Q/s1600/family3.jpeg","https://st2.depositphotos.com/1967477/6350/v/950/depositphotos_63509663-stock-illustration-happy-family-cartoon.jpg","https://img1.cgtrader.com/items/909627/b25bde6f2a/cartoon-family-rigged-v4-3d-model-rigged-obj-fbx-ma-mel.jpg"];
var names = ["Ranveer Singh","Ansi George","Seena Singh","Andrew"]
var i = 0;
function nextSlide (){
    document.getElementById("image").src = images[i];
    document.getElementById("name").src = names[i];
    i++;
}