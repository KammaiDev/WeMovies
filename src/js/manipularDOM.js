const headerBottom = document.getElementById('bottom-header').addEventListener('mouseover', () =>{
    const divFundo = document.getElementById('fundoNav')
        divFundo.classList.add('descer')

        setTimeout(() => {
            divFundo.classList.remove('descer')
        },5000)
    })
