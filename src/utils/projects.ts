export const projects = [
  { title: "Uncle VPN", slug: "uncle-vpn" },
  { title: "xCore VPN", slug: "x-core-vpn" },
  { title: "Mos.ru", slug: "mos-ru-sport" },
  { title: "Supra", slug: "supra" },
  { title: "SberJazz", slug: "sber-jazz" },
  { title: "Калитники", slug: "kalitniki" },
] as const;

type Project = (typeof projects)[number];

export const getProject = (title: Project["title"]) => {
  const index = projects.findIndex((project) => project.title === title);

  return { index, ...projects[index] };
};

export const getNextProject = (link: string) => {
  const slug = link.replace("/projects/", "");

  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  const nextPossibleIndex = currentProjectIndex + 1;
  const index = nextPossibleIndex > projects.length - 1 ? 0 : nextPossibleIndex;

  return { index, ...projects[index] };
};
