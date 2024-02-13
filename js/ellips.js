function calculateAreaOfEllipse(){
    //get ellipse a
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAInputText = ellipseAInput.value;
    const ellipseAInputValue = parseFloat(ellipseAInputText);

    //get ellipse b
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBInputText = ellipseBInput.value;
    const ellipseBInputValue = parseFloat(ellipseBInputText);

    //calculate the area 
    const area = 3.1416 * ellipseAInputValue * ellipseBInputValue;

    //display the output
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
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