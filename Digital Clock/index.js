function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
