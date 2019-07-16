




function verificar(){
    
        var res = document.querySelector('div#res')
        


    var img = document.createElement('img')
    img.setAttribute('id','imagem')
    img.setAttribute('src','love.png')
    var btn = document.createElement('button')
    var parag = document.createElement('p')
    parag.setAttribute("id",'pr')
    parag.innerHTML = "Ama?"
    btn.innerHTML = ".....SIM.....?"
    btn.addEventListener ("click", function() {
        img.setAttribute('src','love2.png')
      });
    
    res.appendChild(img)
    res.appendChild(btn)
    res.appendChild(parag)
    

  
    
    

}

