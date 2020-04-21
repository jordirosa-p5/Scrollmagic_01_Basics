let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#contingut",
        triggerHook: 0,
        duration: "100%"    
    })
    .setTween("#cosaQueEsMou", {
        left: "100%",
        scale: 2
    })
    .addIndicators()
    .addTo(controller);

