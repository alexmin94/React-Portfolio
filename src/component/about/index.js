import React from 'react'
import cooldude from "../../images/cooldude.jpg"
export default function About() {
  return (
    <div className='about'>
        <h2>About Me</h2>
        <div className='aboutMe-content'>
            <div className='about-me-paragraph'>
            <p>Hello! I'm Alex, and I'm on an exciting journey through the world of web development as a Full Stack Bootcamp student at KU. With a passion for crafting digital experiences and a drive to turn ideas into functional applications, I've embarked on this immersive learning adventure to master the tools and technologies that power the modern web.
As a software enthusiast, my learning path revolves around mastering four essential components:
MongoDB: I've delved into the world of NoSQL databases with MongoDB, learning how to design flexible data structures that align perfectly with the needs of my applications. From data modeling to querying, I'm becoming a pro at managing and interacting with database collections.
Express: Crafting the server-side of my applications is a thrilling challenge I've eagerly taken on with Express.js. Building APIs, handling middleware, and creating robust endpoints have become my daily tasks as I create backends that support the frontend magic.
React: Ah, the heart of modern web development! With React, I'm crafting dynamic and interactive user interfaces that captivate users. From components and hooks to state management, I'm building applications that are both visually appealing and highly functional.
Node.js: The power of JavaScript on the server side is truly fascinating. With Node.js, I'm writing server code that executes lightning-fast, optimizing performance and providing a seamless experience for users.
But being a MERN Stack student is not just about coding—it's about embracing challenges, collaborating with peers, and exploring new horizons. From debugging complex issues to learning the latest trends in web development, I'm committed to continuous improvement.
Outside of the code editor, I enjoy exploring the vast tech community, attending hackathons, and contributing to open-source projects. I believe in the transformative potential of technology to drive positive change, and I'm excited to be part of a community that shares this vision.
The journey ahead is bound to be filled with code sprints, "aha" moments, and a few head-scratching challenges. But armed with the knowledge gained from this Bootcamp, I'm ready to turn my ambitions into reality, one line of code at a time.
Feel free to reach out and join me on this exhilarating journey through the Stack universe.

</p>
</div>
<div className='aboutMe-image'>
    <img src={cooldude}/>
</div>

        </div>
    </div>
  )
}
