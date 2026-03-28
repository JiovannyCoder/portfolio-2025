import data from "~/data/projects/index.json";

export default defineEventHandler((event) => {
  const projects: Project[] = [...(data as Project[])];

  return projects;
});
