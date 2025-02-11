
        const slides = document.querySelector(".slides");
        const slide = document.querySelectorAll(".slide");
        let index = 0;

        function nextSlide() {
            index = (index + 1) % slide.length;
            updateSlide();
        }

        function prevSlide() {
            index = (index - 1 + slide.length) % slide.length;
            updateSlide();
        }

        function updateSlide() {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(nextSlide, 3000);
