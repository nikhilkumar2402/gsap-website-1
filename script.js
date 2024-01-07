let tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imgcontainer", {
  width: "100%",
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
}, 'a')
.to("#textcontainer h1", {
  left: 0,
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
}, 'a')
.to("#textcontainer h1", {
  delay: 2,
  left: 550,
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
}, 'a')
.to("#paracontainer h2", {
  top: 0,
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
}, 'a')
.to("#paracontainer h2", {
  delay: 2,
  top: -180,
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
}, 'a');