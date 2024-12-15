// Local exercise data with more exercises added
const exerciseData = {
    abdominals: [
        { name: 'Crunches', instructions: 'Lie on your back, knees bent, lift shoulders off the floor, and crunch forward.', equipment: 'Bodyweight' },
        { name: 'Plank', instructions: 'Hold a push-up position on your elbows for as long as possible.' },
        { name: 'Bicycle Crunch', instructions: 'Lie on your back, lift your knees to a 90-degree angle, and alternate touching your elbows to the opposite knee.' },
        { name: 'Leg Raises', instructions: 'Lie on your back and lift your legs straight up towards the ceiling, then slowly lower them.' }
    ],
    abductors: [
        { name: 'Side-Lying Leg Raise', instructions: 'Lie on your side, lift your top leg straight up, and lower it slowly.' },
        { name: 'Cable Hip Abduction', instructions: 'Stand next to a cable machine, attach the strap to your ankle, and lift your leg away from your body.' }
    ],
    adductors: [
        { name: 'Sumo Squat', instructions: 'Stand with feet wide apart, squat down, keeping your knees in line with your toes.' },
        { name: 'Seated Adduction', instructions: 'Use the adduction machine to bring your legs together, focusing on the inner thigh muscles.' }
    ],
    biceps: [
        { name: 'Bicep Curl', instructions: 'Hold dumbbells with palms facing up, curl them towards your shoulders.' },
        { name: 'Hammer Curl', instructions: 'Hold dumbbells with palms facing inwards and curl them up like using a hammer.' },
        { name: 'Concentration Curl', instructions: 'Sit down, rest your elbow on your thigh, and curl the dumbbell towards your shoulder.' }
    ],
    calves: [
        { name: 'Calf Raise', instructions: 'Stand on your toes and lift your heels off the ground, then lower them slowly.' },
        { name: 'Seated Calf Raise', instructions: 'Sit down with weights on your thighs and lift your heels off the ground.' },
        { name: 'Donkey Calf Raise', instructions: 'Bend over with your hands on a bench, place your partner or weight on your lower back, and raise your heels.' }
    ],
    chest: [
        { name: 'Push-Up', instructions: 'Start in a plank position, lower your body until your chest almost touches the floor, then push back up.' },
        { name: 'Bench Press', instructions: 'Lie on a bench, hold the barbell with hands slightly wider than shoulder-width, and press it up.' },
        { name: 'Chest Fly', instructions: 'Lie on a bench, hold dumbbells above your chest, and open your arms wide before bringing them together.' }
    ],
    forearms: [
        { name: 'Wrist Curl', instructions: 'Hold a dumbbell with your palm facing up, curl your wrist upwards.' },
        { name: 'Reverse Wrist Curl', instructions: 'Hold a dumbbell with your palm facing down, curl your wrist upwards.' },
        { name: 'Farmer’s Walk', instructions: 'Hold heavy weights in each hand and walk forward with your arms straight down.' }
    ],
    hamstrings: [
        { name: 'Leg Curl', instructions: 'Use a machine or band to curl your heel towards your glutes.' },
        { name: 'Romanian Deadlift', instructions: 'Stand with feet hip-width apart, hinge at the hips while keeping your legs slightly bent, and lower the weights.' },
        { name: 'Glute Ham Raise', instructions: 'Use a GHD machine to lift your upper body while keeping your lower legs secured.' }
    ],
    middle_back: [
        { name: 'Seated Row', instructions: 'Pull handles towards your chest while keeping your back straight.' },
        { name: 'Bent Over Row', instructions: 'Bend your knees slightly, lean forward, and row the barbell towards your waist.' },
        { name: 'T-Bar Row', instructions: 'Stand with your feet on either side of a T-bar row machine, lean forward, and pull the handles towards your chest.' }
    ],
    lats: [
        { name: 'Lat Pulldown', instructions: 'Pull the bar down to your chest while keeping your elbows close to your body.' },
        { name: 'Pull-Up', instructions: 'Hang from a bar with an overhand grip, pull yourself up until your chin is above the bar.' },
        { name: 'Single-Arm Dumbbell Row', instructions: 'Place one knee on a bench, hold a dumbbell, and row it up towards your hip.' }
    ],
    glutes: [
        { name: 'Glute Bridge', instructions: 'Lie on your back, lift your hips up while squeezing your glutes, and then lower down.' },
        { name: 'Hip Thrust', instructions: 'Rest your upper back on a bench, place weights on your hips, and thrust your hips upward.' },
        { name: 'Donkey Kick', instructions: 'Start on all fours, kick one leg up towards the ceiling, keeping your knee bent.' }
    ],
    quadriceps: [
        { name: 'Squat', instructions: 'Stand with feet shoulder-width apart, squat down, and then stand back up.' },
        { name: 'Lunges', instructions: 'Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle.' },
        { name: 'Leg Press', instructions: 'Sit on a leg press machine, press the platform up with your feet, then lower it slowly.' }
    ],
    triceps: [
        { name: 'Tricep Dip', instructions: 'Use a bench or chair to lower and lift your body, focusing on your triceps.' },
        { name: 'Tricep Pushdown', instructions: 'Use a cable machine, push the handle downwards while keeping your elbows close to your body.' },
        { name: 'Overhead Tricep Extension', instructions: 'Hold a dumbbell overhead with both hands, lower it behind your head, and then raise it back up.' }
    ],
    traps: [
        { name: 'Shrug', instructions: 'Hold dumbbells and lift your shoulders towards your ears, then lower them.' },
        { name: 'Barbell Shrug', instructions: 'Hold a barbell in front of your thighs, lift your shoulders up towards your ears, and lower them.' },
        { name: 'Face Pull', instructions: 'Use a rope attachment on a cable machine, pull it towards your face while keeping your elbows high.' }
    ],
    shoulder: [
        { name: 'Shoulder Press', instructions: 'Press the weights overhead and bring them back to shoulder height.' },
        { name: 'Lateral Raise', instructions: 'Stand with dumbbells at your sides, lift them out to the side until your arms are parallel to the floor.' },
        { name: 'Front Raise', instructions: 'Lift a dumbbell in front of you until your arm is parallel to the ground, then lower it.' }
    ]
};


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the dropdown menu
    const muscleDropdown = document.getElementById('muscleDropdown');
    muscleDropdown.addEventListener("change", function () {
        // Get the selected body part
        var selectedMuscle = this.value;
        // Check if a body part is selected
        if (selectedMuscle !== 'none') {
            // Get exercise data from the local object
            var recommendations = exerciseData[selectedMuscle] || [];
            // Update HTML content with exercise recommendations
            updateRecommendations(recommendations);
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
        html += '<h3 class="exercise-name">' + exercise.name + '</h3>';
        html += '<p class="exercise-instructions">' + exercise.instructions + '</p>';

    });
    document.getElementById('fitnessP').innerHTML = html;
}

