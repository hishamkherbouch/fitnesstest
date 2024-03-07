// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the dropdown menu
    document.getElementById('muscleDropdown').addEventListener('change', function() {
        // Get the selected body part
        var selectedMuscle = this.value;
        // Check if a body part is selected
        if (selectedMuscle !== 'none') {
            // Make a request to the API using the selected body part
            fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + selectedMuscle, {
                method: 'GET',
                headers: { 'X-Api-Key': 'vhnmXjyHrA1vR/yLp8y4bA==TEsnkFfon4VGv52T' },
            })
            .then(response => {
                // Check if response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse response as JSON
                return response.json();
            })
            .then(data => {
                // Process the response data
                console.log(data);
                // Extract exercise names and instructions
                var recommendations = data.map(exercise => {
                    return {
                        name: exercise.name,
                        instructions: exercise.instructions
                    };
                });
                // Update HTML content with exercise recommendations
                updateRecommendations(recommendations);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                // Display error message to the user
                document.getElementById('fitnessP').innerHTML = 'Error: Failed to fetch exercise recommendations.';
            });
        } else {
            // If no body part is selected, clear the exercise recommendations
            clearRecommendations();
        }
    });
});

// Function to update HTML content with exercise recommendations
function updateRecommendations(recommendations) {
    var html = '';
    recommendations.forEach(exercise => {
        html += '<h3 class="exercise-name" >' + exercise.name + '</h3>';
        html += '<p class="exercise-instructions">' + exercise.instructions + '</p>';
    });
    document.getElementById('fitnessP').innerHTML = html;
}

// Function to clear exercise recommendations
function clearRecommendations() {
    document.getElementById('fitnessP').innerHTML = '';
}

