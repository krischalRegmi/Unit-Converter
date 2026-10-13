function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;
    let inputHours;
    let result;

    //Validate input and unit types
    if (isNaN(input) || input < 0) {
        document.getElementById("outputUnit").value ="Please enter a valid non-negative number for the input.";
        console.log(result);
        return;
    } else if (inputType === "Select Unit" || outputType === "Select Unit") {
        document.getElementById("outputUnit").value = "Please select both input and output unit types.";
        console.log(result);
        
        return;
    }

    // Convert input to hours
    if (inputType === "hours") {
        inputHours = input;
    } else if (inputType === "minutes") {
        inputHours = input / 60;
    } else if (inputType === "seconds") {
        inputHours = input / 3600;
    } else if (inputType === "days") {
        inputHours = input * 24;
    } else if (inputType === "weeks") {
        inputHours = input * 168;
    } else if (inputType === "months") {
        inputHours = input * 730.001; 
    } else if (inputType === "years") {
        inputHours = input * 8760;
    }

    // Convert hours to output unit
    if (outputType === "hours") {
        result = inputHours;
    } else if (outputType === "minutes") {
        result = inputHours * 60;
    } else if (outputType === "seconds") {
        result = inputHours * 3600;
    } else if (outputType === "days") {
        result = inputHours / 24;
    } else if (outputType === "weeks") {
        result = inputHours / 168;
    } else if (outputType === "months") {
        result = inputHours / 730.001;
    } else if (outputType === "years") {
        result = inputHours / 8760;
    }

    document.getElementById("outputUnit").value = result;
}