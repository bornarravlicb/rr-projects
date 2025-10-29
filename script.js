// Project data - edit this with your actual project info
const projects = [
  {
    id: 0,
    title: "PROJECT TITLE 1",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "This is a detailed description of project 1. Add multiple paragraphs, explain the challenges, solutions, and outcomes. You can make this as long as you need.",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    date: "January 2024"
  },
  {
    id: 1,
    title: "PROJECT TITLE 2",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 2...",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["Python", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
    date: "February 2024"
  },
  {
    id: 2,
    title: "PROJECT TITLE 3",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 3...",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["Vue.js", "Firebase"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.com",
    date: "March 2024"
  },
  {
    id: 3,
    title: "PROJECT TITLE 4",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 4...",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["JavaScript", "Three.js"],
    githubUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4.com",
    date: "April 2024"
  },
  {
    id: 4,
    title: "PROJECT TITLE 5",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 5...",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project5",
    liveUrl: "https://project5.com",
    date: "May 2024"
  }
];

// Save projects to localStorage so detail page can access them
localStorage.setItem('projects', JSON.stringify(projects));

// Add click event to all project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.style.cursor = 'pointer';
  
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project-id');
    // Navigate to detail page with project ID
    window.location.href = `detail.html?id=${projectId}`;
  });

  // Add hover effect
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});