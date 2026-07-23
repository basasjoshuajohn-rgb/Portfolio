const text = [
    "Aspiring Software Engineer",
    "BS Computer Science Student",
    "learning",
    "Future Full-Stack Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {
    let currentText = text[textIndex];

    if (!isDeleting) {
        typing.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typing.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex === text.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();