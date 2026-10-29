// Skills data — derived from the centralized profile.
// This file re-exports skill categories from profile.js for backward compatibility.
import { skillCategories } from './profile';

// Flatten into the legacy format used by some components
export const skills = skillCategories.flatMap(cat =>
  cat.skills.map(name => ({ name, category: cat.name }))
);

export const categories = skillCategories.map(c => c.name);

export { skillCategories };
