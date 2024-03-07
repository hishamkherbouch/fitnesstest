function generateThreeDayRoutine(container) {
    fetchExercises('chest').then(function(chestExercises) {
        fetchExercises('middle back').then(function(middleBackExercises) {
            fetchExercises('biceps').then(function(bicepsExercises) {
                fetchExercises('hamstrings').then(function(hamstringsExercises) {
                    fetchExercises('abdominals').then(function(abdominalsExercises) {
                        container.append('<h2>Day 1: Full Body</h2>');
                        renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
                        renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
                        renderExercise(container, 'Biceps Exercise: ' + getRandomExercise(bicepsExercises));
                        renderExercise(container, 'Hamstrings Exercise: ' + getRandomExercise(hamstringsExercises));
                        renderExercise(container, 'Abdominals Exercise: ' + getRandomExercise(abdominalsExercises));
                    });
                });
            });
        });
    });

    fetchExercises('chest').then(function(chestExercises) {
        fetchExercises('middle back').then(function(middleBackExercises) {
            fetchExercises('triceps').then(function(tricepsExercises) {
                fetchExercises('quadriceps').then(function(quadricepsExercises) {
                    fetchExercises('calves').then(function(calvesExercises) {
                        container.append('<h2>Day 2: Full Body</h2>');
                        renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
                        renderExercise(container, 'Middle Back Exercise: ' + getRandomExercise(middleBackExercises));
                        renderExercise(container, 'Triceps Exercise: ' + getRandomExercise(tricepsExercises));
                        renderExercise(container, 'Quadriceps Exercise: ' + getRandomExercise(quadricepsExercises));
                        renderExercise(container, 'Calves Exercise: ' + getRandomExercise(calvesExercises));
                    });
                });
            });
        });
    });

    fetchExercises('chest').then(function(chestExercises) {
        fetchExercises('lats').then(function(latsExercises) {
            fetchExercises('glutes').then(function(glutesExercises) {
                fetchExercises('forearm').then(function(forearmExercises) {
                    fetchExercises('traps').then(function(trapsExercises) {
                        container.append('<h2>Day 3: Full Body</h2>');
                        renderExercise(container, 'Chest Exercise: ' + getRandomExercise(chestExercises));
                        renderExercise(container, 'Lats Exercise: ' + getRandomExercise(latsExercises));
                        renderExercise(container, 'Glutes Exercise: ' + getRandomExercise(glutesExercises));
                        renderExercise(container, 'Forearm Exercise: ' + getRandomExercise(forearmExercises));
                        renderExercise(container, 'Traps Exercise: ' + getRandomExercise(trapsExercises));
                    });
                });
            });
        });
    });
}

function fetchExercises(muscle) {
    var apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.map(exercise => exercise.name))
        .catch(error => console.error('Error fetching exercises:', error));
}
