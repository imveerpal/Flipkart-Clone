// Get elements
const preloader = document.getElementById('preloader');
const typedName = document.getElementById('typed-name');
const infoText = document.querySelector('.info-text');
const audio = document.getElementById('preloader-sound');
const nameAnimationDuration = 4000; // Duration for name animation
const secondTextDisplayDelay = 700; // Delay before showing second text
const secondTextDisplayDuration = 10000; // Duration for displaying second text
const curtainAnimationDuration = 120 * 1000; // Duration for curtain animation in milliseconds

const totalDisplayTime = nameAnimationDuration + secondTextDisplayDelay + secondTextDisplayDuration;
const name = "Veerpal Kaur"; 
const secondText = "Hii!! This is a basic cloning project by Veerpal. I tried to replicate some features of a famous e-commerce website by using HTML, CSS and JAVASCRIPT. This is one of my efforts towards learning software development by myself as i do not have any mentor to guide me. That is why it uses only the basic concepts that I have learnt through online sources like MDN. I tried to use the knowledge i gained practically."; 
function typeName() {
    let index = 0;
    typedName.innerHTML = ''; 

    const typingInterval = setInterval(() => {
        if (index < name.length) {
            typedName.innerHTML += name[index]; 
            index++;
        } else {
            clearInterval(typingInterval);
            typedName.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
            setTimeout(() => {
                displaySecondText();
            }, 700); 
        }
    }, 200); 
}
function displaySecondText() {
    typedName.innerHTML = ''; 
    infoText.querySelector('p').innerText = secondText; 
    infoText.style.display = 'block'; 
    setTimeout(() => {
        curtainEffect();
    }, secondTextDisplayDuration); 
}
function curtainEffect() {
    preloader.style.animation = `curtainUp ${nameAnimationDuration / 1000}s ease-in-out forwards`;
    setTimeout(() => {
        preloader.style.display = 'none'; 
        document.getElementById('content').style.display = 'block'; 
    },  totalDisplayTime); 
}
typeName();