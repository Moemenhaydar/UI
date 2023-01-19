let  stars=document.getElementById('stars');
let  moon=document.getElementById('moon');
let  mountains3=document.getElementById('mountains3');
let  mountains4=document.getElementById('mountains4');
let  river=document.getElementById('river');
let  boat6=document.getElementById('boat6');
let  nouvil=document.querySelector('.nouvil');
window.onscroll= function(){
    let value= scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *4+'px';
    mountains3.style.top=value*2+'px';
    mountains4.style.top=value*1.5+'px';
    river.style.top=value+'px';
    boat6.style.top=value+'px';
    boat6.style.left=value*2+'px';
    nouvil.style.fontSize=value +'px';
    if(scrollY>=60){
        nouvil.style.fontSize=70 +'px';
        nouvil.style.position='fixed';
        if(scrollY>=532){
            nouvil.style.display='none'
        }else{
            nouvil.style.display='block'
        }
        if(scrollY>=132){
            document.querySelector('.main').style.background='linear-gradient(#200016,#9a8dd3)'
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'
        }
    }
}