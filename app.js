function mouseMouse(){
    var crsr = document.querySelector("#cursor");
    var blrCrsr =document.querySelector("#cursor-blur");
    document.addEventListener("mousemove",function(dets){
        gsap.to(crsr,{
            top:dets.clientY,
            left:dets.clientX,
        })
        gsap.to(blrCrsr,{
            top:dets.clientY,
            left:dets.clientX,
        })
    })

   var h4all = document.querySelectorAll("nav h4");
    h4all.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 2.5
            crsr.style.border = "1px solid #fff"
            crsr.style.backgroundColor = "transparent"
       })
       elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.border = "0px solid #fff"
            crsr.style.backgroundColor = "#95C11E"
        })
    })
    var elemall = document.querySelectorAll("#page5 .elem");
    elemall.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
            crsr.style.scale = 2.5
            crsr.style.border = "1px solid #fff"
            crsr.style.backgroundColor = "transparent"
       })
       elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.border = "0px solid #fff"
            crsr.style.backgroundColor = "#95C11E"
        })
    })
}
gsap.to("nav",{
    backgroundColor: "#000",
    duration:0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"nav",
        scroller: "body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers:true,
        start:"top -5%",
        end: "top -50%",
        scrub:2,
    }
})



//Animate About page

gsap.from("#about-us img,#about-us #about-us-text",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
      
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page4 p",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#page4 p",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#page5 h1",{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5 .elem",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:3
    }
})
 mouseMouse()



 