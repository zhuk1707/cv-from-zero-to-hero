const projects = [
  {
    id: 0,
    cover: 'img/project-covers/01.png',
    title: 'Small JavaScript Projects',
    link: 'https://github.com/zhuk1707/Small_JavaScript_Projects'
  },
  {
    id: 1,
    cover: 'img/project-covers/02.png',
    title: "My Rubik's cube stats",
    link: 'https://github.com/zhuk1707/My_Rubiks_Cube_Stats'
  },
  {
    id: 2,
    cover: 'img/project-covers/03.png',
    title: 'Gradient Generator',
    link: 'https://github.com/zhuk1707/Gradient_Generator'
  },
]

const burgerButton = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

const projectCover = document.querySelector('.projects__image img')
const projectImage = document.querySelector('.projects__image')
const projectTitle = document.querySelector('.panel-projects__name')
const remoteCircles = document.querySelector('.remote__circles')
const remoteButtons = document.querySelector('.remote__buttons')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active')
  headerMenu.classList.toggle('active')
})

remoteButtons.addEventListener('click',(e) => {
  if (e.target.closest('.remote__button_right')) {
    currentProjectNum++
    if (currentProjectNum > projects.length - 1) {
      currentProjectNum = 0
    }
    showProject(currentProjectNum)
    displaySliderCount(currentProjectNum, projects.length)
  }

  if (e.target.closest('.remote__button_left')) {
    currentProjectNum--
    if (currentProjectNum < 0) {
      currentProjectNum = projects.length - 1
    }
    showProject(currentProjectNum)
    displaySliderCount(currentProjectNum, projects.length)
  }
})

function showProject(num) {
  const item = projects[num]
  projectCover.src = item.cover
  projectTitle.innerText = item.title
  projectTitle.href = item.link
  projectImage.href =  item.link
}

function displaySliderCount(current, length) {
  let circlesHTML = ''

  for (let i = 0; i < length; i++) {
    i === current
      ? circlesHTML += `<div class="remote__item active"></div>`
      : circlesHTML += `<div class="remote__item"></div>`

  }
  remoteCircles.innerHTML = circlesHTML
}

let currentProjectNum = 2
showProject(currentProjectNum)
displaySliderCount(currentProjectNum, projects.length)
