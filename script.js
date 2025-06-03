// Search filter
const searchInput = document.getElementById('searchInput');
const posts = document.querySelectorAll('.post');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  posts.forEach(post => {
    const text = post.textContent.toLowerCase();
    post.style.display = text.includes(searchTerm) ? 'block' : 'none';
  });
});

// Dark mode toggle
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
