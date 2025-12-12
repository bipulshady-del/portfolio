import React from 'react'

const data = [
  { title: 'Sajilo Ticket Nepal', desc: 'Full-stack ticket booking Website with React frontend and Node.js backend.' },
  { title: 'The Origin Tech', desc: 'Full-stack Tech company Website with React frontend and Node.js backend.'},
  {title: 'E-commerce Platform', desc: 'Scalable e-commerce platform with integrated payment gateway and user management.'},
  { title: 'Real-time Chat App', desc: 'WebSocket-based chat application with group chat and media sharing features.' },
  { title: 'Portfolio Website', desc: 'Personal portfolio showcasing projects and skills using React and Tailwind CSS.' },
  { title: 'Blog Platform', desc: 'Content management system for blogging with user authentication and SEO optimization.' },
  { title: 'Task Management Tool', desc: 'Collaborative task management application with Kanban boards and notifications.' },
  {title: 'EverestGlobalNetwork', desc: 'Corporate Website for Everest Global Network with HTML, CSS frontend and php backend.'},
  {title: 'Raj Ofsset Printers', desc: 'Corporate Printing Website for Raj Offset with HTML, CSS frontend and php backend.'},
  { title: 'Mobile Field App', desc: 'Cross-platform app for data collection and offline sync.' },
]

export default function Projects(){
  return (
    <section className="max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid gap-4">
        {data.map((p,i)=>(
          <article key={i} className="p-4 bg-slate-800 rounded-lg">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-slate-300">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
