import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* The following plugins are Club GSAP perks */
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

document.addEventListener('DOMContentLoaded', (event) => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)
	var splitHero = new SplitText("[animate='split']", { type: 'chars' })
	//now animate each character into place from 100px above, fading in:

	const heroTl = gsap.timeline({ paused: true, delay: 0.5 })

	heroTl.from(splitHero.chars, {
		duration: 0.5,
		y: 100,
		autoAlpha: 0,
		stagger: 0.05,
	})
	heroTl.from(
		'[animate="text-to-top"]',
		{
			opacity: 0,
			y: '50%',
			duration: 0.5,
		},
		'-=.5'
	)
	heroTl.from(
		"[animate='btn-fade']",
		{
			opacity: 0,
			duration: 0.5,
		},
		'-=1'
	)
	heroTl.from(
		"[animate='hero-image']",
		{
			autoAlpha: 0,
			y: '100%',
			duration: 1,
			ease: 'power2.out',
		},
		'-=1'
	)
	heroTl.from(
		'[animate="hero-icon"]',
		{
			autoAlpha: 0,
			y: '100%',
			duration: 1,
			ease: 'power2.inOut',
			stagger: 0.1,
		},
		'<.2'
	)
	heroTl.from(
		'.hero-message',
		{
			autoAlpha: 0,
			scale: 0,
			duration: 1,
			ease: 'power2.inOut',
		},
		'<.2'
	)
	heroTl.to('.apple-icon', {
		y: '40%',
		duration: 3,
		repeat: -1,
		yoyo: true,
		ease: 'back.inOut(2)',
	})
	heroTl.to(
		'.star-02-icon',
		{
			y: '-20%',
			duration: 4,
			repeat: -1,
			yoyo: true,
			ease: 'back.inOut(3)',
		},
		'-=3.9'
	)
	heroTl.to(
		'.star-icon',
		{
			y: '20%',
			duration: 4,
			repeat: -1,
			yoyo: true,
			ease: 'back.inOut(1)',
		},
		'-=2.9'
	)
	heroTl.to(
		'.amazon-icon',
		{
			y: '-15%',
			duration: 3.5,
			repeat: -1,
			yoyo: true,
			ease: 'back.inOut(2)',
		},
		'-=3.4'
	)

	heroTl.play()

	// How knew investing could fun?
	// Select all .text_wrapper elements and convert NodeList to array
	const textWrappers = Array.from(document.querySelectorAll('.text_wrapper'))

	// Remove the first element from the array
	textWrappers.shift()

	// create
	let mobileIgnore = gsap.matchMedia()

	// add a media query. When it matches, the associated function will run
	mobileIgnore.add('(min-width: 480px)', () => {
		ScrollSmoother.create({
			smooth: 1,
			effects: true,
		})
		// this setup code only runs when viewport is at least 800px wide
		const howKnewTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.investing_wrapper',
				start: 'clamp(6% top)',
				end: 'clamp(bottom bottom)',
				scrub: true,
				pin: '.investing_bottom',
				pinSpacing: true,
				// markers: true,
			},
		})
		// Animate remaining elements
		howKnewTl.to(
			'.list_track',
			{
				y: '-130%',
				duration: 1,
			},
			0
		)
		howKnewTl.from(
			textWrappers,
			{
				opacity: 0,
				duration: 0.3,
			},
			0
		)

		// How it Works?
		// Инициализируем GSAP timeline с ScrollTrigger
		const howItWorksTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.process_scroll',
				start: 'top 15%',
				end: 'bottom bottom',
				pin: '.process_wrapper',
				// markers: true,
				pinSpacing: true,
				scrub: 1,
			},
		})

		// Анимации для карточек
		howItWorksTl.to('#card1', { opacity: 0, height: 0, duration: 1 }, '+=.2')
		howItWorksTl.to(
			"[hiw='title-1']",
			{ duration: 1, css: { color: '#506060' } },
			'+=.2'
		)
		howItWorksTl.to(
			"[hiw='title-2']",
			{ duration: 1, css: { color: '#003338' } },
			'-=1'
		)
		howItWorksTl.from('#card2', { opacity: 0, height: 0, duration: 1 }, '-=1')
		howItWorksTl.to('#card2', { opacity: 0, height: 0, duration: 1 }, '+=.2')
		howItWorksTl.to(
			"[hiw='title-2']",
			{ duration: 1, css: { color: '#506060' } },
			'-=1'
		)
		howItWorksTl.to(
			"[hiw='title-3']",
			{ duration: 1, css: { color: '#003338' } },
			'-=1'
		)
		howItWorksTl.from('#card3', { opacity: 0, height: 0, duration: 1 }, '-=1')
		howItWorksTl.to('#card3', { opacity: 0, height: 0, duration: 1 }, '+=.2')
		howItWorksTl.to(
			"[hiw='title-3']",
			{ duration: 1, css: { color: '#506060' } },
			'-=1'
		)
		howItWorksTl.to(
			"[hiw='title-4']",
			{ duration: 1, css: { color: '#003338' } },
			'-=1'
		)
		howItWorksTl.from('#card4', { opacity: 0, height: 0, duration: 1 }, '-=1')

		// custom scrollbar
		const greenLineElement = document.querySelector('.green_line')
		const processContentContainer = document.querySelector('.process_content')
		const processFlexContainer = document.querySelector('.process_scroll')

		let containerHeightGlobal = processContentContainer.clientHeight
		let elementHeightGlobal = greenLineElement.clientHeight

		document.addEventListener('scroll', (event) => {
			containerHeightGlobal = processContentContainer.clientHeight
			console.log(containerHeightGlobal)
		})
		// Создаем ScrollTrigger для анимации
		ScrollTrigger.create({
			trigger: processFlexContainer,
			start: 'top top',
			end: 'bottom bottom',
			scrub: true,
			onUpdate: (self) => {
				const progress = self.progress
				const yOffset = progress * (containerHeightGlobal - elementHeightGlobal)
				gsap.to(greenLineElement, {
					y: yOffset,
					overwrite: 'auto',
					ease: 'none',
				})
			},
		})
		ScrollTrigger.refresh()

		return
	})

	// mobile code

	mobileIgnore.add('(max-width: 479px)', () => {
		console.log('mobile work!')
		const listTrack = document.querySelector('.list_track')
		const investingWrapper = document.querySelector('.investing_wrapper')
		const columnWrapper = document.querySelector('.column_wrapper')

		// Функция для получения высоты контейнера и высоты рамки
		function getHeights() {
			return {
				trackHeight: listTrack.clientHeight,
				wrapperHeight: columnWrapper.clientHeight,
			}
		}

		// Изначально обновляем высоты
		let { trackHeight, wrapperHeight } = getHeights()

		// Создаем timeline для анимации
		const howKnewTl = gsap.timeline({
			scrollTrigger: {
				trigger: investingWrapper,
				start: '20% top',
				end: 'bottom bottom',
				scrub: 1,
				// markers: true,
			},
		})

		// Анимация перемещения listTrack
		howKnewTl.to(listTrack, {
			y: -(trackHeight - wrapperHeight),
			ease: 'power1.out',
		})

		/// How it Works?
		// Инициализируем GSAP timeline с ScrollTrigger
		const howItWorksTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.process_flex',
				start: 'top 15%',
				end: 'bottom bottom',
				// markers: true,
				scrub: 1,
			},
		})

		// Анимации для карточек
		howItWorksTl.to('#card1', { opacity: 0, height: 0, duration: 1 }, '+=.2')
		howItWorksTl.to(
			"[hiw='title-1']",
			{ duration: 1, css: { color: '#506060' } },
			'+=.2'
		)
		howItWorksTl.to(
			"[hiw='title-2']",
			{ duration: 1, css: { color: '#003338' } },
			'-=1'
		)
		howItWorksTl.from('#card2', { opacity: 0, height: 0, duration: 1 }, '-=1')
		howItWorksTl.to('#card2', { opacity: 0, height: 0, duration: 1 }, '+=.2')
		howItWorksTl.to(
			"[hiw='title-2']",
			{ duration: 1, css: { color: '#506060' } },
			'-=1'
		)
		howItWorksTl.to(
			"[hiw='title-3']",
			{ duration: 1, css: { color: '#003338' } },
			'-=1'
		)
		howItWorksTl.from('#card3', { opacity: 0, height: 0, duration: 1 }, '-=1')
		howItWorksTl.to('#card3', { opacity: 0, height: 0, duration: 1 }, '+=.2')
		howItWorksTl.to(
			"[hiw='title-3']",
			{ duration: 1, css: { color: '#506060' } },
			'-=1'
		)
		howItWorksTl.to(
			"[hiw='title-4']",
			{ duration: 1, css: { color: '#003338' } },
			'-=1'
		)
		howItWorksTl.from('#card4', { opacity: 0, height: 0, duration: 1 }, '-=1')
		// ScrollTrigger.normalizeScroll(true); // enable

		const cursor = document.querySelector('.canvas-cursor')
		const mobcanvaswrapper = document.querySelector('.investing_top')

		mobcanvaswrapper.addEventListener('touchmove', function (e) {
			const touch = e.touches[0]
			const rect = mobcanvaswrapper.getBoundingClientRect()
			const x = touch.clientX - rect.left
			const y = touch.clientY - rect.top

			cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px, ${
				y - cursor.offsetHeight / 2
			}px)`
		})

		mobcanvaswrapper.addEventListener('touchstart', function (e) {
			const touch = e.touches[0]
			const rect = mobcanvaswrapper.getBoundingClientRect()
			const x = touch.clientX - rect.left
			const y = touch.clientY - rect.top

			cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px, ${
				y - cursor.offsetHeight / 2
			}px)`
		})

		// custom scrollbar
		const greenLineElement = document.querySelector('.green_line')
		const processContentContainer = document.querySelector('.process_content')
		const processFlexContainer = document.querySelector('.process_flex')

		let containerHeightGlobal = processContentContainer.clientHeight
		let elementHeightGlobal = greenLineElement.clientHeight

		document.addEventListener('scroll', (event) => {
			containerHeightGlobal = processContentContainer.clientHeight
			console.log(containerHeightGlobal)
		})
		// Создаем ScrollTrigger для анимации
		ScrollTrigger.create({
			trigger: processFlexContainer,
			start: 'top top',
			end: 'bottom bottom',
			scrub: true,
			onUpdate: (self) => {
				const progress = self.progress
				const yOffset = progress * (containerHeightGlobal - elementHeightGlobal)
				gsap.to(greenLineElement, {
					y: yOffset,
					overwrite: 'auto',
					ease: 'none',
				})
			},
		})
		ScrollTrigger.refresh()
		return
	})
	// -------canvas----------------

	var popup = document.getElementById('popup')
	var canvasCursor = document.querySelector('.canvas-cursor')
	var canvasElement = document.getElementById('canvas')

	function applyStyles() {
		canvasCursor.style.display = 'none'
		if (canvasElement) {
			canvasElement.remove()
		}
	}

	// Проверка localStorage на наличие показанного попапа
	if (localStorage.getItem('popupShown')) {
		// Выполняем необходимые действия
		applyStyles()
	} else {
		// Функция для инициализации канваса
		function initializeCanvas() {
			function createCanvas(parent, width, height) {
				var canvas = {}
				canvas.node = document.createElement('canvas')
				canvas.context = canvas.node.getContext('2d')
				canvas.node.width = width || 100
				canvas.node.height = height || 100
				parent.appendChild(canvas.node)
				return canvas
			}

			function init(container, width, height, fillColor) {
				var canvas = createCanvas(container, width, height)
				var ctx = canvas.context

				ctx.fillCircle = function (x, y, radius, fillColor) {
					this.fillStyle = fillColor
					this.beginPath()
					this.moveTo(x, y)
					this.arc(x, y, radius, 0, Math.PI * 2, false)
					this.fill()
				}
				ctx.clearTo = function (fillColor) {
					ctx.fillStyle = fillColor
					ctx.fillRect(0, 0, width, height)
				}
				ctx.clearTo(fillColor || '#fff')

				var eraseTimer = null
				var popupShown = false // Флаг для контроля показа поп-апа

				function startErasing() {
					if (!eraseTimer && !popupShown) {
						eraseTimer = setTimeout(showPopup, 3000)
					}
				}

				function stopErasing() {
					clearTimeout(eraseTimer)
					eraseTimer = null
				}

				function showPopup() {
					document.getElementById('popup').style.display = 'flex'
					localStorage.setItem('popupShown', 'true') // Устанавливаем флаг в localStorage
					popupShown = true // Устанавливаем флаг в true после показа поп-апа
					applyStyles()
				}

				canvas.node.onmousemove = function (e) {
					if (!canvas.isDrawing) {
						return
					}
					var rect = canvas.node.getBoundingClientRect()
					var x = e.clientX - rect.left
					var y = e.clientY - rect.top
					var radius = 80
					ctx.globalCompositeOperation = 'destination-out'
					ctx.fillCircle(x, y, radius, 'rgba(0,0,0,1)')
					startErasing()
				}

				canvas.node.onmousedown = function () {
					canvas.isDrawing = true
				}

				canvas.node.onmouseup = function () {
					canvas.isDrawing = false
					stopErasing()
				}

				canvas.node.onmouseleave = function () {
					canvas.isDrawing = false
					stopErasing()
				}

				// Touch events for mobile devices
				canvas.node.ontouchstart = function (e) {
					canvas.isDrawing = true
					e.preventDefault()
				}

				canvas.node.ontouchmove = function (e) {
					if (!canvas.isDrawing) {
						return
					}
					var rect = canvas.node.getBoundingClientRect()
					var touch = e.touches[0]
					var x = touch.clientX - rect.left
					var y = touch.clientY - rect.top
					var radius = 80
					ctx.globalCompositeOperation = 'destination-out'
					ctx.fillCircle(x, y, radius, 'rgba(0,0,0,1)')
					startErasing()
					e.preventDefault()
				}

				canvas.node.ontouchend = function () {
					canvas.isDrawing = false
					stopErasing()
				}

				canvas.node.ontouchcancel = function () {
					canvas.isDrawing = false
					stopErasing()
				}
			}

			var container = document.getElementById('canvas')
			init(container, window.innerWidth, window.innerHeight, '#ffffff')
		}

		// Вызов функции инициализации канваса
		initializeCanvas()
	}

	var observer = new MutationObserver(function (mutationsList) {
		for (var mutation of mutationsList) {
			if (
				mutation.type === 'attributes' &&
				mutation.attributeName === 'style'
			) {
				if (popup.style.display !== 'none') {
					applyStyles()
				}
			}
		}
	})

	observer.observe(popup, { attributes: true, attributeFilter: ['style'] })

	// swiper

	const swiper = new Swiper('.reviews_cards', {
		slidesPerView: 1,
		spaceBetween: 20,
		autoHeight: true,
		navigation: {
			nextEl: '.arrow_review-next',
			prevEl: '.arrow_review-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 3,
				spaceBetween: 10,
				autoHeight: false,
			},
		},
	})
})
