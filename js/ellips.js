function calculateAreaOfEllipse(){
    const majorRadius =getInputValueById('ellipse-a');
    const minorRadius = getInputValueById('ellipse-b');
    const area = 3.1416 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}