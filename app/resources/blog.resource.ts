import type { CategoryResource } from "./category.resource";
import type { TagResource } from "./tag.resource";

export interface BlogResource {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  image?: string;
  categories: CategoryResource[];
  tags: TagResource[];
}
