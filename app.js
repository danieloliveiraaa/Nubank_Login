let btn_olho = document.querySelector('.olho')

btn_olho.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')

    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

