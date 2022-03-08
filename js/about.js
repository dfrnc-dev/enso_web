  gsap.set('#traks >*:nth-child(1)', { duration: 1, opacity: 1 })
  gsap.set('#traks >*:nth-child(2)', { duration: 1, opacity: 0 })
  gsap.set('#traks >*:nth-child(3)', { duration: 1, opacity: 0 })
  gsap.set('#traks >*:nth-child(4)', { duration: 1, opacity: 0 })
  gsap.set('#traks >*:nth-child(5)', { duration: 1, opacity: 0 })

gsap.timeline({repeat: -1})
  .to('#traks >*:nth-child(1)', { duration: 1, opacity: 0})
  .to('#traks >*:nth-child(2)', { duration: 1, opacity: 1 }, '<')
  .to('#traks >*:nth-child(2)', { duration: 1, opacity: 0 })
  .to('#traks >*:nth-child(3)', { duration: 1, opacity: 1 }, '<')
  .to('#traks >*:nth-child(3)', { duration: 1, opacity: 0 })
  .to('#traks >*:nth-child(4)', { duration: 1, opacity: 1 }, '<')
  .to('#traks >*:nth-child(4)', { duration: 1, opacity: 0 })
  .to('#traks >*:nth-child(5)', { duration: 1, opacity: 1 }, '<')
  .to('#traks >*:nth-child(5)', { duration: 1, opacity: 0 })
  .to('#traks >*:nth-child(1)', { duration: 1, opacity: 1 }, '<')
  .totalDuration(4)


gsap.set('#leadSVG #hover-el', {opacity: 0})  

document.getElementById('hover-el').addEventListener('mouseover', () => {
  gsap.to('#leadSVG #hover-el', { opacity: 1 })  
})

document.getElementById('hover-el').addEventListener('mouseleave', () => {
  gsap.to('#leadSVG #hover-el', { opacity: 0 })
})


