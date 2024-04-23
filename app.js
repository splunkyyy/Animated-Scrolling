/* JS for splash screen */

let intro = document.querySelector('.intro-logo');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx +1) * 400)
        });

        setTimeout(()=>{

            logoSpan.forEach((span, idx)=>{


                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx +1) * 50)
            });
        }, 2000);
        
        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300);

    
    })
})


/*
let contentlogoSpan = document.querySelectorAll('.contentLogo-span');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        contentlogoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 2800)
        });
    
    })
}) */

/* JS for scroll animation */

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
