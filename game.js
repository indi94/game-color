const choix= document.querySelector(".choix");
const a = document.querySelectorAll(".a")
const barre = document.querySelector(".barre")
const  hard = document.querySelector(".HARD")
const b = document.querySelectorAll(".b")
const EASY = document.querySelector(".EASY")
let couleur=0;
///game


 

function generateColor(){
    couleur = 6;
    let tab=[]
    
    for(i=0; i < couleur; i++){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let rgb= 'rgb(' + r + ', ' +  g + ', ' + b + ')'
        tab.push(rgb)
        
    }
    console.log(tab);
    const choise = Math.floor(Math.random()*tab.length);
    choix.innerHTML = tab[choise];
    
    for(i=0; i< couleur; i++){
        a[i].style.opacity='1';
        a[i].style.backgroundColor= tab[i] ;
    }
    

    console.log(choise);   
    
        for(i=0; i < tab.length; i++){
            a[i].addEventListener('click', function(e){
            var clr= e.target.style.backgroundColor;
            if(tab[choise] ==clr ){
                barre.style.backgroundColor= tab[choise];

                for (i=0; i < couleur; i++) {
                    a[i].style.opacity= '1'
                    a[i].style.backgroundColor = tab[choise];
                    
                }
            }else{
                e.target.style.opacity='0'               
            }
            })
        
        }
}

hard.addEventListener('click', generateColor);


///////////

function facil(){
    couleur = 3;
    let tab=[]
    
    for(i=0; i < couleur; i++){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let rgb= 'rgb(' + r + ', ' +  g + ', ' + b + ')'
        tab.push(rgb)
        
    }
    console.log(tab);
    const choise = Math.floor(Math.random()*tab.length);
    choix.innerHTML = tab[choise];
    
    for(var i=0; i< couleur; i++){
        a[i].style.opacity='1';
        a[i].style.backgroundColor= tab[i] ;
    }
    

    console.log(choise);   
    
        for(i=0; i < tab.length; i++){
            a[i].addEventListener('click', function(e){
            var clr= e.target.style.backgroundColor;
            if(tab[choise] ==clr ){
                barre.style.backgroundColor= tab[choise];

                for (i=0; i < couleur; i++) {
                    a[i].style.opacity= '1'
                    a[i].style.backgroundColor = tab[choise];
                    
                }
            }else{
                e.target.style.opacity='0'               
            }
            })
        
        }
        console.log(b);
    
        for(var i=0; i < b.length; i++){
            b[i].style.opacity = '0'
        }
        
        

}

EASY.addEventListener('click', facil);

