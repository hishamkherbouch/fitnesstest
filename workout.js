// Function to generate a three-day workout routine using local exercise data
function generateThreeDayRoutine(container) {
    container.empty();
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

// Function to generate a four-day workout routine using local exercise data
function generateFourDayRoutine(container) {
    container.empty();
    // Day 1: Upper Body
    const chestExercises = getExercises('chest');
    const middleBackExercises = getExercises('middle_back');
    const bicepsExercises = getExercises('biceps');
    const tricepsExercises = getExercises('triceps');
    const shoulderExercises = getExercises('shoulder');

    container.append('<h2>Day 1: Upper Body</h2>');
    const [chest1, chest2] = getRandomUniqueExercises(chestExercises, 2);
    renderExercise(container, 'Chest Exercise 1: ' + chest1);
    renderExercise(container, 'Chest Exercise 2: ' + chest2);
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Shoulder Exercise: ' + getRandomExercise(shoulderExercises));
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));
    renderExercise(container, 'Biceps Exercise: ' + getRandomExercise(bicepsExercises));

    // Day 2: Lower Body
    const quadricepsExercises = getExercises('quadriceps');
    const hamstringsExercises = getExercises('hamstrings');
    const calvesExercises = getExercises('calves');
    const glutesExercises = getExercises('glutes');
    const adductorsExercises = getExercises('adductors');

    container.append('<h2>Day 2: Lower Body</h2>');
    const [quad1, quad2] = getRandomUniqueExercises(quadricepsExercises, 2);
    renderExercise(container, 'Quadriceps Exercise 1: ' + quad1);
    renderExercise(container, 'Quadriceps Exercise 2: ' + quad2);
    renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Adductors Exercise: ' + getRandomExercise(adductorsExercises));

    // Day 3: Upper Body
    const latsExercises = getExercises('lats');

    container.append('<h2>Day 3: Upper Body</h2>');
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Lats Exercise: ' + getRandomExercise(latsExercises));
    renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));
    renderExercise(container, 'Biceps Exercise: ' + getRandomExercise(bicepsExercises));
    renderExercise(container, 'Shoulder Exercise: ' + getRandomExercise(shoulderExercises));

    // Day 4: Lower Body
    const abductorsExercises = getExercises('abductors');

    container.append('<h2>Day 4: Lower Body</h2>');
    const [ham1, ham2] = getRandomUniqueExercises(hamstringsExercises, 2);
    renderExercise(container, 'Hamstrings Exercise 1: ' + ham1);
    renderExercise(container, 'Hamstrings Exercise 2: ' + ham2);
    renderExercise(container, 'Quadriceps Exercise: ' + getRandomExercise(quadricepsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Abductors Exercise: ' + getRandomExercise(abductorsExercises));
}

// Function to generate a five-day workout routine using local exercise data
function generateFiveDayRoutine(container) {
    container.empty();
    // Day 1: Push (Chest, Shoulders, Triceps)
    const chestExercises = getExercises('chest');
    const shoulderExercises = getExercises('shoulder');
    const tricepsExercises = getExercises('triceps');

    container.append('<h2>Day 1: Push</h2>');
    const [chest1, chest2] = getRandomUniqueExercises(chestExercises, 2);
    const [shoulder1, shoulder2] = getRandomUniqueExercises(shoulderExercises, 2);
    renderExercise(container, 'Chest Exercise 1: ' + chest1);
    renderExercise(container, 'Chest Exercise 2: ' + chest2);
    renderExercise(container, 'Shoulder Exercise 1: ' + shoulder1);
    renderExercise(container, 'Shoulder Exercise 2: ' + shoulder2);
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));

    // Day 2: Pull (Back, Biceps)
    const middleBackExercises = getExercises('middle_back');
    const latsExercises = getExercises('lats');
    const trapsExercises = getExercises('traps');
    const bicepsExercises = getExercises('biceps');

    container.append('<h2>Day 2: Pull</h2>');
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Lats Exercise: ' + getRandomExercise(latsExercises));
    renderExercise(container, 'Traps Exercise: ' + getRandomExercise(trapsExercises));
    const [bi1, bi2] = getRandomUniqueExercises(bicepsExercises, 2);
    renderExercise(container, 'Biceps Exercise 1: ' + bi1);
    renderExercise(container, 'Biceps Exercise 2: ' + bi2);

    // Day 3: Lower Body
    const quadricepsExercises = getExercises('quadriceps');
    const hamstringsExercises = getExercises('hamstrings');
    const calvesExercises = getExercises('calves');
    const glutesExercises = getExercises('glutes');
    const adductorsExercises = getExercises('adductors');
    const abductorsExercises = getExercises('abductors');

    container.append('<h2>Day 3: Lower Body</h2>');
    const [quad1, quad2] = getRandomUniqueExercises(quadricepsExercises, 2);
    renderExercise(container, 'Quadriceps Exercise 1: ' + quad1);
    renderExercise(container, 'Quadriceps Exercise 2: ' + quad2);
    renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Superset: Adductors Exercise: ' + getRandomExercise(adductorsExercises) + ' / Abductors Exercise: ' + getRandomExercise(abductorsExercises));

    // Day 4: Upper Body
    const abdominalsExercises = getExercises('abdominals');

    container.append('<h2>Day 4: Upper Body</h2>');
    renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
    renderExercise(container, 'Middle Back or Lats Exercise: ' + getRandomExercise([...middleBackExercises, ...latsExercises]));
    renderExercise(container, 'Biceps Exercise: ' + getRandomExercise(bicepsExercises));
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));
    renderExercise(container, 'Shoulder Exercise: ' + getRandomExercise(shoulderExercises));
    renderExercise(container, 'Abdominals Exercise: ' + getRandomExercise(abdominalsExercises));

    // Day 5: Lower Body
    container.append('<h2>Day 5: Lower Body</h2>');
    const [q5_1, q5_2] = getRandomUniqueExercises(quadricepsExercises, 2);
    renderExercise(container, 'Quadriceps Exercise 1: ' + q5_1);
    renderExercise(container, 'Quadriceps Exercise 2: ' + q5_2);
    renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Superset: Adductors Exercise: ' + getRandomExercise(adductorsExercises) + ' / Abductors Exercise: ' + getRandomExercise(abductorsExercises));
}

