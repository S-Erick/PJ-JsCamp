import { Link } from "react-router-dom";
import { useState } from "react";

const options = [
  { name: "Inicio", href: "/" },
  { name: "Empleos", href: "/empleos" },
  { name: "Empresas", href: "/empresas" },
  { name: "Salarios", href: "/salarios" },
];

const NavLinks = ({ className }) => (
  <ul className={`list-none ${className}`}>
    {options.map((option) => (
      <li key={option.name}>
        <Link to={option.href}>{option.name}</Link>
      </li>
    ))}
  </ul>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" relative flex items-center justify-between py-3 px-20">
      <Link to="/" className="flex">
        <span>⁜</span>
        <h1>DevJobs</h1>
      </Link>

      <nav className="hidden md:block">
        <NavLinks className="flex gap-8" />
      </nav>

      <div className="flex items-center gap-3">
        <button className="hidden sm:block border">Subir CV</button>
        <div className="w-8 h-8 border">{/* Profile Picture */}</div>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1b1b1b] border-b p-6 md:hidden shadow-lg z-50">
          <NavLinks className="flex flex-col gap-5" />
          <button className="mt-4 w-full border py-2 rounded sm:hidden">
            Subir CV
          </button>
        </div>
      )}
    </header>
  );
}
