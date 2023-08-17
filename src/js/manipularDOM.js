const headerBottom = document.getElementById('bottom-header')


headerBottom.addEventListener('mouseover', () =>{
    const divFundo = document.getElementById('fundoNav')
        divFundo.classList.add('descer')
    })
headerBottom.addEventListener('mouseout', () =>{
    const divFundo = document.getElementById('fundoNav')
        divFundo.classList.remove('descer')
    })