// Function to generate a six-day workout routine using local exercise data
function generateSixDayRoutine(container) {
    container.empty();
    // Day 1: Push (Chest, Shoulders, Triceps)
    const chestExercises = getExercises('chest');
    const shoulderExercises = getExercises('shoulder');
    const tricepsExercises = getExercises('triceps');

    container.append('<h2>Day 1: Push</h2>');
    const [chest1, chest2] = getRandomUniqueExercises(chestExercises, 2);
    const [shoulder1, shoulder2] = getRandomUniqueExercises(shoulderExercises, 2);
    renderExercise(container, 'Chest Exercise 1: ' + chest1);
    renderExercise(container, 'Chest Exercise 2: ' + chest2);
    renderExercise(container, 'Shoulder Exercise 1: ' + shoulder1);
    renderExercise(container, 'Shoulder Exercise 2: ' + shoulder2);
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));

    // Day 2: Pull (Back, Biceps)
    const middleBackExercises = getExercises('middle_back');
    const latsExercises = getExercises('lats');
    const trapsExercises = getExercises('traps');
    const bicepsExercises = getExercises('biceps');

    container.append('<h2>Day 2: Pull</h2>');
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Lats Exercise: ' + getRandomExercise(latsExercises));
    renderExercise(container, 'Traps Exercise: ' + getRandomExercise(trapsExercises));
    const [bi1, bi2] = getRandomUniqueExercises(bicepsExercises, 2);
    renderExercise(container, 'Biceps Exercise 1: ' + bi1);
    renderExercise(container, 'Biceps Exercise 2: ' + bi2);

    // Day 3: Lower Body
    const quadricepsExercises = getExercises('quadriceps');
    const hamstringsExercises = getExercises('hamstrings');
    const calvesExercises = getExercises('calves');
    const glutesExercises = getExercises('glutes');
    const adductorsExercises = getExercises('adductors');
    const abductorsExercises = getExercises('abductors');

    container.append('<h2>Day 3: Lower Body</h2>');
    const [quad1, quad2] = getRandomUniqueExercises(quadricepsExercises, 2);
    renderExercise(container, 'Quadriceps Exercise 1: ' + quad1);
    renderExercise(container, 'Quadriceps Exercise 2: ' + quad2);
    renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Superset: Adductors Exercise: ' + getRandomExercise(adductorsExercises) + ' / Abductors Exercise: ' + getRandomExercise(abductorsExercises));

    // Day 4: Push (Chest, Shoulders, Triceps)
    container.append('<h2>Day 4: Push</h2>');
    const [chest3, chest4] = getRandomUniqueExercises(chestExercises, 2);
    const [shoulder3, shoulder4] = getRandomUniqueExercises(shoulderExercises, 2);
    renderExercise(container, 'Chest Exercise 1: ' + chest3);
    renderExercise(container, 'Chest Exercise 2: ' + chest4);
    renderExercise(container, 'Shoulder Exercise 1: ' + shoulder3);
    renderExercise(container, 'Shoulder Exercise 2: ' + shoulder4);
    renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));

    // Day 5: Pull (Back, Biceps)
    container.append('<h2>Day 5: Pull</h2>');
    renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
    renderExercise(container, 'Lats Exercise: ' + getRandomExercise(latsExercises));
    renderExercise(container, 'Traps Exercise: ' + getRandomExercise(trapsExercises));
    const [bi3, bi4] = getRandomUniqueExercises(bicepsExercises, 2);
    renderExercise(container, 'Biceps Exercise 1: ' + bi3);
    renderExercise(container, 'Biceps Exercise 2: ' + bi4);

    // Day 6: Lower Body
    container.append('<h2>Day 6: Lower Body</h2>');
    const [quad3, quad4] = getRandomUniqueExercises(quadricepsExercises, 2);
    renderExercise(container, 'Quadriceps Exercise 1: ' + quad3);
    renderExercise(container, 'Quadriceps Exercise 2: ' + quad4);
    renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
    renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
    renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
    renderExercise(container, 'Superset: Adductors Exercise: ' + getRandomExercise(adductorsExercises) + ' / Abductors Exercise: ' + getRandomExercise(abductorsExercises));
}

// Helper function to get exercises for a specific muscle from the local data
function getExercises(muscle) {
    return exerciseData[muscle] ? exerciseData[muscle].map(exercise => exercise.name) : [];
}

// Helper function to get a random exercise from a list of exercises
function getRandomExercise(exercises) {
    return exercises.length > 0 ? exercises[Math.floor(Math.random() * exercises.length)] : 'No exercise available';
}

// Helper function to get multiple unique random exercises from a list
function getRandomUniqueExercises(exercises, count) {
    const available = [...exercises];
    const selected = [];
    for (let i = 0; i < count && available.length > 0; i++) {
        const index = Math.floor(Math.random() * available.length);
        selected.push(available.splice(index, 1)[0]);
    }
    return selected;
}

// Helper function to render an exercise in the container
function renderExercise(container, exercise) {
    container.append('<p>' + exercise + '</p>');
}
