const boton = document.querySelector(".nav-toggle")
const menu = document.querySelector(".nav-links")

boton.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open")
  boton.setAttribute("aria-expanded", abierto)
})

menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("open")
    boton.setAttribute("aria-expanded", false)
  })
})
