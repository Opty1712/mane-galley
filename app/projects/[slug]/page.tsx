import { notFound } from "next/navigation";

const projects = {
  "uncle-vpn": {
    title: "UncleVPN",
    description: "Описание проекта UncleVPN...",
  },
  "sber-jazz": {
    title: "SberJazz",
    description: "Описание проекта SberJazz...",
  },
  kalitniki: {
    title: "Калитники",
    description: "Описание проекта Калитники...",
  },
} as const;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-gray-600">{project.description}</p>
    </div>
  );
}

export async function generateStaticParams() {
  // Return an array of objects with the `slug` parameter for each project
  return Object.keys(projects).map((project) => ({
    slug: projects[project as keyof typeof projects],
  }));
}
