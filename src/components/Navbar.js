'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../styles/Navbar.css';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo navbar-item">
          <Link href="/">
            <img src="/informationcave-logo.png" alt="" className="navbar-large-logo" />
            <img src="/informationcave-icon.png" alt="" className="navbar-small-logo" />
          </Link>
        </div>

        <div className="navbar__search navbar-item">
          <form onSubmit={handleSearch} style={{ display: 'flex' }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <img src="/search.svg" alt="" />
            </button>
          </form>
        </div>

        <div className="navbar__menu-icon" onClick={toggleSidebar}>
          <img src="/menu-icon.svg" alt="menu" />
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar__close-icon" onClick={toggleSidebar}>
          <img src="/close-icon.svg" alt="close" />
        </div>

        <Link href="/blogs" onClick={toggleSidebar}>Blogs</Link>
      </div>

      {sidebarOpen && <div className="sidebar__overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
