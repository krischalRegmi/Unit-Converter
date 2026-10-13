function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;
    let inputSquareFeet;
    let result;

    // Convert input to square feet
    if (inputType === "bigha") {
        inputSquareFeet = input * 72900;
    } else if (inputType === "kattha") {
        inputSquareFeet = input * 3645;
    } else if (inputType === "dhur") {
        inputSquareFeet = input * 182.25;
    } else if (inputType === "ropani") {
        inputSquareFeet = input * 11.39;
    } else if (inputType === "aana") {
        inputSquareFeet = input * 182.25;
    } else if (inputType === "paisa") {
        inputSquareFeet = input * 45.56;
    } else if (inputType === "dam") {
        inputSquareFeet = input * 1822.5;
    } else if (inputType === "sq.feet") {
        inputSquareFeet = input;
    } else if (inputType === "sq.meter") {
        inputSquareFeet = input * 10.764;
    } else if (inputType === "sq.km") {
        inputSquareFeet = input * 10763910.4;
    } else if (inputType === "sq.mile") {
        inputSquareFeet = input * 27878400;
    } else if (inputType === "acre") {
        inputSquareFeet = input * 43560;
    } else if (inputType === "hectare") {
        inputSquareFeet = input * 107639.104;
    } else if (inputType === "sq.yard") {
        inputSquareFeet = input * 9;
    }

    // Convert square feet to output unit
    if (outputType === "bigha") {
        result = inputSquareFeet / 72900;
    } else if (outputType === "kattha") {
        result = inputSquareFeet / 3645;
    } else if (outputType === "dhur") {
        result = inputSquareFeet / 182.25;
    } else if (outputType === "ropani") {
        result = inputSquareFeet / 11.39;
    } else if (outputType === "aana") {
        result = inputSquareFeet / 182.25;
    } else if (outputType === "paisa") {
        result = inputSquareFeet / 45.56;
    } else if (outputType === "dam") {
        result = inputSquareFeet / 1822.5;
    } else if (outputType === "sq.feet") {
        result = inputSquareFeet;
    } else if (outputType === "sq.meter") {
        result = inputSquareFeet / 10.764;
    } else if (outputType === "sq.km") {
        result = inputSquareFeet / 10763910.4;
    } else if (outputType === "sq.mile") {
        result = inputSquareFeet / 27878400;
    } else if (outputType === "acre") {
        result = inputSquareFeet / 43560;
    } else if (outputType === "hectare") {
        result = inputSquareFeet / 107639.104;
    } else if (outputType === "sq.yard") {
        result = inputSquareFeet / 9;
    }

    document.getElementById("outputUnit").value = result;
}