// Function to clear exercise recommendations
function clearRecommendations() {
    document.getElementById('fitnessP').innerHTML = '';
}


const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        button1.textContent = "Toggle Light Mode";
    }
    else {
        button1.textContent = "Toggle Dark Mode";
    }

});



function submitButton(e) {
    e.preventDefault();
    var nameValue = document.getElementById("name").value
    var emailValue = document.getElementById("email").value
    var hometown = document.getElementById("city").value

    const requestList = document.getElementById("signedList");
    const listItem = document.createElement("p")

    listItem.textContent = `🖊️ ${nameValue} from ${hometown} supports this`

    requestList.appendChild(listItem)
    document.getElementById("petForm").reset()

    const totalCount = document.getElementById('totalCount');

    totalCount.textContent = parseInt(totalCount.textContent) + 1;

    const modal = document.getElementById("thanks-modal");

    modal.style.display = "flex";

    const modalContent = document.getElementById("thanks-modal-content");

    modalContent.textContent = `Thank you for signing the petition ${nameValue}`;

}

document.getElementById("petForm").addEventListener("submit", submitButton)



document.getElementById("hideModal").addEventListener("click", turnOffModal)
const modal = document.getElementById("thanks-modal");
const modalContent = document.getElementById("thanks-content-modal");
const modalImage = document.getElementById("modalImg");


function turnOffModal(person) {
    modal.style.display = "none";
}

setInterval(turnOffModal, 5000);

const sections = document.querySelectorAll(".section");


const options = {
    threshold: .05,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
        }
        else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("visible");
        }
    });
}, options);
sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});
