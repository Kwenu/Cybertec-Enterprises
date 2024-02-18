let currentImageIndex = 0;
        const images = document.querySelectorAll('.slideshow-images img');

        function changeImage() {
            images[currentImageIndex].style.opacity = 0; // Hide the current image
            currentImageIndex = (currentImageIndex + 1) % images.length; // Get the next image index
            images[currentImageIndex].style.opacity = 1; // Show the next image
        }

        images[currentImageIndex].style.opacity = 1;

        setInterval(changeImage, 3000);