function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;

    let result;

    // Conversion logic
    if (inputType === "bigha" && outputType === "kattha") {
        result = input * 20;
    } else if (inputType === "kattha" && outputType === "bigha") {
        result = input / 20;
    } else if (inputType === "bigha" && outputType === "dhur") {
        result = input * 400;
    } else if (inputType === "dhur" && outputType === "bigha") {
        result = input / 400;
    } else if (inputType === "bigha" && outputType === "ropani") {
        result = input * 13.31;
    } else if (inputType === "ropani" && outputType === "bigha") {
        result = input / 13.31;
    } else if (inputType === "bigha" && outputType === "aana") {
        result = input * 213;
    } else if (inputType === "aana" && outputType === "bigha") {
        result = input / 213;
    } else if (inputType === "bigha" && outputType === "paisa") {
        result = input * 852;
    } else if (inputType === "paisa" && outputType === "bigha") {
        result = input / 852;
    } else if (inputType === "bigha" && outputType === "dam") {
        result = input * 3408.03;
    } else if (inputType === "dam" && outputType === "bigha") {
        result = input / 3408.03;
    } else if (inputType === "bigha" && outputType === "sq.feet") {
        result = input * 72900;
    } else if (inputType === "sq.feet" && outputType === "bigha") {
        result = input / 72900;
    } else if (inputType === "kattha" && outputType === "dhur") {
        result = input * 20;
    } else if (inputType === "dhur" && outputType === "kattha") {
        result = input / 20;
    } else if (inputType === "kattha" && outputType === "ropani") {
        result = input / 1.5;
    } else if (inputType === "ropani" && outputType === "kattha") {
        result = input * 1.5;
    } else if (inputType === "kattha" && outputType === "aana") {
        result = input * 10.65;
    } else if (inputType === "aana" && outputType === "kattha") {
        result = input / 10.65;
    } else if (inputType === "kattha" && outputType === "paisa") {
        result = input * 42.6;
    } else if (inputType === "paisa" && outputType === "kattha") {
        result = input / 42.6;
    } else if (inputType === "kattha" && outputType === "dam") {
        result = input * 170.4;
    } else if (inputType === "dam" && outputType === "kattha") {
        result = input / 170.4;
    } else if (inputType === "kattha" && outputType === "sq.feet") {
        result = input * 3645;
    } else if (inputType === "sq.feet" && outputType === "kattha") {
        result = input / 3645;
    } else if (inputType === "dhur" && outputType === "ropani") {
        result = input / 30.04;
    } else if (inputType === "ropani" && outputType === "dhur") {
        result = input * 30.04;
    } else if (inputType === "dhur" && outputType === "aana") {
        result = input / 1.88;
    } else if (inputType === "aana" && outputType === "dhur") {
        result = input * 1.88;
    } else if (inputType === "dhur" && outputType === "paisa") {
        result = input * 2.13;
    } else if (inputType === "paisa" && outputType === "dhur") {
        result = input / 2.13;
    } else if (inputType === "dhur" && outputType === "dam") {
        result = input * 8.52;
    } else if (inputType === "dam" && outputType === "dhur") {
        result = input / 8.52;
    } else if (inputType === "dhur" && outputType === "sq.feet") {
        result = input * 182.25;
    } else if (inputType === "sq.feet" && outputType === "dhur") {
        result = input / 182.25;
    } else if (inputType === "ropani" && outputType === "aana") {
        result = input * 16;
    } else if (inputType === "aana" && outputType === "ropani") {
        result = input / 16;
    } else if (inputType === "ropani" && outputType === "paisa") {
        result = input * 64;
    } else if (inputType === "paisa" && outputType === "ropani") {
        result = input / 64;
    } else if (inputType === "ropani" && outputType === "dam") {
        result = input * 256;
    } else if (inputType === "dam" && outputType === "ropani") {
        result = input / 256;
    } else if (inputType === "ropani" && outputType === "sq.feet") {
        result = input * 5476;
    } else if (inputType === "sq.feet" && outputType === "ropani") {
        result = input / 5476;
    } else if (inputType === "aana" && outputType === "paisa") {
        result = input * 4;
    } else if (inputType === "paisa" && outputType === "aana") {
        result = input / 4;
    } else if (inputType === "aana" && outputType === "dam") {
        result = input * 16;
    } else if (inputType === "dam" && outputType === "aana") {
        result = input / 16;
    } else if (inputType === "aana" && outputType === "sq.feet") {
        result = input * 342.25;
    } else if (inputType === "sq.feet" && outputType === "aana") {
        result = input / 342.25;
    } else if (inputType === "paisa" && outputType === "dam") {
        result = input * 4;
    } else if (inputType === "dam" && outputType === "paisa") {
        result = input / 4;
    } else if (inputType === "paisa" && outputType === "sq.feet") {
        result = input * 85.56;
    } else if (inputType === "sq.feet" && outputType === "paisa") {
        result = input / 85.56;
    } else if (inputType === "dam" && outputType === "sq.feet") {
        result = input * 21.39;
    } else if (inputType === "sq.feet" && outputType === "dam") {
        result = input / 21.39;
    } else if (inputType === outputType) {
        result = input;
    }

    document.getElementById("outputUnit").value = result;
}