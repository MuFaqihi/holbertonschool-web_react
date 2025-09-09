type MajorCredits = {
  credits: number;
  __brand: 'MajorCredits';
};

type MinorCredits = {
  credits: number;
  __brand: 'MinorCredits';
};

function createMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: 'MajorCredits' };
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: 'MinorCredits' };
}

const major1 = createMajorCredits(3);
const major2 = createMajorCredits(4);
console.log(sumMajorCredits(major1, major2));

const minor1 = createMinorCredits(1);
const minor2 = createMinorCredits(2);
console.log(sumMinorCredits(minor1, minor2));
