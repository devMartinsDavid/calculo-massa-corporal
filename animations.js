const select = s => document.querySelector(s);
    selectAll = s =>  document.querySelectorAll(s);

let mainSVG = select('#mainSVG'),
      pulseLine = select('#pulseLine'),
      numPoints = 400,
      width = numPoints * 2,
    allPoints = []

gsap.set('svg', {
  visibility: 'visible'
})

for(let i = 0; i < numPoints; i++) {
  let p = pulseLine.points.appendItem(mainSVG.createSVGPoint())
  p.y = 320;
  allPoints.push(p)
}
gsap.set(allPoints, {
  x: i => (width - (i * (width / numPoints)))
})
CustomEase.create('pulse', 'M0,0 C0.051,0 0.076,0 0.076,0 0.11,0 0.144,0.011 0.158,0.038 0.181,0.083 0.184,0.114 0.194,0.164 0.206,0.217 0.234,0.208 0.241,0.152 0.252,0.065 0.263,-0.021 0.274,-0.108 0.28,-0.158 0.306,-0.152 0.309,-0.1 0.333,0.266 0.357,0.633 0.38,1 0.382,1.032 0.4,1.032 0.402,1 0.428,0.471 0.455,-0.056 0.481,-0.585 0.482,-0.617 0.5,-0.62 0.503,-0.588 0.528,-0.329 0.553,-0.07 0.578,0.188 0.586,0.258 0.619,0.279 0.636,0.223 0.649,0.179 0.662,0.135 0.675,0.091 0.69,0.041 0.715,0.029 0.736,0.061 0.752,0.088 0.768,0.114 0.784,0.141 0.798,0.164 0.818,0.167 0.832,0.144 0.849,0.118 0.867,0.093 0.884,0.067 0.91,0.026 0.922,0.021 0.945,0.011 0.962,0.003 0.99,0 1,0');

gsap.to(allPoints, {
  duration: 1,
  y: '-=100',
  stagger: {
    each: 0.008,
    repeat: -1,
    repeatDelay: 0.3
  },
  ease: 'pulse'
}).seek(1000)
