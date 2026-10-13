function convert() {
  const input = parseFloat(document.getElementById("inputUnit").value);
  const inputType = document.getElementById("unitType").value;
  const outputType = document.getElementById("outputUnitType").value;
  let inputLitres;
  let result;

  //Validate input and unit types
  if (isNaN(input) || input < 0) {
    document.getElementById("outputUnit").value =
      "Please enter a valid non-negative number for the input.";
    console.log(result);
    return;
  } else if (inputType === "Select Unit" || outputType === "Select Unit") {
    document.getElementById("outputUnit").value =
      "Please select both input and output unit types.";
    console.log(result);

    return;
  }

  // Convert input to litres
  if (inputType === "ukgal") inputLitres = input * 4.55;
  else if (inputType === "usgal") inputLitres = input * 3.79;
  else if (inputType === "l") inputLitres = input;
  else if (inputType === "ml") inputLitres = input / 1000;
  else if (inputType === "m3") inputLitres = input * 1000;
  else if (inputType === "in3") inputLitres = input / 61.02;
  else if (inputType === "ft3") inputLitres = input * 28.32;

  // Convert litres to output unit
  if (outputType === "ukgal") result = inputLitres / 4.55;
  else if (outputType === "usgal") result = inputLitres / 3.79;
  else if (outputType === "l") result = inputLitres;
  else if (outputType === "ml") result = inputLitres * 1000;
  else if (outputType === "m3") result = inputLitres / 1000;
  else if (outputType === "in3") result = inputLitres * 61.02;
  else if (outputType === "ft3") result = inputLitres / 28.32;

  //Format and display the result
  result = result.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  document.getElementById("outputUnit").value = result;
}

//swap function to swap the input and output unit types
swap = () => {
  const inputUnitElement = document.getElementById("unitType");
  const outputUnitElement = document.getElementById("outputUnitType");
  const temp = inputUnitElement.value;
  inputUnitElement.value = outputUnitElement.value;
  outputUnitElement.value = temp;
  convert();
}