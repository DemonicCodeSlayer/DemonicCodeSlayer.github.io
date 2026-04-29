import { sections as part1, LEVELS } from './sections-part1';
import { sections2 as part2 } from './sections-part2';

export { LEVELS };
export const sections = [...part1, ...part2];

// Build flashcards from all sections
export const flashcards = [];
sections.forEach(section => {
  section.topics.forEach(topic => {
    if (topic.content) {
      flashcards.push({
        section: section.title,
        sectionColor: section.color,
        topic: topic.name,
        level: topic.level,
        content: topic.content,
        score: topic.score ?? null,
      });
    }
  });
});
