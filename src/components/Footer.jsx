import React from "react";
import {
  Facebook,
  Instagram,
  Github,
  Youtube,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const footerLinks = {
  Platform: ["Browse Skills", "Post a Skill", "Find Collaborators", "Dashboard"],
  Support: ["Help Center", "Contact Us", "FAQs"],
  Community: ["About SkillBarter", "Blog", "Success Stories"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
};

export default function Footer() {
    const navigate =useNavigate()
  return (
    <footer className="bg-slate-800 text-slate-100">
      {/* ──────── CTA Banner ──────── */}
      <section className="max-w-5xl mx-auto px-4 pt-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Trade Skills. Build Connections.
          <br className="hidden sm:block" />
          Join the SkillBarter community today.
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          SkillBarter lets you exchange skills without money. Learn, share, and grow by
          connecting with passionate people like you.
        </p>

        <button
          type="button"
          onClick={()=>{navigate("/signup")}}
          className="mt-8 px-6 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600
                     font-semibold shadow-sm transition"
        >
          Join Now
        </button>
      </section>

      {/* Divider */}
      <hr className="my-12 border-slate-700" />

      {/* ──────── Link Grid ──────── */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid gap-12 lg:grid-cols-5">
        {/* Logo (replace later with your own SVG or Image) */}
       

        {/* Columns */}
        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ──────── Bottom Bar ──────── */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <span className="text-sm text-slate-400">
            © 2025 SkillBarter. All rights reserved.
          </span>

          <nav className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Twitter / X" className="hover:text-indigo-400">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-indigo-400">
              <Github size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-indigo-400">
              <Youtube size={16} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
