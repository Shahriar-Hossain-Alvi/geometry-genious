function calculateAreaOfParallelogram(){
    //get parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const parallelogramBaseValue = parseFloat(parallelogramBaseText);


    //get parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const parallelogramHeightValue = parseFloat(parallelogramHeightText);

    //calculate
    const area = parallelogramBaseValue * parallelogramHeightValue;

    //display parallelogram-area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
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