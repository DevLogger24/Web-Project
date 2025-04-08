document.addEventListener("DOMContentLoaded", function () {
    const hello = document.querySelector(".hello");
    const iam = document.querySelector(".iam");
    const typing = document.querySelector(".typing");
    const supportText = document.querySelector(".support-text");
    const button = document.querySelector(".btn");

    const phrases = ["I'm an Artist", "I'm a Graphic Designer"];
    let phraseIndex = 0;
    let letterIndex = 0;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        typing.textContent = currentPhrase.substring(0, letterIndex++);

        if (letterIndex <= currentPhrase.length) {
            setTimeout(typeEffect, 100);
        } else {
            phraseIndex++;
            if (phraseIndex < phrases.length) {
                setTimeout(() => {
                    letterIndex = 0;
                    typeEffect();
                }, 1000);
            }
        }
    }

    function startAnimation() {
        hello.classList.add("show");

        setTimeout(() => {
            iam.classList.add("show");

            setTimeout(() => {
                typing.classList.add("show");
                typeEffect();

                setTimeout(() => {
                    supportText.classList.add("show");

                    setTimeout(() => {
                        button.classList.add("show");
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }

    startAnimation();
});