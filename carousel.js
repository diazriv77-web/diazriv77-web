
/*  Codigo JS para manejo del carrusel */


  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;

    function updateSlide(index) {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateSlide(currentIndex);
    });
  });

  // --- Script 2: ajuste automático de imágenes grandes ---
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel .slide img");

    images.forEach(img => {
      img.addEventListener("load", () => {
        const naturalW = img.naturalWidth;
        const naturalH = img.naturalHeight;

        // límites máximos (puedes ajustarlos)
        const maxW = 800;
        const maxH = 600;

        let newW = naturalW;
        let newH = naturalH;

        if (naturalW > maxW || naturalH > maxH) {
          const ratioW = maxW / naturalW;
          const ratioH = maxH / naturalH;
          const ratio = Math.min(ratioW, ratioH);

          newW = naturalW * ratio;
          newH = naturalH * ratio;
        }

        img.style.width = newW + "px";
        img.style.height = newH + "px";
        img.style.objectFit = "contain"; // asegura que no se recorte
      });
    });
  });
