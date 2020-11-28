const flightPath={
    curvinness:1.25,
    autoRotate:true,
    values:[
        {x:100,y:-20},
        {x:200,y: 50},
        {x:300,y:100},
        {x:400,y: 40},
        {x:500,y:-100},
        {x:600,y:-100},
        {x:400,y:-50},
        {x:500,y:50},
        {x:600,y:10},
        {x:700,y:30},
        {x:800,y:-20},
        {x:900,y:-20},
        {x:1000,y:-20},
        {x:window.innerWidth,y:-150},
    ]
}
const tween = new TimelineLite();
tween.add(
    TweenLite.to(".paper-plane",1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })

)

const controller = new ScrollMagic.Controller

const scene = new ScrollMagic.Scene({
    triggerElement:'.animation',
    duration:1000,
    triggerHook:1,

})
    .setTween(tween)
    .addIndicators()
    .addTo(controller);