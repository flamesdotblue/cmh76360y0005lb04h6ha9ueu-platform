import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-extrabold tracking-tight text-red-600">NETFLIX</div>
          <nav className="hidden gap-6 text-sm text-neutral-200 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">TV Shows</a>
            <a href="#" className="hover:text-white">Movies</a>
            <a href="#" className="hover:text-white">New & Popular</a>
            <a href="#" className="hover:text-white">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-neutral-200">
          <button aria-label="Search" className="rounded p-2 hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Notifications" className="rounded p-2 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 rounded bg-white/10 px-3 py-1.5 text-sm font-medium hover:bg-white/20">
            <User className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
