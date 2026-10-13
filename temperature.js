function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;

    let result;

    // validate input and unit types
    if (isNaN(input) || input < 0) {
        document.getElementById("outputUnit").value ="Please enter a valid non-negative number for the input.";
        console.log(result);
        return;
    } else if (inputType === "Select Unit" || outputType === "Select Unit") {
        document.getElementById("outputUnit").value = "Please select both input and output unit types.";
        console.log(result);
        
        return;
    }

    // Conversion logic
    if (inputType === "c" && outputType === "f") {
        result = (input * 9 / 5) + 32;
    }
    else if (inputType === "f" && outputType === "c") {
        result = (input - 32) * 5 / 9;
    }
    else if (inputType === "c" && outputType === "k") {
        result = input + 273.15;
    }
    else if (inputType === "k" && outputType === "c") {
        result = input - 273.15;
    }
    else if (inputType === "f" && outputType === "k") {
        result = (input - 32) * 5 / 9 + 273.15;
    }
    else if (inputType === "k" && outputType === "f") {
        result = (input - 273.15) * 9 / 5 + 32;
    }
    else if (inputType === outputType) {
        result = input;
    }

    document.getElementById("outputUnit").value = result;
}