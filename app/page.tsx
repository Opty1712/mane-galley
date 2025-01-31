import Image from "next/image";
import { BottomNav } from "./components";

export default function Home() {
  return (
    <div className="pb-20">
      <section className="min-h-screen py-20">
        <Image
          src="/images/me.webp"
          width={960}
          height={1280}
          priority
          alt="С днем рождения!💖"
        />
      </section>
      <section id="projects" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold mb-8">Проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be added here */}
        </div>
      </section>

      <section id="feedback" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold mb-8">Отзывы</h2>
        <div className="space-y-6">
          {/* Education content will be added here */}
        </div>
      </section>

      <section id="education" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold mb-8">Образование</h2>
        <div className="space-y-6">
          {/* Education content will be added here */}
        </div>
      </section>

      <section id="experience" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold mb-8">Опыт работы</h2>
        <div className="space-y-8">
          {/* Experience content will be added here */}
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold mb-8">Скилы</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skills content will be added here */}
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold mb-8">Контакты</h2>
        <div className="max-w-2xl">
          {/* Contacts content will be added here */}
        </div>
      </section>
      <BottomNav sections={sections} />
    </div>
  );
}

const sections = [
  { id: "projects", title: "Проекты" },
  { id: "feedback", title: "Отзывы" },
  { id: "education", title: "Образование" },
  { id: "experience", title: "Опыт работы" },
  { id: "skills", title: "Скиллы" },
  { id: "contacts", title: "Контакты" },
];
