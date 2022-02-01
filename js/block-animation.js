const bottomAn = document.querySelectorAll('.bottom-an')

for (let i = 0; i < bottomAn.length; i++) {
  gsap.timeline({
    scrollTrigger: {
      trigger: bottomAn[i],
      start: "bottom bottom",
      // end: "bottom bottom",
      // scrub: 1,
    }
  })
    .from(bottomAn[i], { duration: 0.5, y: 100, opacity: 0 })

}

const rightAn = document.querySelectorAll('.right-an')

for (let i = 0; i < rightAn.length; i++) {
  gsap.timeline({
    scrollTrigger: {
      trigger: rightAn[i],
      start: "center bottom",
      // end: "bottom bottom",
      // scrub: 1,
    }
  })
    .from(rightAn[i], { duration: 0.5, x: 50, opacity: 0 })

}

const leftAn = document.querySelectorAll('.left-an')
console.log(leftAn, rightAn, bottomAn);
for (let i = 0; i < leftAn.length; i++) {
  gsap.timeline({
    scrollTrigger: {
      trigger: leftAn[i],
      start: "center bottom",
      // end: "bottom bottom",
      // scrub: 1,
    }
  })
    .from(leftAn[i], { duration: 0.5, x: -50, opacity: 0 })

}

