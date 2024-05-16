function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;

    let result;

    // Conversion logic
    if (inputType === "t" && outputType === "ukt") {
        result = input / 1.016;
    } else if (inputType === "ukt" && outputType === "t") {
        result = input * 1.016;
    } else if (inputType === "t" && outputType === "ust") {
        result = input * 1.102;
    } else if (inputType === "ust" && outputType === "t") {
        result = input / 1.102;
    } else if (inputType === "t" && outputType === "lb") {
        result = input * 2204.62;
    } else if (inputType === "lb" && outputType === "t") {
        result = input / 2204.62;
    } else if (inputType === "t" && outputType === "oz") {
        result = input * 35273.96;
    } else if (inputType === "oz" && outputType === "t") {
        result = input / 35273.96;
    } else if (inputType === "t" && outputType === "kg") {
        result = input * 1000;
    } else if (inputType === "kg" && outputType === "t") {
        result = input / 1000;
    } else if (inputType === "t" && outputType === "g") {
        result = input * 1000000;
    } else if (inputType === "g" && outputType === "t") {
        result = input / 1000000;
    } else if (inputType === "ukt" && outputType === "ust") {
        result = input * 1.12;
    } else if (inputType === "ust" && outputType === "ukt") {
        result = input / 1.12;
    } else if (inputType === "ukt" && outputType === "lb") {
        result = input * 2240;
    } else if (inputType === "lb" && outputType === "ukt") {
        result = input / 2240;
    } else if (inputType === "ukt" && outputType === "oz") {
        result = input * 35840;
    } else if (inputType === "oz" && outputType === "ukt") {
        result = input / 35840;
    } else if (inputType === "ukt" && outputType === "kg") {
        result = input * 1016.05;
    } else if (inputType === "kg" && outputType === "ukt") {
        result = input / 1016.05;
    } else if (inputType === "ukt" && outputType === "g") {
        result = input * 1016046.9;
    } else if (inputType === "g" && outputType === "ukt") {
        result = input / 1016046.9;
    } else if (inputType === "ust" && outputType === "lb") {
        result = input * 2000;
    } else if (inputType === "lb" && outputType === "ust") {
        result = input / 2000;
    } else if (inputType === "ust" && outputType === "oz") {
        result = input * 32000;
    } else if (inputType === "oz" && outputType === "ust") {
        result = input / 32000;
    } else if (inputType === "ust" && outputType === "kg") {
        result = input * 907.18;
    } else if (inputType === "kg" && outputType === "ust") {
        result = input / 907.18;
    } else if (inputType === "ust" && outputType === "g") {
        result = input * 907184.74;
    } else if (inputType === "g" && outputType === "ust") {
        result = input / 907184.74;
    } else if (inputType === "lb" && outputType === "oz") {
        result = input * 16;
    } else if (inputType === "oz" && outputType === "lb") {
        result = input / 16;
    } else if (inputType === "lb" && outputType === "kg") {
        result = input / 2.20462;
    } else if (inputType === "kg" && outputType === "lb") {
        result = input * 2.20462;
    } else if (inputType === "lb" && outputType === "g") {
        result = input * 453.59;
    } else if (inputType === "g" && outputType === "lb") {
        result = input / 453.59;
    } else if (inputType === "oz" && outputType === "kg") {
        result = input / 35.274;
    } else if (inputType === "kg" && outputType === "oz") {
        result = input * 35.274;
    } else if (inputType === "oz" && outputType === "g") {
        result = input * 28.35;
    } else if (inputType === "g" && outputType === "oz") {
        result = input / 28.35;
    } else if (inputType === "kg" && outputType === "g") {
        result = input * 1000;
    } else if (inputType === "g" && outputType === "kg") {
        result = input / 1000;
    } else if (inputType === outputType) {
        result = input;
    }


    document.getElementById("outputUnit").value = result;
}