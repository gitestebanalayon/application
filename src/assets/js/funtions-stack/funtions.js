/*--FUNTIONS-STACK-NAV-START--*/
function addition(a, b) {
    let result = a + b;
    return result;
}
function subtraction(a, b) {
    let result = a - b;
    return result;
}
function display_block(height) {
    if (height.clientHeight == 0) {
        height.style.height = `${height.scrollHeight}px`;
    }else{
        const result = subtraction(height.clientHeight, height.clientHeight);
        height.style.height = `${result}px`;
    }
}
function display_block_nivel1(height_a, height_b) {
    if (height_a.clientHeight == 0) {
        height_a.style.height = `${height_a.scrollHeight}px`;
        
        const result = addition(height_a.scrollHeight, height_b.clientHeight);
        height_b.style.height = `${result}px`;
    }else{
        height_a.style.height = `${0}px`;

        const result = subtraction(height_b.clientHeight, height_a.clientHeight);
        height_b.style.height = `${result}px`;
    }
}


/*--FUNTIONS-STACK-NAV-END--*/

export {
    /*--FUNTIONS-STACK-NAV-START--*/
    display_block,
    display_block_nivel1
    /*--FUNTIONS-STACK-NAV-END--*/
};