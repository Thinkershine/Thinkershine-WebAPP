export const programmingQuotes = [
  {
    id: 0,
    quote:
      "We become authorities and experts in the practical and scientific spheres by so many separate acts and hours of work. If a person keeps faith fully busy each hour of the working day, he can count on waking up some morning to find himself one of the competent ones of his generation.",
    author: "William James",
    whoHeIs: "American Philisopher"
  },
  {
    id: 1,
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    whoHeIs: ""
  },
  {
    id: 2,
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    whoHeIs: ""
  },
  {
    id: 3,
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    whoHeIs: ""
  },
  { id: 4, quote: "Knowledge is power.", author: "Francis Bacon", whoHeIs: "" },
  {
    id: 5,
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
    whoHeIs: ""
  },
  {
    id: 6,
    quote:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "Antoine de Saint-Exupery",
    whoHeIs: ""
  },
  {
    id: 7,
    quote:
      "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    author: "Martin Fowler",
    whoHeIs: ""
  },
  {
    id: 8,
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
    whoHeIs: ""
  },
  {
    id: 9,
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    whoHeIs: ""
  },
  {
    id: 10,
    quote:
      "What one programmer can do in one month, two programmers can do in two months.",
    author: "Fred Brooks",
    whoHeIs: "Author of Mythical Man-Month"
  },
  {
    id: 11,
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrik McKenzie",
    whoHeIs: ""
  },
  {
    id: 12,
    quote:
      "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    author: "Andy Hunt",
    whoHeIs: "Author of The Pragmatic Programmer"
  },
  {
    id: 13,
    quote:
      "One of the best programming skills you can have is knowing when to walk away for awhile.",
    author: "Oscar Godson",
    whoHeIs: ""
  },
  {
    id: 14,
    quote:
      "If you haven't spent at least a month working on the same program - working 16 hours a day, dreaming about it during remaining 8 hours of restless sleep, working several nights straight through trying to eliminate that \"one last bug\" from the program - then you haven't really written a complicated computer program. And you may not have the sense that there is something exhilarating about programming.",
    author: "Edward Yourdon",
    whoHeIs: ""
  }
];

export function getRandomProgrammingQuote() {
  let min = Math.ceil(0);
  let max = Math.floor(programmingQuotes.length - 1);
  let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return programmingQuotes[randomIndex];
}

export function getProgrammingQuoteByIndex(index) {
  return programmingQuotes[index];
}

export function getProgrammingQuotes() {
  return programmingQuotes;
}
