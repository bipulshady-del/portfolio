import React from 'react';

export default function Bio() {
  return (
    <section className="max-w-3xl mx-auto p-6 prose prose-invert text-justify">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I am Bipul Chandra Rijal, a seasoned Full-Stack Web & Mobile Developer with over 5 years of experience delivering end-to-end solutions for startups, SMEs, and enterprise projects. I specialize in building performant, scalable, and accessible applications with a focus on user experience, maintainability, and long-term value. My work spans responsive websites, Single Page Applications, cross-platform mobile apps, and robust backend APIs using modern technologies.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Core Expertise</h3>
      <ul className="list-disc ml-6">
        <li><strong>Frontend:</strong> React, React Router, Redux/Context, HTML5, CSS3, Tailwind CSS, component-driven UI, responsive design, accessibility, and performance optimization.</li>
        <li><strong>Backend:</strong> Node.js, Express, REST/GraphQL APIs, PHP, MongoDB, PostgreSQL, authentication, and cloud deployment on Vercel/Netlify/AWS.</li>
        <li><strong>Mobile Development:</strong> Cross-platform apps using Flutter and React Native, integrating native APIs, offline support, and smooth animations.</li>
        <li><strong>Design & Collaboration:</strong> Figma-driven UI, agile workflows, team collaboration, testing, CI/CD pipelines, and project documentation.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Professional Approach</h3>
      <p>
        My development workflow emphasizes clean, modular code, maintainable architecture, and measurable outcomes. I follow iterative releases, automated testing, and detailed documentation to ensure smooth handoffs and long-term scalability. I am passionate about delivering intuitive user experiences and optimizing for performance, security, and reliability.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Experience Highlights</h3>
      <ol className="list-decimal ml-6">
        <li>Built a high-traffic e-commerce platform with React frontend and Node.js backend, increasing conversion rates by 18%.</li>
        <li>Developed a cross-platform mobile app for field data capture used by 200+ daily users, integrating offline synchronization and cloud storage.</li>
        <li>Designed and shipped multiple marketing websites, admin dashboards, and SaaS products meeting strict performance budgets.</li>
        <li>Collaborated with designers and product managers to deliver apps with seamless UX and high accessibility standards.</li>
        <li>Implemented CI/CD pipelines using GitHub Actions and Docker, ensuring reliable deployments across staging and production.</li>
      </ol>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Education & Tools</h3>
      <p>
        Bachelors in Computer Engineering. Proficient with Git, Docker, Firebase, Vercel, Netlify, MongoDB, PostgreSQL, Figma, VS Code, and Linux-based development environments. Constantly exploring new technologies to improve efficiency, security, and scalability.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Personal Note</h3>
      <p>
        I am committed to delivering high-quality digital products that solve real-world problems. Whether it’s a responsive web app, a scalable backend, or a cross-platform mobile solution, I aim to create intuitive, reliable, and delightful experiences for users.
      </p>
    </section>
  );
}
