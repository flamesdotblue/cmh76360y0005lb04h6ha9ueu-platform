import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Row from './components/Row';
import Footer from './components/Footer';

const rows = [
  {
    title: 'Trending Now',
    items: [
      'https://images.unsplash.com/photo-1542204637-e67bc3bdbc8b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522120692260-2f73a3e91f16?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535016120720-4b17c3b72dc7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542204637-595f628f9c43?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    title: 'Top Picks For You',
    items: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485846291079-6a055c88698a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    title: 'New Releases',
    items: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517604921445-7c4c3959c5c6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    title: 'Because You Watched Sci‑Fi',
    items: [
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main>
        <Hero />
        <section className="relative z-10 -mt-24 space-y-10 pb-20">
          {rows.map((row) => (
            <Row key={row.title} title={row.title} items={row.items} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
