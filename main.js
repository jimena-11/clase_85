 canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var personaje_width=100
var personaje_height=90
var background_image="f.jpg"
var oso_image="oso.png"
var muñeco_de_nieve="muñecodenieve.png"
var santa_image="santa.png"
var duende="duende.png"
var oso_x=10
var oso_y=10
var muñeco_de_nieve_x=30
var muñeco_de_nieve_y=30
var santa_image_x=50
var santa_image_y=50
var duende_x=70
var duende_y=70

function add() {
    background_img=new Image()
    background_img.onload=upload_background
    background_img.src=background_image

    personaje_1=new Image()
    personaje_1.onload=upload_personaje_1
    personaje_1.src=oso_image

    personaje_2=new Image()
    personaje_2.onload=upload_personaje_2
    personaje_2.src=santa_image

    personaje_3=new Image()
    personaje_3.onload=upload_personaje_3
    personaje_3.src=duende
}
function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.Width,canvas.height)

}

function upload_personaje_1(){
    ctx.drawImage(personaje_1,oso_x,oso_y,personaje_width,personaje_height)

}

function upload_personaje_2(){
    ctx.drawImage(personaje_2,santa_image_x,santa_image_y,personaje_width,personaje_height)
}
function upload_personaje_3(){
    ctx.drawImage(personaje_3,duende_x,duende_y,personaje_width,personaje_height)
}

window.addEventListener("keydown",presionando_tecla)
function presionando_tecla(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed=="38"){
        up()
    }
    if(keypressed=="40"){
        down()
    }
    if(keypressed=="37"){
        left()
    }
    if(keypressed=="39"){
        right()
    }
}
function up(){
    if(oso_y>=0){
        oso_y=oso_y-10
        upload_background()
        upload_personaje_1()
        upload_personaje_2()
        upload_personaje_3()
    }
}
function down(){
    if(oso_y<=500){
    oso_y=oso_y+10
        upload_background()
        upload_personaje_1()
        upload_personaje_2()
        upload_personaje_3()
    }
}
function left(){
    if(oso_x>=0){
        oso_x=oso_x-10
        upload_background()
        upload_personaje_1()
        upload_personaje_2()
        upload_personaje_3()
    }
}
function right(){
    if(oso_x<=700){
        oso_x=oso_x+10
        upload_background()
        upload_personaje_1()
        upload_personaje_2()
        upload_personaje_3()
    
    }
}
