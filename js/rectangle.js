function calculateAreaOfRectangle(){
    //get rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidthValue = parseFloat(rectangleWidthText);


    //get rectangle height
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLengthValue = parseFloat(rectangleLengthText);

    //calculate
    const area = rectangleWidthValue * rectangleLengthValue;

    //display rectangle-area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
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