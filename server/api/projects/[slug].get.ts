import cvBuilderProject from "~/data/projects/cv-builder.json";
import goingToItasyProject from "~/data/projects/going-to-itasy.json";
import haritechAgencyProject from "~/data/projects/haritech-agency.json";
import raphAndCoProject from "~/data/projects/raph-co.json";
import raphEmploiProject from "~/data/projects/raph-emploi.json";
import pmdpProject from "~/data/projects/pmdp.json";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  const projectsMap = new Map<string, ProjectDetails>();

  projectsMap.set("cv-builder", cvBuilderProject as ProjectDetails);
  projectsMap.set("going-to-itasy", goingToItasyProject as ProjectDetails);
  projectsMap.set("haritech-agency", haritechAgencyProject as ProjectDetails);
  projectsMap.set("raph-co", raphAndCoProject as ProjectDetails);
  projectsMap.set("raph-emploi", raphEmploiProject as ProjectDetails);
  projectsMap.set("pmdp", pmdpProject as ProjectDetails);

  if (!projectsMap.has(slug!)) {
    throw createError({
      status: 404,
      statusText: "Project not found",
    });
  }

  return projectsMap.get(slug!);
});
