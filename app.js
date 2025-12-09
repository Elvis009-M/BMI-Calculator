function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");

    if (!weight || !height || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = `<p class="category" style="color:red;">Please enter valid values</p>`;
    return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(1);
    let category = '';

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    resultDiv.innerHTML = `
    <p class="bmi-value">Your BMI: ${bmi}</p>
    <p class="category">Category:${category}</p>
    `;
}

function resetForm() {
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    document.getElementById("result").innerHTML = '';
}