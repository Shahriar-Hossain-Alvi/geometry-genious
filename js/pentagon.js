function calculateAreaOfPentagon(){
    //get pentagon b 
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBInputText = pentagonBInput.value;
    const pentagonBInputValue = parseFloat(pentagonBInputText);

    //get pentagon p
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPInputText = pentagonPInput.value;
    const pentagonPInputValue = parseFloat(pentagonPInputText);

    //calculate the area 
    const area = 0.5 * pentagonBInputValue * pentagonPInputValue;

    //display the output
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
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