// Function to generate a three-day workout routine using local exercise data
function generateThreeDayRoutine(container) {
    // Day 1: Full Body Routine
    const chestExercises = getExercises('chest');
    const middleBackExercises = getExercises('middle_back');
    const bicepsExercises = getExercises('biceps');
    const hamstringsExercises = getExercises('hamstrings');
    const abdominalsExercises = getExercises('abdominals');

    container.append('<h2>Day 1: Full Body</h2>');
    renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Biceps Exercise: ' + getRandomExercise(bicepsExercises));
    renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
    renderExercise(container, 'Abdominals Exercise: ' + getRandomExercise(abdominalsExercises));

    // Day 2: Full Body Routine
    const tricepsExercises = getExercises('triceps');
    const quadricepsExercises = getExercises('quadriceps');
    const calvesExercises = getExercises('calves');

    container.append('<h2>Day 2: Full Body</h2>');
    renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));
    renderExercise(container, 'Quadriceps Exercise: ' + getRandomExercise(quadricepsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));

    // Day 3: Full Body Routine
    const latsExercises = getExercises('lats');
    const glutesExercises = getExercises('glutes');
    const forearmExercises = getExercises('forearms');
    const trapsExercises = getExercises('traps');

    container.append('<h2>Day 3: Full Body</h2>');
    renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
    renderExercise(container, 'Lats Exercise: ' + getRandomExercise(latsExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Forearm Exercise: ' + getRandomExercise(forearmExercises));
    renderExercise(container, 'Traps Exercise: ' + getRandomExercise(trapsExercises));
}

// Helper function to get exercises for a specific muscle from the local data
function getExercises(muscle) {
    return exerciseData[muscle] ? exerciseData[muscle].map(exercise => exercise.name) : [];
}

// Helper function to get a random exercise from a list of exercises
function getRandomExercise(exercises) {
    return exercises.length > 0 ? exercises[Math.floor(Math.random() * exercises.length)] : 'No exercise available';
}
