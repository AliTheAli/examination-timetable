document.addEventListener("DOMContentLoaded", function() {
  const countdowns = document.querySelectorAll(".countdown");
  const progress = document.getElementById("examProgress");
  const progressText = document.getElementById("progress-text");
  const toggleModeButton = document.getElementById("toggle-mode");

  // Countdown Timer Function
  function updateCountdown() {
    let completedExams = 0;

    countdowns.forEach((countdown) => {
      const targetDate = new Date(countdown.getAttribute("data-date"));
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        countdown.innerHTML = "Exam Started / Completed";
        completedExams++;
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    });

    // Update Progress Bar
    progress.value = completedExams;
    progressText.textContent = `${completedExams}/${countdowns.length} Exams Completed`;
  }

  // Call countdown updater every second
  setInterval(updateCountdown, 1000);

  // Toggle Dark Mode
  toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Initial run
  updateCountdown();
});
