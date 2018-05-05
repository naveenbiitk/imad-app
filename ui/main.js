console.log('Loaded!');
//to change the inner html
var element=document.getElementById('main-text');
element.innerHTML='New value';

//to move the image
var img=document.getElementById('madi');
img.onclick=function()
{
    img.style.marginLeft='100px';
};