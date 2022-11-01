let codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, i) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[i].value = "";
            if (i < codes.length - 1) {
                setTimeout(() => codes[i + 1].focus(), 10);
            } else {
                setTimeout(() => codes[i].focus(), 10);
            }
        } else if (e.key === "Backspace" && i > 0) {
            setTimeout(() => codes[i - 1].focus(), 10);
        }
    });
});
