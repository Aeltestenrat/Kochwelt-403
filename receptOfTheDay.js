function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}


function equalIngredients2() {
    const portions2 = parseFloat(document.getElementById('input').value);
    
    const ingredientNeeded2 = document.querySelectorAll('.inputNeededGrey, .inputNeededWhite');
    
    ingredientNeeded2.forEach(input => {
    const originalValue = parseFloat(input.defaultValue);
    input.value = (originalValue * portions2).toFixed(1);
    });
    }
    
    function equalIngredients() {
        const portions = parseFloat(document.getElementById('portionSelect').value);
    
        
        const ingredientNeeded = document.querySelectorAll('.inputNeededGrey, .inputNeededWhite');
    
    ingredientNeeded.forEach(input => {
    const originalValue = parseFloat(input.defaultValue);
    input.value = (originalValue * portions).toFixed(1);
    });
    }
    