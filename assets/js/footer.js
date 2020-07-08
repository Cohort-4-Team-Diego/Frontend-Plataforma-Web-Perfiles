function review(){
    const boton = document.querySelector("#btn_aparece")
    const modal = document.querySelector(".container_modal")

    if(modal.classList.contains("aparece")){
        modal.classList.remove("aparece")
    }else{
        modal.classList.add("aparece") 
    }

}