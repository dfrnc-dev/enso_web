if (document.querySelector('.wrapper-start')) {
  
  const map1An = gsap.timeline({ paused: true })
  const map2An = gsap.timeline({ paused: true })
  const map3An = gsap.timeline({ paused: true })
  const map4An = gsap.timeline({ paused: true })
  const map5An = gsap.timeline({ paused: true })
  const map6An = gsap.timeline({ paused: true })
  const map7An = gsap.timeline({ paused: true })

  function mapAn(num, mapAnim, dur1, scaleNum, markAn = false) {
    gsap.set(`#map${num}`, { duration: 1, opacity: 0.2 })
    gsap.set(`#circle${num}`, { opacity: 0.2, transformOrigin: '50% 50%', scale: 0 })
    gsap.set(`#back-circle${num}`, { transformOrigin: '50% 50%', scale: 0 })

    gsap.timeline({ repeat: -1 })
      .to(`#circle${num}`, { duration: dur1, transformOrigin: '50% 50%', scale: scaleNum })

    mapAnim
      .to(`#back-circle${num}`, { duration: 1, transformOrigin: '50% 50%', scale: 30 })


    document.getElementById(`map${num}`).addEventListener('mouseenter', () => {
      mapAnim.play()
    })
    document.getElementById(`map${num}`).addEventListener('mouseleave', () => {
      mapAnim.reverse()
    })
  }



  mapAn(1, map1An, 2.6, 14)
  mapAn(2, map2An, 2.1, 10)
  mapAn(3, map3An, 2.2, 10)
  mapAn(4, map4An, 2.3, 10)
  mapAn(5, map5An, 2.4, 10)
  mapAn(6, map6An, 2.7, 16)
  mapAn(7, map7An, 2.8, 10)

  gsap.set('#mark', { transformOrigin: '50% 50%', scale: 0 })
  gsap.set('#mark-bot', { transformOrigin: '50% 50%', scale: 0 })

  const markAn = gsap.timeline({ paused: true })
    .to('#mark', { duration: 1, transformOrigin: '50% 50%', scale: 1 })
    .to('#mark-bot', { duration: 1, transformOrigin: '50% 50%', scale: 1 }, '<')

  document.getElementById(`map7`).addEventListener('mouseenter', () => {
    markAn.play()
  })
  document.getElementById(`map7`).addEventListener('mouseleave', () => {
    markAn.reverse()
  })	

  // 00FF8D

  const brandsName = document.getElementById('brands-name')

  console.log(brandsName.children);

  for (let i = 0; i < brandsName.children.length; i++) {
    brandsName.children[i].style.cursor = 'pointer'

    brandsName.children[i].addEventListener('mouseenter', () => {
      for (let j = 0; j < brandsName.children[i].children.length; j++) {
        brandsName.children[i].children[j].style.fill = '#00FF8D' 
      }
    })

    brandsName.children[i].addEventListener('mouseleave', () => {
      for (let j = 0; j < brandsName.children[i].children.length; j++) {
        brandsName.children[i].children[j].style.fill = '#9A9A9A'
      }
    })
  }










  const anim = () => {
    gsap.registerPlugin(MorphSVGPlugin);
    gsap.registerPlugin(MotionPathPlugin);

    gsap.set(".main_animation_container svg", { opacity: 1 });
    gsap.set(".morphFrom", { opacity: 0 });
    gsap.set(".pMove, .pSplash", { opacity: 0 });

    function animCap(gId, pId) {
      let gMove = gId + " .gMove"
      let pMoveArr = gsap.utils.toArray(pId + " .pMove > *")
      let gSplashArr = gsap.utils.toArray(gId + " .gSplash > *")
      let pSplash = document.querySelector(pId + " .pSplash")
      let timeAll = 5

      let tlMainCap = gsap.timeline({ paused: true })
      for (let i in pMoveArr) {
        let tempParam = {
          path: pMoveArr[i],
          lenght: Number(pMoveArr[i].getTotalLength().toFixed(0)),
          time: Number(pMoveArr[i].getTotalLength().toFixed(0)) / 1000,
          // morphClass: gId + " .morphFrom ." + pMoveArr[i].classList[0]
          morphClass: ".morphFrom ." + pMoveArr[i].classList[0]
        }
        tlMainCap
          .to(gMove, { duration: tempParam.time, motionPath: { path: tempParam.path, align: tempParam.path, autoRotate: 180, alignOrigin: [0.5, 0.5] }, ease: 'none' }, ">")
          .to(gMove + " .morphF", { duration: tempParam.time, morphSVG: tempParam.morphClass, ease: "none" }, "<")
      }

      gsap.set(gSplashArr, { opacity: 0, transformOrigin: "50% 50%", scale: 1 })
      let tlSpalsh = gsap.timeline({ paused: true })
      for (let i in gSplashArr) {
        let splashProgress = gsap.utils.random(0, 0.7, 0.01) // max 0.8
        tlSpalsh
          .add(
            gsap.timeline()
              .set(gSplashArr[i], { opacity: 0, transformOrigin: "50% 50%", scale: 1 })
              .to(gSplashArr[i], { duration: timeAll * splashProgress, motionPath: { path: pSplash, align: pSplash, start: 0, end: splashProgress, autoRotate: 180, alignOrigin: [-0.2, 0.5] }, ease: 'none' })
              .set(gSplashArr[i], { opacity: 1 }, ">")
              .to(gSplashArr[i], { duration: timeAll * 0.3, scale: 0, motionPath: { path: pSplash, align: pSplash, start: splashProgress, end: splashProgress + 0.1, autoRotate: 180, alignOrigin: [-0.2, 0.5] }, ease: 'power1.out' }, "<")
            , 0)

      }

      return gsap.timeline({ paused: true })
        .to(tlMainCap, { duration: timeAll, progress: 1, ease: "none" }, "qq")
        .to(tlSpalsh, { duration: tlSpalsh.duration(), progress: 1, ease: "none" }, "qq")

    }


    // /////////////////
    gsap.set("#gLogo", { scale: 0, rotation: 180, transformOrigin: "50% 50%" })
    gsap.set("#gAllpath2i1", { rotation: -90, transformOrigin: "50% 50%" })
    gsap.set(".gScale", { transformOrigin: "50% 50%" })


    let startBannerTl = gsap.timeline({ paused: true })
      .to(animCap("#gAll1", "#gAllpath1i1"), { duration: 1.9, progress: 1, ease: "none" }, "qq")
      .to("#gAll1 .gScale", { duration: 0.2, scale: 0, ease: 'sine.in' }, ">-0.2")
      .to(animCap("#gAll2", "#gAllpath2i1"), { duration: 2, progress: 1, ease: "none" }, "qq")
      .to("#gAll2 .gScale", { duration: 0.2, scale: 0, ease: 'sine.in' }, ">-0.2")
      .to(animCap("#gAll3", "#gAllpath3i1"), { duration: 2.1, progress: 1, ease: "none" }, "qq")
      .to("#gAll3 .gScale", { duration: 0.2, scale: 0, ease: 'sine.in' }, ">-0.2")
      .to("#gLogo", { duration: 0.5, scale: 1, rotation: 0, ease: "back.out(1)" })


    let endBannerTl = gsap.timeline({ paused: true })
      .to("#gLogo", { duration: 1, scale: 1, rotation: 50, opacity: 0, ease: "back.out(1)" }, "qq1")
      .to("#gAll1 .gScale", { duration: 0.2, scale: 1, ease: 'sine.in' }, "qq1")
      .to(animCap("#gAll1", "#gAllpath1i2"), { duration: 1.9, progress: 1, ease: "none" }, "qq1")
      .to("#gAll1 .gScale", { duration: 0.2, scale: 0, ease: 'sine.in' }, ">-0.2")

      .to("#gAll2 .gScale", { duration: 0.2, scale: 1, ease: 'sine.in' }, "qq1")
      .to(animCap("#gAll2", "#gAllpath2i2"), { duration: 2.5, progress: 1, ease: "none" }, "qq1")
      .to("#gAll2 .gScale", { duration: 0.2, scale: 0, ease: 'sine.in' }, ">-0.2")

      .to("#gAll3 .gScale", { duration: 0.2, scale: 1, ease: 'sine.in' }, "qq1")
      .to(animCap("#gAll3", "#gAllpath3i2"), { duration: 2.5, progress: 1, ease: "none" }, "qq1")
      .to("#gAll3 .gScale", { duration: 0.2, scale: 0, ease: 'sine.in' }, ">-0.2")

  ///////////////////////////////////////////////////////////

    gsap.set('#timelineSVG #lines-green >*', { strokeDasharray: 5200, strokeDashoffset: 5200 })
    gsap.set('#timelineSVG #lines-black >*', { strokeDasharray: 4200, strokeDashoffset: 4200 })
    gsap.set('#timelineSVG #timeline_2_', { strokeDasharray: 4030, strokeDashoffset: 4030 })
    gsap.set('#timelineSVG #marks2 >*', { opacity: 0 })
    gsap.set('#timelineSVG #line-shadow', { opacity: 0 })
    gsap.set('#timelineSVG #mark1, #timelineSVG #mark2, #timelineSVG #mark3, #timelineSVG #mark4, #timelineSVG #mark5, #timelineSVG #mark6, #timelineSVG #mark7, #timelineSVG #mark8, #timelineSVG #mark9, #timelineSVG #mark10', { transformOrigin: '50% 100%', scale: 0 })
    gsap.set('#timelineSVG #text1, #timelineSVG #text2, #timelineSVG #text3, #timelineSVG #text4, #timelineSVG #text5, #timelineSVG #text6, #timelineSVG #text7, #timelineSVG #text8, #timelineSVG #text9, #timelineSVG #text10', { opacity: 0 })
    gsap.set('.timeline__text', {opacity: 0})
    gsap.set('#timelineSVG #mark1, #timelineSVG #text1', { y: -90, x: 20})
    gsap.set('#timelineSVG #mark3, #timelineSVG #text3', { y: -90, x: -20 })
  

    gsap.set('.header-start', {y: -50, opacity: 0})
    gsap.set('.what_new-content', { x: -50, opacity: 0, maxWidth: 0})
    gsap.set('.what_new__img', { x: '-50%'})

    const wayAn = gsap.timeline({ paused: true })
      .to('#timelineSVG #way, #timelineSVG #marks', { duration: 8, y: 1800, transformOrigin: '50% 50%', scale: 1.8, ease: 'none', delay: 5 })
      .to('#timelineSVG #way, #timelineSVG #marks', { duration: 0.5, x: -100, ease: 'sine.inOut' }, '<')
      .to('#timelineSVG #way, #timelineSVG #marks', { duration: 2, x: 200, ease: 'sine.inOut' }, '>')
      .to('#timelineSVG #way, #timelineSVG #marks', { duration: 1.5, x: 0, ease: 'sine.inOut' }, '>')
      .to('#timelineSVG #way, #timelineSVG #marks', { duration: 2, x: 300, ease: 'sine.inOut' }, '>')
      .to('#timelineSVG #way, #timelineSVG #marks', { duration: 1, x: 0, ease: 'none' }, '>')

    const marksAn = gsap.timeline({ paused: true })


    for (let i = 1; i < 11; i++) {
      marksAn
        .to(`#timelineSVG #mark${i}`, { duration: 1, scale: 1, ease: 'none' }, '>')
        .to(`#timelineSVG #text${i}`, { duration: 1, opacity: 1, ease: 'none' }, '<+0.5')

    }

    marksAn
      .to('#timelineSVG #mark5', { duration: 1, fill: '#F8AC16' }, '>-6')
      .to('#timelineSVG #mark6', { duration: 1, fill: '#F8AC16' }, '>+0.7')
      .to('#timelineSVG #mark7', { duration: 1, fill: '#F8AC16' }, '>+0.7')
      .to('#timelineSVG #mark8', { duration: 1, fill: '#F8AC16' }, '>+0.7')
      .to('#timelineSVG #mark9 path', { duration: 1, fill: '#F8AC16' }, '>+0.7')
      .to('#timelineSVG #mark10', { duration: 1, fill: '#F8AC16' }, '>+0.7')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".what_new",
        start: "bottom bottom",
        end: "bottom+=10000px bottom",
        scrub: 1,
        pin: true
      }
    })


    
    

    window.addEventListener('load', () => {
      gsap.set('.what_new', {opacity: 1})
      let mainTlForTest = gsap.timeline()
        .add(startBannerTl.restart())
        .to('.header-start', { y: 0, opacity: 1 })
        .to('.what_new-content', { x: 0, opacity: 1, maxWidth: 'none' }, '<')
        .to('.what_new__img', { x: 0 }, '<')

      setTimeout(() => {
        document.querySelector('.wrapper-start').style.overflow = 'auto'
        tl
          .add(endBannerTl.restart())
          .to('.what_new-content, .what_new-background, .what_new__img', { duration: 1, opacity: 0 }, '>-1')
          .to('.timeline__text', { duration: 1, opacity: 1 })
          .to('#timelineSVG #lines-green >*', { duration: 5, strokeDashoffset: 0 }, '<')
          .to('#timelineSVG #lines-black >*', { duration: 5, strokeDashoffset: 0 }, '<+0.5')
          .to(wayAn, { duration: 10, progress: 1, ease: 'none' }, '<')
          .to(marksAn, { duration: 8, progress: 1, ease: 'none' }, '<')
          .to('#timelineSVG #lines-green >*', { duration: 2, strokeDashoffset: -5400, ease: 'none' }, '>-0.1')
          .to('#timelineSVG #lines-black >*', { duration: 2, strokeDashoffset: -4500, ease: 'none' }, '<')
          .to('#timelineSVG #timeline_2_', { duration: 2, strokeDashoffset: 0 }, '>-0.5')
          .to('#timelineSVG #top-shadow', { duration: 1, opacity: 0 }, '<')
          .to('#timelineSVG #marks2 >*', { duration: 0.5, opacity: 1, stagger: 0.12 }, '<')
          // .to('#timelineSVG #lines-green >*', { duration: 1, strokeDashoffset: -4400, ease: 'none' }, '<+1')
          // .to('#timelineSVG #lines-black >*', { duration: 1, strokeDashoffset: -3500, ease: 'none' },)
          // .to('#timelineSVG #timeline_2_', { duration: 1, strokeDashoffset: -600, ease: 'none' }, '<+0.7')
          .to('#timelineSVG #mark10', { duration: 0.3, fill: '#F8AC16' })

      }, mainTlForTest.duration() * 1000)


    })
    


    


    // let mainTlForTest = gsap.timeline()
    //   .add(startBannerTl.restart())
    //   .add(endBannerTl.restart(), ">+2")
  }



  window.addEventListener('resize', () => {
    if(window.innerWidth > 820){
      anim()
      console.log(1);
    }
  })

  if (window.innerWidth > 820) {
    anim()
    console.log(1);
  }
}