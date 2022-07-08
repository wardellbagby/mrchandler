const subtitles = [
  "Might be your favorite rapper's favorite rapper",
  "Master of the running man",
  "Still hasn't called his Mom",
  "Curved, swerved. Word",
  "Still has too much free time",
  "2020 vision but can't see what he's been missing",
  "The villain just might be you",
  "Better late than I was ever",
  "Downplaying his achievements",
  "Feeling one way",
  "Bury him loose",
  "Helpless to your loving",
  "One in a trillion",
  "Counting on James Hook's hand",
  "Old Chandler had a farm",
  "Blessed",
  "I'm okay today",
  "Not so far from the truth",
];
export const getRandomSubtitle = () => {
  const index = Math.floor(Math.random() * subtitles.length);
  return subtitles[index];
};
