function calculateAreaOfRectangle(){
    //get rectangle base
    const rectangleBaseInput = document.getElementById('triangle-base');
    const rectangleBaseText = rectangleBaseInput.value;
    const rectangleBaseValue = parseFloat(rectangleBaseText);


    //get triangle height
    const rectangleHeightInput = document.getElementById('triangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const rectangleHeightValue = parseFloat(rectangleHeightText);

    //calculate
    const area = 0.5 * rectangleBaseValue * rectangleHeightValue;

    //display triangle-area
    const rectangleAreaSpan = document.getElementById('triangle-area');
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