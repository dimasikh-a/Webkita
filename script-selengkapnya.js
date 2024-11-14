function startCounting(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const updateCounter = setInterval(() => {
    count++;
    counter.textContent = count;

    if (count >= target) {
      clearInterval(updateCounter);
    }
  }, 30); 
}


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        if (counter.textContent === "0") {
          startCounting(counter);
        }

        observer.unobserve(counter);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const counters = document.querySelectorAll(".counting");
counters.forEach((counter) => observer.observe(counter));
