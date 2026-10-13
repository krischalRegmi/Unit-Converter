function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;
    let inputMetres;
    let result;

    // Convert input to metres
    if (inputType === "m")
        inputMetres = input;
    else if (inputType === "km")
        inputMetres = input * 1000;
    else if (inputType === "cm")
        inputMetres = input / 100;
    else if (inputType === "mm")
        inputMetres = input / 1000;
    else if (inputType === "in")
        inputMetres = input / 39.37;
    else if (inputType === "ft")
        inputMetres = input / 3.281;
    else if (inputType === "yd")
        inputMetres = input * 0.9144;
    else if (inputType === "mi")
        inputMetres = input * 1609.34;

    // Convert metres to output unit
    if (outputType === "m")
        result = inputMetres;
    else if (outputType === "km")
        result = inputMetres / 1000;
    else if (outputType === "cm")
        result = inputMetres * 100;
    else if (outputType === "mm")
        result = inputMetres * 1000;
    else if (outputType === "in")
        result = inputMetres * 39.37;
    else if (outputType === "ft")
        result = inputMetres * 3.281;
    else if (outputType === "yd")
        result = inputMetres / 0.9144;
    else if (outputType === "mi")
        result = inputMetres / 1609.34;

    document.getElementById("outputUnit").value = result;
}