// Your code goes here - 10 unique event listeners 


const logoExpand = document.querySelector('.logo-heading');
// #1
logoExpand.addEventListener('mouseover', () => {
    logoExpand.style.transform = 'scale(1.7)';
    logoExpand.style.transition = 'transform 0.3s';
})
// #2
logoExpand.addEventListener('click', () => {
    logoExpand.style.transform = 'scale(1)';
    logoExpand.style.transition = 'transform 0.3s';
})
 
const busZoom = document.querySelector('.intro img');
// #3
busZoom.addEventListener('wheel', () => {
    busZoom.style.transform = `scale(2)`;
    busZoom.style.transition = 'transform 4.0s'
})
busZoom.addEventListener('click', () => {
    busZoom.style.transform = `scale(1)`;
    busZoom.style.transition = 'transform 4.0s'
})

// #4 
const navFocus = document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('focus', () => {
        item.style.background = 'red';
        item.style.borderRadius = '5px';
        item.style.padding = '3px';
        item.style.color = 'white';
        item.style.transform = 'scale(1.4)';
        item.style.transition = 'transform 1.5s'
    })

// #5
    item.addEventListener('blur', () => {
        item.style.background = '';
        item.style.color = 'black';
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 1.5s'
    } )
});

// #6
const changeImg = document.querySelector('.img-content img');
changeImg.addEventListener('dblclick', () => {
    changeImg.src='img/james-bold--PcZLgzmoIY-unsplash.jpg';
})

// #7 
const hoverButtons = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'red';
        item.style.color = 'blue';
    })
// #8
    item.addEventListener('mouseleave', () => {
        item.style.background = 'green';
        item.style.color = 'white';
        item.style.transform = 'scale(1.4)';
    })
})
// gsap.to(hoverButtons, {rotation: 360, duration: 2, repeat: 1, yoyo: true});
// var yoyo = hoverButtons.yoyo();
// hoverButtons.yoyo(true);

// #9
const textContent = document.querySelector('.text-content p');
textContent.addEventListener('select', (event) => {
    event.style.backgroundColor = 'yellow';
})
console.log(textContent);

// #10 & GSAP
const footerFun = document.querySelector('footer p');
footerFun.addEventListener('contextmenu', () => {
    gsap.to(footerFun, {rotation: 360, y: -200, x: -550, duration: 2});
}) 

//prevent default
const stopLink = document.querySelector('.nav-link');
stopLink.addEventListener('click', (event) => {
    event.preventDefault();
})

//stop propagation
const contentSection = document.querySelector(".content-section");
contentSection.addEventListener('click', () => {
  contentSection.style.backgroundColor= "green";
  event.stopPropagation();
})

//GSAP
gsap.registerEffect({
    name: "explode",
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    },
    defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

const contentDest = document.querySelector('.content-destination');
contentDest.addEventListener('click', () => {
    gsap.effects.explode(contentDest, {ease: "(1, 0.75)", duration: 2})
})