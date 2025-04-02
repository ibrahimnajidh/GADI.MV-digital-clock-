function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateCalendar() {
    const now = new Date();
    // Get abbreviated weekday (e.g., 'Mon', 'Tue', etc.)
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(); // Converts to uppercase
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();

    document.getElementById('calendar').textContent = `${day}-${month}-${year}-${dayOfWeek}`;
}

// Update clock and calendar when the page loads
updateClock();
updateCalendar();

// Update clock and calendar every second
setInterval(updateClock, 1000);
setInterval(updateCalendar, 60000);  // Calendar updates every minute (since the day doesn't change every second)
