import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Send } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#F6F6F2]/80 backdrop-blur-md border-b border-gray-200/50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg text-white transform transition-transform group-hover:rotate-12">
              <Send size={20} fill="white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Emp360</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#employers" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">For Employers</a>
            <a href="#recruiters" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">For Recruiters</a>
            <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Reviews</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How It Works</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button size="sm">Book a Demo</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};