const navBarMenu = document.querySelector(".nav__bar--menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");



openMenu.addEventListener("click", ()=>{    
    navBarMenu.classList.toggle("nav__bar--click");
});

closeMenu.addEventListener("click", ()=>{    
    navBarMenu.classList.toggle("nav__bar--click");
});

const menuLinks = document.querySelectorAll(`.nav__bar--menu a[href^="#"]`);

// const observer = new IntersectionObserver( (entries)=>{
//     entries.forEach( (entry)=>{
        
//         const id = entry.target.getAttribute("id");
//         const menuLink =  document.querySelector(`.nav__bar--menu a[href="#${id}"]`);
        
//         if(entry.isIntersecting){
//             menuLink.classList.add("selected");
//         }else{
//             menuLink.classList.remove("selected");
//         }

//     } );
// });

menuLinks.forEach( (menuLink)=>{    
    menuLink.addEventListener("click", ()=>{    
        navBarMenu.classList.toggle("nav__bar--click");
    });
    
    // const hash = menuLink.getAttribute("href");
    // const target = document.querySelector(hash);
    // observer.observe(target);

} );
