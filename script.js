function locomotiveAnimation(pageId) {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(pageId),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(pageId, {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")
    var cursor  = document.querySelector('#cursor')
    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {


   console.log(elem.childNodes);
   
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1.2
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
             const innerWidth  = window.innerWidth
             console.log(innerWidth);
             
        if(innerWidth < 600){
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 90
            })
        }else{
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        }
        })
    })
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    // var sections = document.querySelectorAll(".sec-right")

    // sections.forEach(function (elem) {
    //     elem.addEventListener("mouseenter", function () {
    //         elem.childNodes[3].style.opacity = 1
    //         elem.childNodes[3].play()
    //     })
    //     elem.addEventListener("mouseleave", function () {
    //         elem.childNodes[3].style.opacity = 0
    //         elem.childNodes[3].load()
    //     })
    // })

}

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
const handleMouseMove = (e) => {
    gsap.to('#cursor', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power4.out",
    })
  }

function GithubIcon(){
const Githubsvg = document.querySelector('#github')
const targerEye  = document.querySelector('.targerEye')
console.log(Githubsvg)
const initailPath = 'M-99.4,423.7c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C-84.2,418-93,417.8-99.4,423.7z'
Githubsvg.addEventListener('mouseenter', (e)=>{

   gsap.to(targerEye,{
    attr:{d:''}
   })
    
    
})





Githubsvg.addEventListener('mouseleave', (e)=>{

    gsap.to(targerEye,{
     attr:{d:initailPath}
    })
     
     
 })

}
function LinkedinIcon(){
    const Githubsvg = document.querySelector('#linkedin')
    const targerEye  = document.querySelector('.lindekinPath')
    console.log(Githubsvg)
    const initailPath = 'M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z '
        const finalPath = 'M113,145c-141.4,0-256,114.6-256,256s114.6,256,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z '
    Githubsvg.addEventListener('mouseenter', (e)=>{
    
       gsap.to(targerEye,{
        attr:{d:finalPath}
       })
        
        
    })
    Githubsvg.addEventListener('mouseleave', (e)=>{
    
        gsap.to(targerEye,{
         attr:{d:initailPath}
        })
         
         
     })
    
    }
GithubIcon()
// LinkedinIcon()
window.addEventListener('mousemove', handleMouseMove)






const initailPath = `M 10 100 Q 500 0 1200 100`
const finalPath = `M 10 100 Q 500 100 1200 100`

const guitarSvg = document.querySelector('#guitarSvg')

guitarSvg.addEventListener('mousemove', (dets) => {
    console.log(dets.y -317);
    const innerWidth = window.innerWidth
    
    path = `M 10 100 Q ${dets.x} ${dets.y -240} ${innerWidth} 100`

    gsap.to('#guitarSvg>svg path', {
        attr: { d: path },
        duration:0.3,
        ease:"power3.out"
    })

})
guitarSvg.addEventListener('mouseleave',(dets)=>{
    gsap.to('#guitarSvg>svg path',{
        attr:{d:finalPath},
        duration:1.2,
        ease:"elastic.out(1,0.2)"
    })
})



// const userName = document.querySelector('#name')


// userName.addEventListener('mouseenter',()=>{
//   userName.textContent = "Zaeem"
//   gsap.to('#name',{
//     y:20,
//     duration:0.5

//   })
// })
// userName.addEventListener('mouseleave',()=>{
//     userName.textContent = "Rana"
//     gsap.to('#name',{
  
//     })
//   })



const userImg = document.querySelector('#userImg')
userImg.addEventListener('mousemove',(e)=>{
    var x =e.x -500
    var y = e.y -500
})

function textHoverAnimation(){



   
    const page1Text = document.querySelector('#page1 .heading')
    console.log(page1Text);

    gsap.to(page1Text,{
      
    })
    

}

textHoverAnimation()







locomotiveAnimation('#main')

// navAnimation()

page2Animation()

// page3VideoAnimation()

// page6Animations()

loadingAnimation()