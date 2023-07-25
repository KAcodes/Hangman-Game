// both functions change visibility of buttons depending if they are shown or currently hidden
export const hideButtons = () => {

    let alphaButtons = document.querySelectorAll('.alphabetBtn')
    for (let i = 0; i < alphaButtons.length; i++) {
         if (alphaButtons[i].style.visibility !== 'hidden') { alphaButtons[i].style.visibility = 'hidden';
        } 
    }
} 

export const showButtons = () => {
    let alphaButtons = document.querySelectorAll('.alphabetBtn')
    for (let i = 0; i < alphaButtons.length; i++) {
         if (alphaButtons[i].style.visibility !== 'visible') { alphaButtons[i].style.visibility = 'visible';
        } 
    }
}

export const disableButtons = () => {
    const buttons = document.getElementsByClassName("alphabetBtn");
      for(let i=0;i < buttons.length; i++){
        buttons[i].disabled = true
     }
}

export const enableButtons = () => {
    const buttons = document.getElementsByClassName("alphabetBtn");
      for(let i=0;i < buttons.length; i++){
        buttons[i].disabled = false
     }
}