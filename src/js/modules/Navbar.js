const toggle = document.getElementById('nav-toggle')
const nav = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav__link')

// ========= SHOW MENU ========
const showMenu = () => {
	nav.classList.toggle('show-menu')
}

toggle.addEventListener('click', showMenu)

// ========== HIDE MENU =========

const hideMenu = () => {
	nav.classList.remove('show-menu')
}
navLink.forEach(item => item.addEventListener('click', hideMenu))

// =========== SCROLL SECTION ACTIVE LINK ===========

const sections = document.querySelectorAll('section')

// const scrollSpy = ()=>{
// const section = []
// const scrollY = window.scrollY
// sections.forEach(item =>{
//     const sectionHeight= item.offsetHeight
//         const sectionTop = item.offsetTop - 400;
//     const sectionId = item.getAttribute('id')
//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//         // section.push(item)

//         const activeSection = document.querySelector(`[href*="${sectionId}"]`)
//         console.log(activeSection);

//         navLink.forEach(item=>item.classList.remove('active-link'))

//         activeSection.classList.add('active-link')
//     }
// })

// const scrollY = window.scrollY

// sections.forEach(item=>{
//     const sectionHeight= item.offsetHeight
//     const sectionTop = item.offsetTop - 400;

//     const sectionId = item.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//         document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active-link')
//     }else{
//         document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active-link')

//     }

// })
// }
// window.addEventListener('scroll',scrollSpy)

const observeSection = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const section = entry.target.id
				const activeSection = document.querySelector(`[href*=${section}]`)
				navLink.forEach(item => {
					item.classList.remove('active-link')
				})

				activeSection.classList.add('active-link')
			}
		})
	},
	{ threshold: 0.6 }
)

sections.forEach(item => {
	observeSection.observe(item)
})

// ======= CHANGE BACKGROUND HEADER =========

const scrollHeader = () => {
	const nav = document.getElementById('header')
	window.scrollY >= 200 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// ========== SHOW SCROLL TOP =========
const btnScrollTop = () => {
	const scrollTop = document.getElementById('scroll-top')
	window.scrollY >= 560 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', btnScrollTop)

// ============ DARK LIGHT THEME ============

const themeBtn = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => (document.body.matches(`.${darkTheme}`) ? 'dark' : 'light')
const getCurrentIcon = () => (themeBtn.matches(`.${iconTheme}`) ? 'bx-moon' : 'bx-sun')

// Validate if the user previously chose a topic

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeBtn.addEventListener('click', () => {
	// add or remove the dark /icon theme
	document.body.classList.toggle(darkTheme)
	themeBtn.classList.toggle(iconTheme)

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

// ========== SCROLL REVEAL ANIMATION =========

const sr = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 2000,
	reset: true,
})

sr.reveal(
	`.home__data, .home__img, .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app_img,
            .contact__data, .contact__button,
            .footer__content`,
	{
		interval: 200,
	}
)
