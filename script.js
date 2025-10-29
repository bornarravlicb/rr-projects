// Project data - edit this with your actual project info
const projects = [
  {
    id: 0,
    title: "PROJECT TITLE 1",
    author: "Your Name",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "This is a detailed description of project 1. Add multiple paragraphs, explain the challenges, solutions, and outcomes. You can make this as long as you need.",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["React", "Node.js", "MongoDB"],
    date: "January 2024",
    disclaimer: "This is a placeholder disclaimer. You can add any important information, warnings, or notes about this project here. For example: This project is for educational purposes only.",
    dropdowns: [
      {
        title: "Key Features",
        content: "• Feature 1: Description here\n• Feature 2: Another feature\n• Feature 3: Yet another cool feature"
      },
      {
        title: "Challenges & Solutions",
        content: "Challenge: Describe a problem you faced.\n\nSolution: How you solved it with detailed explanation."
      },
      {
        title: "What I Learned",
        content: "Discuss the key takeaways and skills you developed during this project."
      }
    ],
    downloads: [
      {
        name: "Project Documentation.pdf",
        url: "files/project1-docs.pdf",
        size: "2.5 MB"
      },
      {
        name: "Source Code.zip",
        url: "files/project1-source.zip",
        size: "15 MB"
      },
      {
        name: "Presentation Slides.pdf",
        url: "files/project1-slides.pdf",
        size: "5.3 MB"
      }
    ]
  },
  {
    id: 1,
    title: "PROJECT TITLE 2",
    author: "Your Name",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 2. Explain what this project is about, why you built it, and what makes it special.",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["Python", "Flask", "PostgreSQL"],
    date: "February 2024",
    disclaimer: "Disclaimer text for project 2. Add any legal notices, limitations, or important warnings here.",
    dropdowns: [
      {
        title: "Project Overview",
        content: "A comprehensive overview of what this project does and why it matters."
      },
      {
        title: "Technical Implementation",
        content: "Deep dive into the technical aspects and architecture decisions."
      }
    ],
    downloads: [
      {
        name: "User Guide.pdf",
        url: "files/project2-guide.pdf",
        size: "1.2 MB"
      }
    ]
  },
  {
    id: 2,
    title: "PROJECT TITLE 3",
    author: "Your Name",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 3. Share your vision, process, and results.",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["Vue.js", "Firebase"],
    date: "March 2024",
    disclaimer: "Important notice about project 3. This could include usage restrictions or acknowledgments.",
    dropdowns: [],
    downloads: []
  },
  {
    id: 3,
    title: "PROJECT TITLE 4",
    author: "Your Name",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 4. Tell the story behind this project.",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["JavaScript", "Three.js"],
    date: "April 2024",
    disclaimer: "Disclaimer placeholder for project 4. Customize this text for each project as needed.",
    dropdowns: [],
    downloads: []
  },
  {
    id: 4,
    title: "PROJECT TITLE 5",
    author: "Your Name",
    shortDescription: "PROJECT DESCRIPTION PLACEHOLDER",
    longDescription: "Detailed description for project 5. Describe the impact and outcomes of this work.",
    image: "PLACEHOLDER_IMAGE_URL",
    tags: ["TAG1", "TAG2", "TAG3", "TAG4"],
    technologies: ["Next.js", "TypeScript"],
    date: "May 2024",
    disclaimer: "Project 5 disclaimer text. Use this space to communicate any important information to viewers.",
    dropdowns: [],
    downloads: []
  }
];

// Save projects to localStorage so detail page can access them
localStorage.setItem('projects', JSON.stringify(projects));

// Add click event to all project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project-id');
    window.location.href = `detail.html?id=${projectId}`;
  });
});