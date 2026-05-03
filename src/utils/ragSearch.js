import { knowledgeBase } from '../data/knowledgeBase';

// Simple TF-IDF-like scoring with cosine similarity for RAG retrieval
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

// Stop words to ignore
const STOP_WORDS = new Set([
  'the', 'is', 'at', 'which', 'on', 'a', 'an', 'and', 'or', 'but',
  'in', 'with', 'to', 'for', 'of', 'not', 'no', 'can', 'do', 'does',
  'did', 'has', 'have', 'had', 'be', 'been', 'are', 'was', 'were',
  'will', 'would', 'could', 'should', 'may', 'might', 'shall', 'it',
  'its', 'this', 'that', 'these', 'those', 'i', 'me', 'my', 'you',
  'your', 'we', 'our', 'they', 'them', 'their', 'he', 'she', 'his',
  'her', 'what', 'how', 'when', 'where', 'why', 'if', 'then', 'so',
  'just', 'also', 'very', 'too', 'some', 'any', 'all', 'each',
]);

function getQueryTokens(text) {
  return tokenize(text).filter((w) => !STOP_WORDS.has(w));
}

// Score a knowledge base entry against query tokens
function scoreEntry(entry, queryTokens) {
  const keywordSet = new Set(entry.keywords);
  const contentTokens = new Set(tokenize(entry.content));

  let score = 0;

  for (const token of queryTokens) {
    // Direct keyword match (high weight)
    if (keywordSet.has(token)) {
      score += 3;
    }
    // Partial keyword match
    for (const kw of entry.keywords) {
      if (kw.includes(token) || token.includes(kw)) {
        score += 1.5;
        break;
      }
    }
    // Content token match
    if (contentTokens.has(token)) {
      score += 1;
    }
  }

  // Normalize by query length to prevent bias
  return queryTokens.length > 0 ? score / queryTokens.length : 0;
}

// Main RAG search function - returns the best matching response
export function searchKnowledge(query) {
  const queryTokens = getQueryTokens(query);

  if (queryTokens.length === 0) {
    return null;
  }

  const scored = knowledgeBase.map((entry) => ({
    entry,
    score: scoreEntry(entry, queryTokens),
  }));

  scored.sort((a, b) => b.score - a.score);

  // Threshold - if best score is too low, we don't have a good answer
  const THRESHOLD = 1.2;

  if (scored[0].score >= THRESHOLD) {
    // Return top match, and optionally a second if it's also relevant
    const results = [scored[0].entry.content];
    if (scored.length > 1 && scored[1].score >= THRESHOLD * 0.8) {
      results.push(scored[1].entry.content);
    }
    return results.join('\n\n');
  }

  return null; // No confident match
}
