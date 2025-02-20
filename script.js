document.addEventListener("DOMContentLoaded", function () {
    const featuresSection = document.querySelector(".features");
    const features = document.querySelectorAll(".feature");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            featuresSection.classList.add("show"); // Show the whole section
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add("show");
              }, index * 200); // Staggered effect for each feature
            });
            observer.unobserve(featuresSection); // Stop observing after it's visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the div is visible
    );
  
    observer.observe(featuresSection);
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    steps.forEach((step) => observer.observe(step));
  });
  