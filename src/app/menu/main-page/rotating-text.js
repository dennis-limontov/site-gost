document.addEventListener("DOMContentLoaded", () => {
    const words = document.getElementsByClassName("word");
    const wordArray = [];
    let currentWord = 0;

    words[currentWord].style.opacity = "1";
    for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        const cw = wordArray[currentWord];
        const nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (let i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (let i = 0; i < nw.length; i++) {
            nw[i].classList.remove("in");
            nw[i].classList.remove("out");
            nw[i].classList.add("behind");
            nw[0].parentElement.style.opacity = "1";
            animateLetterIn(nw, i);
        }

        currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
        cw[i].classList.remove("in");
        cw[i].classList.add("out");
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function () {
        nw[i].classList.remove("out");
        nw[i].classList.add("in");
        }, 340 + i * 80);
    }

    function splitLetters(word) {
        const parentAttr = word.getAttributeNames().filter((e) => !["style", "class"].includes(e))[0];
        const content = word.innerHTML;
        word.innerHTML = "";
        const letters = [];

        const x = content.split(" — ");
        const s = x[0].split("").reduce((acc, l) => {
            if (l === " ") {
                acc[acc.length - 1] += l;
            } else {
                acc.push(l);
            }
            return acc;
        }, []);
        s.push(" - ", x[1]);

        s.forEach((e, i) => {
            const letter = document.createElement("span");
            letter.setAttribute(parentAttr, "");
            letter.classList.add("letter");
            if (i === s.length - 1) {
                letter.classList.add("sentence");
            }
            letter.innerHTML = e;
            word.appendChild(letter);
            letters.push(letter);
        });

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 6000);
});
