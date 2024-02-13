function calculateAreaOfRhombus(){
    //get rhombus Base1 
    const rhombusBase1Input = document.getElementById('rhombus-base1');
    const rhombusBase1InputText = rhombusBase1Input.value;
    const rhombusBase1InputValue = parseFloat(rhombusBase1InputText);

    //get rhombus Base2
    const rhombusBase2Input = document.getElementById('rhombus-base2');
    const rhombusBase2InputText = rhombusBase2Input.value;
    const rhombusBase2InputValue = parseFloat(rhombusBase2InputText);

    //calculate the area 
    const area = 0.5 * rhombusBase1InputValue * rhombusBase2InputValue;

    //display the output
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}


/**
 * 1. get base value
 * 2. added an ID
 * 3. use getElementById to access the input field
 * 4. get value from the input field (value is string)
 * 5. convert the value to a number by using pareFloat
 * 6. calculate the area
 * 7. output the result by using innerText
 */