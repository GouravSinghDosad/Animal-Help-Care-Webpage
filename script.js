const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from(".nlink", {
  stagger: .2,
  y: 10,
  ease: Power2,
  duration: 1,
  opacity: 0,
})

Shery.textAnimate("#help2 h1", {
  style: 2,
  duration: 2,
  delay: 0.1,
  y: 10,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  stagger: .3,
  y: 50,
  ease: Expo,
  duration: 1,
  opacity: 0,
})

Shery.imageEffect("#help2 img", {
  style: 3,

  config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":8.4,"range":[0,100]},"uFrequencyZ":{"value":40.46,"range":[0,100]},"geoVertex":{"range":[1,64],"value":27.93},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7249850151878937},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.22,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

Shery.imageEffect(".imgeff img", {
  style: 5,

  config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.8,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7999694497489591},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.24,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

gsap.from("#help2 img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,
})

Shery.imageEffect("#bimg", {
  gooey: true,
  config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9610438335241003},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.05,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":19}},"discard_threshold":{"value":0.66,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  style: 5,
})

document.querySelector("#ltext button")
.addEventListener("mouseover", function(){
   gsap.to("#last video",{
      duration: 1,
      opacity: 1,
      ease: Power4,
   })
})

document.querySelector("#ltext button")
.addEventListener("mouseleave", function(){
   gsap.to("#last video",{
    duration: 1,
    opacity: 1,
    ease: Power5,
   })
  
})