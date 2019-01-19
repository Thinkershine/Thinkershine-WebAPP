export const programmingQuotes = [
  {
    id: 0,
    quote:
      "We become authorities and experts in the practical and scientific spheres by so many separate acts and hours of work. If a person keeps faith fully busy each hour of the working day, he can count on waking up some morning to find himself one of the competent ones of his generation.",
    author: "William James",
    whoHeIs: "American Philisopher"
  }
];

export function getRandomProgrammingQuote() {
  return programmingQuotes[Math.ceil(Math.random() * programmingQuotes.length)];
}

export function getProgrammingQuoteByIndex(index) {
  return programmingQuotes[index];
}

export function getProgrammingQuotes() {
  return programmingQuotes;
}
