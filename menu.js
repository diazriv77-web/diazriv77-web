document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-list a, .dropdown a");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active"); // ahora usamos "active" en vez de "inactive"
    }
  });
});

<script>
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video-hero");
  const btn = document.getElementById("sonido-btn");

  btn.addEventListener("click", () => {
    video.muted = false;
    video.play();
    btn.style.display = "none";
  });
});
</script>
