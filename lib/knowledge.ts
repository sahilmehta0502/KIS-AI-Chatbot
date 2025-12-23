import { loadExcelKnowledge } from "./excel";

export function retrieveKnowledge(query: string) {
  const knowledge = loadExcelKnowledge();
  const q = query.toLowerCase();

  return knowledge.filter(
    k =>
      q.includes(k.Question.toLowerCase()) ||
      k.Question.toLowerCase().includes(q)
  );
}
