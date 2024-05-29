const observer = new IntersectionObserver((visible)=>{
    visible.forEach((visib) => {
        if(visib.isIntersecting === true){
            visib.target.classList.add('show')
        }else{
            visib.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => observer.observe(element))

