"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/BottomNav.module.css';

const sections = [
  { id: 'projects', title: 'Проекты' },
  { id: 'education', title: 'Образование' },
  { id: 'experience', title: 'Опыт работы' },
  { id: 'skills', title: 'Скилы' },
  { id: 'contacts', title: 'Контакты' }
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.bottomNav}>
      {sections.map(({ id, title }) => (
        <button
          key={id}
          className={`${styles.navItem} ${activeSection === id ? styles.active : ''}`}
          onClick={() => scrollToSection(id)}
        >
          {title}
        </button>
      ))}
    </nav>
  );
}