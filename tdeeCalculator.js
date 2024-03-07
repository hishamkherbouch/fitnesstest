// Function to calculate Total Daily Energy Expenditure (TDEE)
function calculateTDEE(height, weight, gender, workoutFrequency) {
    // Constants for TDEE calculation
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
        bmr = (MALE_CONSTANT * weight) + (6.25 * height) - (5 * 25) + 5;
    } else if (gender.toLowerCase() === 'female') {
        bmr = (FEMALE_CONSTANT * weight) + (6.25 * height) - (5 * 25) - 161;
    } else {
        return "Invalid gender. Please enter 'male' or 'female'.";
    }

    // Calculate TDEE based on activity level
    let tdee = bmr * ACTIVITY_LEVEL[workoutFrequency];

    return tdee;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get user input values
    let height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('heightUnit').value;
    let weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const gender = document.getElementById('gender').value;
    const workoutFrequency = document.getElementById('workoutFrequency').value;

    // Convert height and weight to metric if in imperial units
    if (heightUnit === 'inches') {
        // Convert inches to centimeters
        height *= 2.54;
    }
    if (weightUnit === 'lbs') {
        // Convert pounds to kilograms
        weight *= 0.453592;
    }

    // Calculate TDEE
    const tdee = calculateTDEE(height, weight, gender, workoutFrequency);

    // Calculate recommended macronutrient breakdown
    const protein = weight * 2.2; // 2.2 grams of protein per kg of body weight
    const fat = tdee * 0.25; // 25% of total calories from fat
    const carbs = (tdee - (protein * 4) - (fat * 9)) / 4; // Remaining calories from carbs

    // Display TDEE and macronutrient breakdown to the user
    document.getElementById('result').textContent = "Your Total Daily Energy Expenditure (TDEE) is: " + tdee.toFixed(2) + " calories per day.";

    // Create a pie chart
    createPieChart(protein, fat, carbs);
}

// Function to create a pie chart
function createPieChart() {
    const proteinPercent = 30;
    const fatPercent = 25;
    const carbsPercent = 45;

    var ctx = document.getElementById('macronutrientChart').getContext('2d');
    var macronutrientChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Protein', 'Fat', 'Carbohydrates'],
            datasets: [{
                label: 'Macronutrient Breakdown',
                data: [proteinPercent, fatPercent, carbsPercent],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Recommended Macronutrient Breakdown'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed + '%';
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Event listener for form submission
document.getElementById('calorieForm').addEventListener('submit', handleFormSubmission);
