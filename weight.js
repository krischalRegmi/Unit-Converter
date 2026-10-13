function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;
    let inputkg;
    let result;

    // Convert input to kg
    if (inputType === "kg") {
        inputkg = input;
    } else if (inputType === "g") {
        inputkg = input / 1000;
    } else if (inputType === "lb") {
        inputkg = input * 0.453592;
    } else if (inputType === "oz") {
        inputkg = input * 0.0283495;
    } else if (inputType === "ust") {
        inputkg = input * 907.185;
    } else if (inputType === "ukst") {
        inputkg = input * 1016.05;
    }

    // Convert kg to output unit
    if (outputType === "kg") {
        result = inputkg;
    } else if (outputType === "g") {
        result = inputkg * 1000;
    } else if (outputType === "lb") {
        result = inputkg / 0.453592;
    } else if (outputType === "oz") {
        result = inputkg / 0.0283495;
    } else if (outputType === "ust") {
        result = inputkg / 907.185;
    } else if (outputType === "ukst") {
        result = inputkg / 1016.05;
    }

    document.getElementById("outputUnit").value = result;
}