 // Task 11 ============================================
// /*  Проект. Дан input .i-11. Испол


let blKey = document.querySelectorAll('.block-key');


function t11(e) {
    blKey.forEach( item => {
        let data = item.getAttribute('data-1')
          
        if (e.keyCode ==  data){
         item.classList.add('data-style')
         console.log(item)
        }
        })
}
document.querySelector('.i-11').onkeydown = t11; 


function t12(event) {
    blKey.forEach( item => {
        let data = item.getAttribute('data-1');

        if (event.keyCode ==  data ){
         item.classList.remove('data-style')
         console.log(item)
        }
        })
}
document.querySelector('.i-11').onkeyup = t12; 

