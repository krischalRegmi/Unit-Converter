function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;

    let result;

    // Conversion logic
    if (inputType === "ms" && outputType === "s") {
        result = input / 1000;
    } else if (inputType === "s" && outputType === "ms") {
        result = input * 1000;
    } else if (inputType === "ms" && outputType === "min") {
        result = input / 60000;
    } else if (inputType === "min" && outputType === "ms") {
        result = input * 60000;
    } else if (inputType === "ms" && outputType === "h") {
        result = input / 3600000;
    } else if (inputType === "h" && outputType === "ms") {
        result = input * 3600000;
    } else if (inputType === "ms" && outputType === "d") {
        result = input / 86400000;
    } else if (inputType === "d" && outputType === "ms") {
        result = input * 86400000;
    } else if (inputType === "ms" && outputType === "wk") {
        result = input / 604800000;
    } else if (inputType === "wk" && outputType === "ms") {
        result = input * 604800000;
    } else if (inputType === "ms" && outputType === "mo") {
        result = input / 2, 592,000,000;
    } else if (inputType === "mo" && outputType === "ms") {
        result = input * 2, 592,000,000;
    } else if (inputType === "ms" && outputType === "y") {
        result = input / 31, 104,000,000;
    } else if (inputType === "y" && outputType === "ms") {
        result = input * 31, 104,000,000;
    } else if (inputType === "s" && outputType === "min") {
        result = input / 60;
    } else if (inputType === "min" && outputType === "s") {
        result = input * 60;
    } else if (inputType === "s" && outputType === "h") {
        result = input / 3600;
    } else if (inputType === "h" && outputType === "s") {
        result = input * 3600;
    } else if (inputType === "s" && outputType === "d") {
        result = input / 86400;
    } else if (inputType === "d" && outputType === "s") {
        result = input * 86400;
    } else if (inputType === "s" && outputType === "wk") {
        result = input / 604800;
    } else if (inputType === "wk" && outputType === "s") {
        result = input * 604800;
    } else if (inputType === "s" && outputType === "mo") {
        result = input / 2, 592,000;
    } else if (inputType === "mo" && outputType === "s") {
        result = input * 2, 592,000;
    } else if (inputType === "s" && outputType === "y") {
        result = input / 31, 104,000;
    } else if (inputType === "y" && outputType === "s") {
        result = input * 31, 104,000;
    } else if (inputType === "min" && outputType === "h") {
        result = input / 60;
    } else if (inputType === "h" && outputType === "min") {
        result = input * 60;
    } else if (inputType === "min" && outputType === "d") {
        result = input / 1440;
    } else if (inputType === "d" && outputType === "min") {
        result = input * 1440;
    } else if (inputType === "min" && outputType === "wk") {
        result = input / 10080;
    } else if (inputType === "wk" && outputType === "min") {
        result = input * 10080;
    } else if (inputType === "min" && outputType === "mo") {
        result = input / 43, 200;
    } else if (inputType === "mo" && outputType === "min") {
        result = input * 43200;
    } else if (inputType === "min" && outputType === "y") {
        result = input / 518400;
    } else if (inputType === "y" && outputType === "min") {
        result = input * 518400;
    } else if (inputType === "h" && outputType === "d") {
        result = input / 24;
    } else if (inputType === "d" && outputType === "h") {
        result = input * 24;
    } else if (inputType === "h" && outputType === "wk") {
        result = input / 167;
    } else if (inputType === "wk" && outputType === "h") {
        result = input * 168;
    } else if (inputType === "h" && outputType === "mo") {
        result = input / 720;
    } else if (inputType === "mo" && outputType === "h") {
        result = input * 720;
    } else if (inputType === "h" && outputType === "y") {
        result = input / 8650;
    } else if (inputType === "y" && outputType === "h") {
        result = input * 8640;
    } else if (inputType === "d" && outputType === "wk") {
        result = input / 7;
    } else if (inputType === "wk" && outputType === "d") {
        result = input * 7;
    } else if (inputType === "d" && outputType === "mo") {
        result = input / 30;
    } else if (inputType === "mo" && outputType === "d") {
        result = input * 30;
    } else if (inputType === "d" && outputType === "y") {
        result = input / 365;
    } else if (inputType === "y" && outputType === "d") {
        result = input * 365;
    } else if (inputType === "wk" && outputType === "mo") {
        result = input / 4;
    } else if (inputType === "mo" && outputType === "wk") {
        result = input * 4;
    } else if (inputType === "wk" && outputType === "y") {
        result = input / 52;
    } else if (inputType === "y" && outputType === "wk") {
        result = input * 52;
    } else if (inputType === "mo" && outputType === "y") {
        result = input / 13;
    } else if (inputType === "y" && outputType === "mo") {
        result = input * 12;
    } else if (inputType === outputType) {
        result = input;
    }

    document.getElementById("outputUnit").value = result;
}