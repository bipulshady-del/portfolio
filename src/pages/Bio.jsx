import React from 'react'

export default function Bio(){
  return (
    <section className="prose prose-invert max-w-3xl">
      <h2>About Me</h2>
      <p>I am a seasoned Web and Mobile developer with experience delivering end-to-end solutions for startups and small businesses. I design and develop responsive websites, SPA frontends, cross-platform mobile apps (Flutter/React Native), and scalable backend APIs using Node.js and modern databases.</p>

      <h3>Expertise</h3>
      <ul>
        <li>Frontend: React, React Router, HTML, CSS component-driven UI, accessibility and performance optimization.</li>
        <li>Backend: Node.js, PHP, REST/GraphQL APIs, authentication, and cloud deployment.</li>
        <li>Mobile: Cross-platform apps with attention to native performance and device APIs.</li>
        <li>Design & Collaboration: Figma-driven UI, agile workflows, testing, and CI/CD.</li>
      </ul>

      <h3>Approach</h3>
      <p>My development workflow focuses on maintainable code, modular architecture, and measurable outcomes. I prefer small, iterative releases with automated tests and clear documentation.</p>

      <h3>Experience Highlights</h3>
      <ol>
        <li>Built an e-commerce platform with a React frontend and Node.js backend — improved conversion by 18%.</li>
        <li>Developed a cross-platform mobile app for field data capture used by 200+ daily users.</li>
        <li>Designed and shipped several marketing websites and admin dashboards with performance budgets.</li>
      </ol>

      <h3>Education & Tools</h3>
      <p>Bachelors in Computer Engineering. Tools: Git, Docker, Vercel, Netlify, Firebase, MongoDB, PostgreSQL.</p>
    </section>
  )
}
