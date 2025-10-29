// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'));

// Get projects from localStorage
const projects = JSON.parse(localStorage.getItem('projects'));

// Find the specific project
const project = projects.find(p => p.id === projectId);

if (project) {
  // Populate the page with project data
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-date').textContent = project.date;
  document.getElementById('project-image').src = project.image;
  document.getElementById('project-image').alt = project.title;
  document.getElementById('project-description').textContent = project.longDescription;
  
  // Add tags
  const tagsContainer = document.getElementById('project-tags');
  project.tags.forEach(tag => {
    const tagSpan = document.createElement('span');
    tagSpan.className = 'tag';
    tagSpan.textContent = tag;
    tagsContainer.appendChild(tagSpan);
  });
  
  // Add technologies
  const techList = document.getElementById('project-technologies');
  project.technologies.forEach(tech => {
    const li = document.createElement('li');
    li.textContent = tech;
    techList.appendChild(li);
  });
  
  // Set links
  document.getElementById('github-link').href = project.githubUrl;
  document.getElementById('live-link').href = project.liveUrl;
  
  // Update page title
  document.title = `${project.title} - Project Detail`;
} else {
  // Project not found
  document.querySelector('.detail-content').innerHTML = '<h1>Project not found</h1><a href="index.html">Go back</a>';
}