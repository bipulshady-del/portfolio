import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpeg';

export default function Home() {
  return (
    <section className="grid md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-1 text-center md:text-left">
        <img
          src={profile}
          alt="Profile"
          className="w-44 h-44 rounded-full object-cover mx-auto md:mx-0"
        />
      </div>

      <div className="md:col-span-2 space-y-4">
        <h1 className="text-3xl font-bold">Hello, I'm Bipul Chandra Rijal</h1>
        <p className="text-slate-300">
          Full-stack Web & Mobile App Developer — I build performant and accessible interfaces, reliable backends, and delightful products.
        </p>

        <div className="flex gap-3">
          <Link to="/projects" className="px-4 py-2 bg-cyan-600 rounded-md">
            See Projects
          </Link>
          <Link to="/bio" className="px-4 py-2 border border-slate-700 rounded-md">
            Read Bio
          </Link>
        </div>
      </div>
    </section>
  );
}
