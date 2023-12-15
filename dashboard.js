document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
  
    logoutBtn.addEventListener('click', function () {
      // Add logout functionality, for example, redirecting to the login page
      alert('Logging out...');
    });
  
    updateTimeDate();
    updateCalendar();
  
    // Update time and date every second
    setInterval(updateTimeDate, 1000);
  });
  
  function updateTimeDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
  
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    const dateString = now.toDateString();
  
    timeElement.textContent = `Time: ${timeString}`;
    dateElement.textContent = `Date: ${dateString}`;
  }
  
  function updateCalendar() {
    // Add calendar update logic here, e.g., integrate a calendar library or API
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = 'Calendar content goes here';
  }