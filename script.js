const apiBase = 'http://localhost:3000';

// Load posts
async function loadPosts() {
  const response = await fetch(`${apiBase}/posts`);
  const posts = await response.json();

  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <p><strong>${post.user.name}:</strong> ${post.content}</p>
      <button onclick="likePost('${post.id}')">Like (${post.likes})</button>
      <button onclick="addComment('${post.id}')">Comment</button>
    `;
    postList.appendChild(postDiv);
  });
}

// Create a new post
document.getElementById('new-post-form').addEventListener('submit', async e => {
  e.preventDefault();
  const content = document.getElementById('post-content').value;

  await fetch(`${apiBase}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, userId: '1' })
  });

  document.getElementById('post-content').value = '';
  loadPosts();
});

// Follow user
document.getElementById('follow-btn').addEventListener('click', async () => {
  alert('Followed!');
});

// Load initial data
loadPosts();
