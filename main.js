function checkScroll() {
        var leftSidebar = document.getElementById("left-sidebar");
        if (window.scrollY > 200) {
            leftSidebar.classList.add("active");
        } else {
            leftSidebar.classList.remove("active");
        }
    }

    
    window.addEventListener("scroll", checkScroll);
    var typed = new Typed('#element', {
        strings: ['Every types of cleaning product are available in this amazing sites.'],
        typeSpeed: 50,
        showCursor: false,
        loop: true,
      });
      const targetCount = 7800;
        let currentCount = 0;
        const countingElement = document.getElementById("happy-clients");
    
        function updateCount() {
          currentCount += Math.ceil(targetCount / 100); // Adjust the speed of counting
          if (currentCount <= targetCount) {
            countingElement.textContent = currentCount;
            requestAnimationFrame(updateCount);
          } else {
            countingElement.textContent = targetCount;
          }
        }
    
        const aboutSection = document.getElementById("about");
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            updateCount();
            observer.unobserve(aboutSection);
          }
        });
        observer.observe(aboutSection);
