function toggleMode() {
  const body = document.documentElement
  // adiciona ou remove a classe light
  body.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // verifica se dentro de html tem a classe light
  if (body.classList.contains("light")) {
    // se tiver, muda o avatar para light theme
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de josué")
  } else {
    // se nao tiver, deixa o mesmo avatar
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de avatar de josué")
  }
}

// const ToggleMode = () =>
//   body.classList.contains("light")
//     ? body.classList.remove("light")
//     : body.classList.add("light")
