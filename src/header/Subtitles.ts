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
  "Wondering if it's worth it",
  "Really in his feelings some more",
  "Do you want to be free?",
  "Back on the day shift",
  "Doesn't want to live forever",
  "Wanting to be his best",
  "Outclassed by an O.G.",
  "Has more blessings than enemies",
  "Hit a little bit different",
  "Got some exes still cursing his name",
  "Got some verses that ain't hitting the same",
  "Waiting. Wishing. Risking it all",
  "Floating along",
  "Can he reach his nirvana?",
  "Can he leave all the trauma?",
  "Springing forward, falling back",
  "7 days painting his pictures",
  "7 days with ya",
  "Waiting for the sequel",
  "Never getting over",
  "Ready for some closure",
  "Wearing it on his sleeve",
  "Trying to be at peace",
  "Tell me what's up?",
  "Hit me up like an uppercut!",
  "Make an atheist from an Amish",
  "Make me traitorous to my momma!",
  "Shawty, you're my 7 days wonder",
  "Guess you need my number, huh?",
];
export const getRandomSubtitle = () => {
  const index = Math.floor(Math.random() * subtitles.length);
  return subtitles[index];
};
