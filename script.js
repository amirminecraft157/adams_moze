function copyIP() {
    const ip = "play.galaxyland.ir";

    navigator.clipboard.writeText(ip);

    const copyText = document.getElementById("copyText");

    if (copyText) {
        copyText.textContent = "✅ IP Copied!";

        setTimeout(() => {
            copyText.textContent = "Click to copy";
        }, 2000);
    }
}


/* SCROLL ANIMATION */

const elements =
    document.querySelectorAll(
        ".stat-card, .game-card, .rank-card, .news-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }
                }
            );

        },
        {
            threshold: 0.15
        }
    );


elements.forEach(
    (element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);
    }
);
