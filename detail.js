// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'));

// Get projects from localStorage
const projects = JSON.parse(localStorage.getItem('projects'));

// Find the specific project
const project = projects.find(p => p.id === projectId);

if (project) {
  // Populate basic info
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-author').textContent = `By ${project.author}`;
  document.getElementById('project-date').textContent = project.date;
  document.getElementById('project-description').textContent = project.longDescription;
  
  // Add disclaimer
  document.getElementById('disclaimer-text').textContent = project.disclaimer;
  
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
  
  // Add dropdown sections
  const dropdownsContainer = document.getElementById('dropdowns-container');
  if (project.dropdowns && project.dropdowns.length > 0) {
    project.dropdowns.forEach((dropdown, index) => {
      const dropdownDiv = document.createElement('div');
      dropdownDiv.className = 'dropdown-section';
      
      const dropdownHeader = document.createElement('div');
      dropdownHeader.className = 'dropdown-header';
      dropdownHeader.innerHTML = `
        <h2>${dropdown.title}</h2>
        <span class="dropdown-icon">▼</span>
      `;
      
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content';
      dropdownContent.style.display = 'none';
      
      // Handle newlines in content
      const formattedContent = dropdown.content.split('\n').map(line => {
        return line ? `<p>${line}</p>` : '<br>';
      }).join('');
      dropdownContent.innerHTML = formattedContent;
      
      // Toggle functionality
      dropdownHeader.addEventListener('click', () => {
        const isOpen = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isOpen ? 'none' : 'block';
        dropdownHeader.querySelector('.dropdown-icon').textContent = isOpen ? '▼' : '▲';
      });
      
      dropdownDiv.appendChild(dropdownHeader);
      dropdownDiv.appendChild(dropdownContent);
      dropdownsContainer.appendChild(dropdownDiv);
    });
  }
  
  // Add downloads
  if (project.downloads && project.downloads.length > 0) {
    document.getElementById('downloads-section').style.display = 'block';
    const downloadsList = document.getElementById('downloads-list');
    
    project.downloads.forEach(file => {
      const downloadItem = document.createElement('a');
      downloadItem.className = 'download-item';
      downloadItem.href = file.url;
      downloadItem.download = file.name;
      downloadItem.innerHTML = `
        <div class="download-info">
          <span class="download-name">📄 ${file.name}</span>
          <span class="download-size">${file.size}</span>
        </div>
        <span class="download-arrow">⬇</span>
      `;
      downloadsList.appendChild(downloadItem);
    });
  }
  
  // Update page title
  document.title = `${project.title} - Project Detail`;
} else {
  // Project not found
  document.querySelector('.detail-content').innerHTML = '<h1>Project not found</h1><a href="index.html" class="back-button">Go back</a>';
}