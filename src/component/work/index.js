import React from 'react'
import Project1 from "../../images/Project1.jpg"
import Project2 from "../../images/Project2.jpg"
import Project3 from "../../images/Project3.jpg"
import Project4 from "../../images/Project4.jpg"
import Project5 from "../../images/Project5.jpg"
import Project6 from "../../images/Project6.jpg"

const projects = [
    {
      title: 'Project 1',
      repoLink: 'https://github.com/user/project1',
      image: Project1, // Replace with actual image path
    },
    {
      title: 'Project 2',
      repoLink: 'https://github.com/user/project2',
      image: Project2, // Replace with actual image path
    },
    {
        title: 'Project 3',
        repoLink: 'https://github.com/user/project2',
        image: Project3, // Replace with actual image path
      },
      {
        title: 'Project 4',
        repoLink: 'https://github.com/user/project2',
        image: Project4, // Replace with actual image path
      },
      {
        title: 'Project 5',
        repoLink: 'https://github.com/user/project2',
        image: Project5, // Replace with actual image path
      },
      {
        title: 'Project 6',
        repoLink: 'https://github.com/user/project2',
        image: Project6, // Replace with actual image path
      },

    // Add more project objects
  ];
export default function Work() {
  return (
    <div className='work'>
        <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
    </div>
    </div>
  )
}
