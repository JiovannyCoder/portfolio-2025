export interface Project {
  slug: string;
  name: string;
  description: string;
  excerpt: string;
  problemSolved: string;
  stacks: string[];
  image: string | null;
  link: string | null;
}

export interface ProjectDetails {
  name: string;
  context: string;
  problem: string;
  solution: string;
  architecture: {
    stacks: string[];
    structure: string;
  };
  technicalChallenges: string[];
  result: string;
  image: string | null;
  link: string | null;
}
