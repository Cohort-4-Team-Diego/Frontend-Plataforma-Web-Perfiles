


function review(a) {
  
  const boton = document.querySelector("#btn_aparece")
  const modal = document.querySelector(".container_modal")
  const modalPerfil = document.querySelector(".container_modal--perfil")
  
  if (a.classList.contains("aparece")) {
    a.classList.remove("aparece")
  } else {
    a.classList.add("aparece")
    console.log('estoy en else')
  }




}