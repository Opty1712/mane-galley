"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import styles from '../styles/Sidebar.module.css';

const projects = [
  { title: 'UncleVPN', slug: 'uncle-vpn' },
  { title: 'SberJazz', slug: 'sber-jazz' },
  { title: 'Калитники', slug: 'kalitniki' }
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button 
        className={styles.menuButton} 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`}
        onClick={closeMobileMenu}
      />

      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
        <Link href="/" className={styles.logo}>M</Link>
        <nav className={styles.nav}>
          <div className={styles.menuTitle}>Проекты</div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.menuItem}
              onClick={closeMobileMenu}
            >
              {project.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}