function convert() {
  const input = parseFloat(document.getElementById("inputUnit").value);
  const inputType = document.getElementById("unitType").value;
  const outputType = document.getElementById("outputUnitType").value;
  let inputkg;
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