const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu_btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')
const links = document.querySelectorAll('.mobile-link')

links.forEach((link)=>{
  link.addEventListener('click', ()=>{
    btn.classList.remove('open')
    menu.classList.add('hidden')
  })
})

// Hamburger button listener
btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle("open")
  menu.classList.toggle("flex")
  menu.classList.toggle("hidden")

  if(menu.classList.contains("flex")){
    logo.setAttribute('src', './images/logo-bookmark-footer.svg' )
  } 
  else {
    logo.setAttribute('src', './images/logo-bookmark.svg' )
  }
}



//tab menu event listener
tabs.forEach(function(tab) {
  tab.addEventListener('click', onTabClick)
})


function onTabClick(e){
  // deactivate all tabs first
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4'
      )
  })

  //hide all panels first
  panels.forEach((panel) => {
    panel.classList.add("hidden")
  })

  //activate a new tab and panel based on target
  e.target.classList.add(
    'border-softRed',
    'border-b-4'
  )

  const classString = e.target.getAttribute('data-target')

  document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
  
  

}
