
    const divContain = document.getElementById('containDiv')

    const basliq = document.createElement('header')
    const basliqH1 = document.createElement('h1')
    basliqH1.classList.add('header-h1')
    basliqH1.innerHTML = 'Color The Background'
    basliq.appendChild(basliqH1)

    const colorform = document.createElement('form')
    colorform.classList.add('colorform')
    const colorInput =  document.createElement('input')
    // colorInput.classList.add('form-input')
    colorInput.className =  'form-input'
    colorInput.placeholder = 'write a color'
   

    const colorBtn =  document.createElement('button')
    colorBtn.classList.add('form-btn')
    colorBtn.innerHTML = '<i class="fa-solid fa-palette"></i>'
    colorform.appendChild(colorInput)
    colorform.appendChild(colorBtn)
    divContain.appendChild(basliq)
    divContain.appendChild(colorform)
    // console.log(divContain);


    colorBtn.addEventListener("click" , bodyColorVer)
    
    
    function bodyColorVer(e) {
        e.preventDefault()
    divContain.style.backgroundColor = colorInput.value 
     

    // colorInput.value = " "

    // if (colorInput.value = ' ') {
    //     basliqH1.style.color = 'black'
    // }
    
}
    

      
        
     
      
     

//     colorBtn.addEventListener("keydown" , yazirengi)
//     function yazirengi(e) {
//         divContain.style.backgroundColor = colorInput.value 
//         alert('isle')
//         const ag =  'white'
//     if (colorInput.value = ag) {
//         basliqH1.style.color = 'black'
        
//      }
//      else{
//        basliqH1.style.color = ag
//    }
//     console.log(colorInput.value);
        
//     }
    

    // colorBtn.onclick = function(){
        
    //     divContain.style.background = colorInput.value
        
    // }