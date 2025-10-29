// Optional JS placeholder
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log('Hovered over:', card.querySelector('h3').innerText);
  });
});
