
        document.addEventListener('DOMContentLoaded', function () {
            let currentIndex = 0;
            const gallery = document.querySelector('.gallery');
            const images = document.querySelectorAll('.gallery img');
            const totalImages = images.length;

            function scrollGallery(direction) {
                currentIndex = (currentIndex + direction + totalImages) % totalImages;
                const translateValue = -currentIndex * 100 + '%';
                gallery.style.transform = 'translateX(' + translateValue + ')';
            }

            setInterval(() => {
                scrollGallery(1);
            }, 5000);

            const scrollLeftButton = document.querySelector('.scroll-left');
            const scrollRightButton = document.querySelector('.scroll-right');

            if (scrollLeftButton) {
                scrollLeftButton.addEventListener('click', function () {
                    scrollGallery(-1);
                });
            }

            if (scrollRightButton) {
                scrollRightButton.addEventListener('click', function () {
                    scrollGallery(1);
                });
            }
        });

    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() *10 + 1}s`; // Adjust the falling speed
        return snowflake;
    }

    // Function to start the snowfall
    function startSnowfall() {
        const snowfallContainer = document.getElementById('snowfall-container');
        const numberOfSnowflakes = 10; // Adjust the number of snowflakes

        for (let i = 0; i < numberOfSnowflakes; i++) {
            const snowflake = createSnowflake();
            snowfallContainer.appendChild(snowflake);
        }
    }

    window.addEventListener('load', startSnowfall);

