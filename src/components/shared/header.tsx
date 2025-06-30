import { useState } from 'react';
import { Container } from './container';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold tracking-tight">TipsBucket</h1>
              <span className="text-xs font-light uppercase tracking-wide">
                Smart Everyday Tips
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-yellow-300 transition duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-inner border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium hover:text-indigo-600 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
