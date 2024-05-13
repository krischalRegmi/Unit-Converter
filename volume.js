function convert() {
    const input = parseFloat(document.getElementById("inputUnit").value);
    const inputType = document.getElementById("unitType").value;
    const outputType = document.getElementById("outputUnitType").value;

    let result;

    // Conversion logic
    if (inputType === "ukgal" && outputType === "usgal") {
        result = input *1.2;
    } else if (inputType === "usgal" && outputType === "ukgal") {
        result = input /1.2;
    } else if (inputType === "ukgal" && outputType === "l") {
        result = input *4.55;
    } else if (inputType === "l" && outputType === "ukgal") {
        result = input/4.55 ;
    } else if (inputType === "ukgal" && outputType === "ml") {
        result = input*4546.09 ;
    } else if (inputType === "ml" && outputType === "ukgal") {
        result = input /4546.09;
    } else if (inputType === "ukgal" && outputType === "m3") {
        result = input /219.97;
    } else if (inputType === "m3" && outputType === "ukgal") {
        result = input *219.97;
    } else if (inputType === "ukgal" && outputType === "in3") {
        result = input *277.42;
    } else if (inputType === "in3" && outputType === "ukgal") {
        result = input /277.42;
    } else if (inputType === "ukgal" && outputType === "ft3") {
        result = input/6.29 ;
    } else if (inputType === "ft3" && outputType === "ukgal") {
        result = input *6.29;
    } else if (inputType === "usgal" && outputType === "l") {
        result = input*3.79 ;
    } else if (inputType === "l" && outputType === "usgal") {
        result = input/3.79 ;
    } else if (inputType === "usgal" && outputType === "ml") {
        result = input*3785.41 ;
    } else if (inputType === "ml" && outputType === "usgal") {
        result = input/3785.41 ;
    } else if (inputType === "usgal" && outputType === "m3") {
        result = input/264.17 ;
    } else if (inputType === "m3" && outputType === "usgal") {
        result = input *264.17;
    } else if (inputType === "usgal" && outputType === "in3") {
        result = input*231 ;
    } else if (inputType === "in3" && outputType === "usgal") {
        result = input /231;
    } else if (inputType === "usgal" && outputType === "ft3") {
        result = input/7.48 ;
    } else if (inputType === "ft3" && outputType === "usgal") {
        result = input *7.48;
    } else if (inputType === "l" && outputType === "ml") {
        result = input *1000;
    } else if (inputType === "ml" && outputType === "l") {
        result = input/1000 ;
    } else if (inputType === "l" && outputType === "m3") {
        result = input /1000;
    } else if (inputType === "m3" && outputType === "l") {
        result = input*1000 ;
    } else if (inputType === "l" && outputType === "in3") {
        result = input *61.02;
    } else if (inputType === "in3" && outputType === "l") {
        result = input/61.02 ;
    } else if (inputType === "l" && outputType === "ft3") {
        result = input /28.32;
    } else if (inputType === "ft3" && outputType === "l") {
        result = input*28.32 ;
    } else if (inputType === "ml" && outputType === "m3") {
        result = input /1000000;
    } else if (inputType === "m3" && outputType === "ml") {
        result = input*1000000 ;
    } else if (inputType === "ml" && outputType === "in3") {
        result = input /16.39;
    } else if (inputType === "in3" && outputType === "ml") {
        result = input *16.39;
    } else if (inputType === "ml" && outputType === "ft3") {
        result = input/28316.85 ;
    } else if (inputType === "ft3" && outputType === "ml") {
        result = input*28316.85 ;
    } else if (inputType === "m3" && outputType === "in3") {
        result = input *61023.75;
    } else if (inputType === "in3" && outputType === "m3") {
        result = input/61023.75 ;
    } else if (inputType === "m3" && outputType === "ft3") {
        result = input *35.31;
    } else if (inputType === "ft3" && outputType === "m3") {
        result = input/35.31 ;
    } else if (inputType === "in3" && outputType === "ft3") {
        result = input /1728;
    } else if (inputType === "ft3" && outputType === "in3") {
        result = input *1728;
    } else if (inputType === outputType) {
        result = input;
    }

    document.getElementById("outputUnit").value = result;
}