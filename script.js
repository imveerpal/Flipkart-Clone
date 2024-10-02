// Get elements
const preloader = document.getElementById('preloader');
const typedName = document.getElementById('typed-name');
const infoText = document.querySelector('.info-text');
const audio = document.getElementById('preloader-sound');
const nameAnimationDuration = 4000; // Duration for name animation
const secondTextDisplayDelay = 700; // Delay before showing second text
const secondTextDisplayDuration = 5000; // Duration for displaying second text
const curtainAnimationDuration = 120 * 1000; // Duration for curtain animation in milliseconds

const totalDisplayTime = nameAnimationDuration + secondTextDisplayDelay + secondTextDisplayDuration;
// Your name to be displayed in the preloader
const name = "Veerpal Kaur"; // Change this to your name
const secondText = "Hii!! This is a basic cloning project by Veerpal. I tried to replicate some features of a famous e-commerce website by using HTML, CSS and JAVASCRIPT. This is one of my efforts towards learning software development by myself as i do not have any mentor to guide me. That is why it uses only the basic concepts that I have learnt through online sources like MDN. I tried to use the knowledge i gained practically."; // Your second text


// Function to type out the name
function typeName() {
    let index = 0;
    typedName.innerHTML = ''; // Clear the text initially

    const typingInterval = setInterval(() => {
        if (index < name.length) {
            typedName.innerHTML += name[index]; // Add one letter at a time
            index++;
        } else {
            clearInterval(typingInterval); // Stop the typing effect
            
            // Set the text shadow after the name is fully displayed
            typedName.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'; // Apply text shadow
            
            // Start displaying second text after a short delay
            setTimeout(() => {
                displaySecondText();
            }, 700); // Wait a moment before displaying the second text
        }
    }, 200); // Adjust the speed of typing here
}

// Function to display the second text
function displaySecondText() {
    typedName.innerHTML = ''; // Clear the name
    infoText.querySelector('p').innerText = secondText; // Set the second text
    infoText.style.display = 'block'; // Show the info text

    // Wait for the specified duration to display the second text before starting the curtain animation
    setTimeout(() => {
        curtainEffect();
    }, secondTextDisplayDuration); // Wait before starting the curtain animation
}

// Function to implement the curtain effect
function curtainEffect() {
    preloader.style.animation = `curtainUp ${nameAnimationDuration / 1000}s ease-in-out forwards`;
    
    // Hide the preloader after the animation
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide the preloader
        document.getElementById('content').style.display = 'block'; // Show the main content
    },  totalDisplayTime); // Wait for the animation duration
}

// Start the name typing animation
typeName();
