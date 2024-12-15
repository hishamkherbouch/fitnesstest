// Function to calculate Total Daily Energy Expenditure (TDEE)
function calculateTDEE(height, weight, gender, workoutFrequency) {
    const MALE_CONSTANT = 5;
    const FEMALE_CONSTANT = -161;
    const ACTIVITY_LEVEL = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9
    };

    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender.toLowerCase() === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * 25) + MALE_CONSTANT;
    } else if (gender.toLowerCase() === 'female') {
        bmr = (10 * weight) + (6.25 * height) - (5 * 25) + FEMALE_CONSTANT;
    } else {
        return "Invalid gender. Please enter 'male' or 'female'.";
    }

    return bmr * ACTIVITY_LEVEL[workoutFrequency];
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get user input
    let height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('heightUnit').value;
    let weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const gender = document.getElementById('gender').value;
    const workoutFrequency = document.getElementById('workoutFrequency').value;

    // Convert height and weight to metric
    if (heightUnit === 'inches') height *= 2.54;
    if (weightUnit === 'lbs') weight *= 0.453592;

    const tdee = calculateTDEE(height, weight, gender, workoutFrequency);

    // Calculate recommended macros
    const proteinCalories = tdee * 0.3; // 30% of calories from protein
    const fatCalories = tdee * 0.25;    // 25% of calories from fat
    const carbsCalories = tdee * 0.45;  // 45% of calories from carbs

    const proteinGrams = proteinCalories / 4; // 4 calories per gram of protein
    const fatGrams = fatCalories / 9;         // 9 calories per gram of fat
    const carbsGrams = carbsCalories / 4;     // 4 calories per gram of carbs

    // Display TDEE and macronutrient breakdown to the user
    document.getElementById('result').innerHTML = `
        <p>Your Total Daily Energy Expenditure (TDEE) is: <strong>${tdee.toFixed(2)}</strong> calories per day.</p>
        <p>Recommended Macronutrient Breakdown:</p>
        <ul>
            <li><strong>Protein:</strong> ${proteinGrams.toFixed(2)} grams (${proteinCalories.toFixed(2)} calories)</li>
            <li><strong>Fat:</strong> ${fatGrams.toFixed(2)} grams (${fatCalories.toFixed(2)} calories)</li>
            <li><strong>Carbohydrates:</strong> ${carbsGrams.toFixed(2)} grams (${carbsCalories.toFixed(2)} calories)</li>
        </ul>
    `;
}

// Event listener for form submission
document.getElementById('calorieForm').addEventListener('submit', handleFormSubmission);
