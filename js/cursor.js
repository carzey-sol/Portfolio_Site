
document.addEventListener('mousemove', (e) => {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
})