import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-neutral-400">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-sm md:grid-cols-4 md:px-8">
        <div className="space-y-3">
          <p className="text-neutral-300">Questions? Contact us.</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Speed Test</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-neutral-300">Help Center</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Media Center</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-neutral-300">Legal</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Corporate Information</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Only on Netflix</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-neutral-300">Get the App</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">iOS</a></li>
            <li><a href="#" className="hover:underline">Android</a></li>
            <li><a href="#" className="hover:underline">TV</a></li>
            <li><a href="#" className="hover:underline">Desktop</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 md:px-8">
        <p className="text-xs">© {new Date().getFullYear()} Netflix Clone Demo. Not affiliated with Netflix.</p>
      </div>
    </footer>
  );
}
