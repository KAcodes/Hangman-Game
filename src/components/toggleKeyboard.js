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
        //console.log(alphaButtons[i].style.visibility)
         if (alphaButtons[i].style.visibility !== 'visible') { alphaButtons[i].style.visibility = 'visible';
        } 
    }
}