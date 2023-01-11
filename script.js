const colorInput = document.querySelector('.form-input')
const colorBtn = document.querySelector('.form-btn')
const colorH1 = document.querySelector('.header-h1')
console.log(colorH1);

const divContain = document.querySelector('.containDiv')

colorBtn.addEventListener("click" , bodyColorVer)

function bodyColorVer() {
     
     divContain.style.backgroundColor = colorInput.value 

     colorInput.value = ""
    //  if (colorInput.value = 'blue') {
    //      colorH1.style.color = 'white'
    //      colorInput.value = ""
    //  }
    //  else{
    //     colorH1.style.color = 'blue'
    //     colorInput.value = ""
    //  }
    
}



//       if (colorInput.value = 'white') {
    //      colorH1.classList.add('h1colorwhite')
    //      colorInput.value = ""
    //  }
    //  else{
        //     colorH1.className = 'header h1'
        //  }



        // colorBtn.onclick = function (){
        //     if (divContain.style.backgroundColor = 'blue') {
        //              colorH1.style.color = 'white'
        //              colorInput.value = ""
        //          }
        //          else{
        //             divContain.style.backgroundColor = 'blue'
        //             colorInput.value = ""
        //          }
        // }