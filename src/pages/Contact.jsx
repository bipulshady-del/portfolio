import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="mb-6 text-slate-300">
          You can reach me on my social media platforms:
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <a
            href="https://www.facebook.com/profile.php?id=61578870551378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-xl font-semibold"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href="https://www.instagram.com/bipul__rijal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 p-3 rounded-xl font-semibold"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://wa.me/9813182059"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 p-3 rounded-xl font-semibold"
          >
            <FaWhatsapp /> WhatsApp Business
          </a>
          <a
            href="https://www.tiktok.com/@4x__chandre__09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 p-3 rounded-xl font-semibold"
          >
            <FaTiktok /> TikTok
          </a>
        </div>
      </div>
    </div>
  );
}