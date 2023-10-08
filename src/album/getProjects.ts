import AriesSZN from "../artwork/Aries SZN.png";
import DogDays from "../artwork/Dog Days.png";
import SevenDaysWonder from "../artwork/7 Days Wonder.png";
import SevenDaysLater from "../artwork/7 Days Later.png";
import SevenDaysAfter from "../artwork/7 Days After.png";
import Uppercut from "../artwork/Uppercut.png";
import { Project } from "./Project";
import { DateTime } from "luxon";

const projects: Project[] = [
  {
    type: "single",
    released: DateTime.fromObject({ year: 2023, month: 7, day: 21 }),
    title: "Uppercut",
    short_description:
      "A song for the summer you can play in the winter, too. Hit me up!",
    long_description: `The first single from my soon-to-be-released next album: a collaboration with this wonderful producer named HitDawg. This that joint you play at the BBQ and your uncle says "Ayy, who's this young blood?" until he hears me say "fucked in your vestibule" and makes you turn if off.
    
    It's FIRE up until that point, though.`,
    colors: {
      background: "#03aaf0",
      text: "#212121",
    },
    image: Uppercut,
    links: {
      spotify:
        "https://open.spotify.com/track/0HG8I3BXYWqntSDyxmIfaI?si=2dd6deb03ea343dd",
      apple_music:
        "https://music.apple.com/us/album/uppercut-feat-hitdawg/1696412248?i=1696412249",
    },
  },
  {
    type: "album",
    released: DateTime.fromObject({ year: 2023, month: 1, day: 23 }),
    title: "7 Days After",
    short_description:
      "The end of the trilogy but not the end of Mr. Chandler.",
    long_description: `For a 7 Days album, this one sure did take more iteration than I thought it would.
    
    When I sat down and made this album, I couldn't ever have seen where I'd go with it. I tell people all the time, "Hey, feel free to listen to my music, but it's really sad so be ready for that!" Few people quite realize exactly what I mean by that, especially after Dog Days.
    
    Well, let's not get it twisted; this is a sad album. Not quite how 7 Days Later was a sad album but...well, you'll see what I mean soon enough.
    
    That being said, this one is feeling pretty final. It's been 8 years since the first 7 Days, and I think it's time to branch out more and let this end with a trilogy. So, this will likely be the last 7 Days I ever make.
    
    So you know ya boy had to go out with a banger! 
    `,
    colors: {
      background: "#293338",
      text: "#f5f5f5",
    },
    image: SevenDaysAfter,
    links: {
      spotify: "https://open.spotify.com/album/60x07v5WsrN6bK2smTnRYb",
      apple_music:
        "https://music.apple.com/us/album/7-days-after/1661082164?app=music",
      soundcloud: "https://soundcloud.com/mr-chandler/sets/7-days-after",
      bandcamp: "https://mrchandler.bandcamp.com/album/7-days-after",
    },
  },
  {
    type: "ep",
    released: DateTime.fromObject({ year: 2021, month: 3, day: 30 }),
    title: "Aries SZN",
    short_description:
      "A birthday present from me to you. I got you a 3-piece to celebrate.",
    long_description: `Happy birthday to me.
    
    Imagine this: it's 2021 and you're an entire year through a pandemic with no end in sight. You hop online and check Discord, and WHAM, @awave drops a little three-piece combo on you with some of the sickest beats you've ever heard in your LIFE. You haven't written a song in months and you're itching to make something sonically new.
    
    What do you do?
    
    1. Go back to playing video games?
    2. Write a new app?
    3. Drop one of the hottest EPs of all time?
    
    I obviously chose none of those and instead dropped Aries SZN. I can honestly say I've never made anything that sounds quite like this and I'm not even sure I could do it again if I tried. It's short but so very sweet.`,
    colors: {
      background: "#c9ad7f",
      text: "#212121",
    },
    image: AriesSZN,
    links: {
      spotify: "https://open.spotify.com/album/2584fVnDZNO6fnYU661Dgq",
      apple_music:
        "https://music.apple.com/us/album/aries-szn-single/1560447681",
      soundcloud: "https://soundcloud.com/mr-chandler/sets/aries-szn",
    },
  },
  {
    type: "ep",
    released: DateTime.fromObject({ year: 2019, month: 7, day: 22 }),
    title: "Dog Days",
    short_description:
      "Released on the same day I got married. Come and fall in love like I did.",
    long_description: `Ya boy went and fell in love.
    
    Yeah, I got sappy on you. So what? I married the love of my life in 2019 and like any true artist does, I dropped this album the same day I got married.
    
    Nothing quite like telling your soon-to-be-wife hold on a second while you make sure all the social media posts announcing the album go out at the right time.
    
    I've heard all of the "The Big Day" comparisons already so please spare me.
    
    This is good ol' home-fashion, poppy, lovey-dovey, summertime music. This is what they would've played on the ride to summer camp while you eye that little cutie you're hoping to make your acquitance that's a few rows ahead on you on the bus.
    
    Here's to your love story.`,
    colors: {
      background: "#25c6da",
      text: "#212121",
    },
    image: DogDays,
    links: {
      spotify: "https://open.spotify.com/album/6vZhSRf3uirfTA9eCF2JIo",
      apple_music: "https://music.apple.com/us/album/dog-days-ep/1470322319",
      soundcloud: "https://soundcloud.com/mr-chandler/sets/dog-days",
      bandcamp: "https://mrchandler.bandcamp.com/album/dog-days",
    },
  },
  {
    type: "album",
    released: DateTime.fromObject({ year: 2018, month: 1, day: 7 }),
    title: "7 Days Later",
    short_description:
      "An exploration of depression from a man who still hasn't figured it out.",
    long_description: `Hey, y'all. It's been a while, huh? 7 Days Wonder feels like a lifetime ago. It's honestly been just over two years. When I released 7 Days Wonder, I swear I had all intentions of putting out another album in 2016. I had two albums made in 2017, to be honest. Neither felt right.

    It's not quite my stylo to revisit the same topics musically, and that's why I didn't. 7 Days Wonder was made in seven days and that was the whole point of it. I hadn't released any new projects in three years at that point and I felt that I didn't want to completely drop off the face of the earth.
    
    7 Days Later is different, though. To start with, it wasn't made in seven days. It was about a month and a half from thought to mixed and mastered. Instead of being the story of my life in a typical, albeit sad, week, 7 Days Later is a loose chronicle of my depression. I was in a not-so-bright place for a while there, and while I wanted to just wallow in it and become it, I know I needed to find a little sunshine to make my days a bit brighter.
    
    Enter 7 Days Later.
    
    This album is honest. Easily my most honest to date. I tossed and turned on whether I should release it or just keep it stored in my archives to tweet about 4 years from now at 4am. In a post Lemonade and 4:44 world, I knew what I had to do.
    
    This album helped me. I hope it helps you, too.`,
    colors: {
      background: "#212121",
      text: "#f5f5f5",
    },
    image: SevenDaysLater,
    links: {
      spotify: "https://open.spotify.com/album/7cCOXikhjkA9JEcBlcgCej",
      apple_music: "https://music.apple.com/us/album/7-days-later/1331569701",
      soundcloud: "https://soundcloud.com/mr-chandler/sets/7-days-later-1",
      bandcamp: "https://mrchandler.bandcamp.com/album/7-days-later",
    },
  },
  {
    type: "album",
    released: DateTime.fromObject({ year: 2015, month: 12, day: 21 }),
    title: "7 Days Wonder",
    short_description: "The one that started it all: created in 7 days.",
    long_description: `An album created in 7 days.

    @hobbes-duende on production, what a guy!
    
    I'd like to talk more about this. The whole idea for this tape was extremely last minute. I was playing around on my phone, messing around on Reddit when I thought "Man, it's been like 3 years since I released a project. I should do something."
    
    I came across @hobbes-duende post. I remember it was 9 tracks long and I thought I would rap over every track and just call it 9 Days Wonder. I ended deciding against that because it sort of loses the neatness of having every track named after a day of the week. (Unless you know of 2 secret days of the week. Maybe...)
    
    That being said, I remember I listened to the first two tracks of @hobbes-duende 's tape and figured "Hey, I'll know these first two tracks go hard, I'll just get the whole tape and listen to the rest when I'm ready to write on them."
    
    And that's exactly what I did.
    
    I love the dualness of this tape, honestly. It's title is a reference, of course, to the phrase Nine Days' Wonder, meaning something that only holds attention for a short while. So, a tape made in 7 days that'll only be popular for 7 days. How neat!
    
    Of course, as a rapper, I'd like for my tracks to have more resonance among my listeners and to stay in rotation for longer, but you never get to choose how long someone will listen to your joints, no matter how much work you put into it.
    
    There's a lot of inspiration on this tape, but for every day I drew inspiration from how I felt overall that particular day. That's probably pretty obvious, but I said it anyway.
    
    I sincerely hope that you enjoy this. Even though it was made in 7 days, I did put as much time as I could into it.
    
    Don't worry, the next release will be on its way soon enough. Enjoy this until then.`,
    colors: {
      background: "#455a64",
      text: "#f5f5f5",
    },
    image: SevenDaysWonder,
    links: {
      spotify: "https://open.spotify.com/album/4GtgFtIhcUbJr2Erc6Simg",
      apple_music: "https://music.apple.com/us/album/7-days-wonder/1471725178",
      soundcloud: "https://soundcloud.com/mr-chandler/sets/7-days-wonder",
      bandcamp: "https://mrchandler.bandcamp.com/album/7-days-wonder",
    },
  },
];

export const getProjects = async () => {
  return projects.sort((a, b) => {
    if (a.released.toMillis() === b.released.toMillis()) {
      return 0;
    }

    if (a.released > b.released) {
      return -1;
    }

    return 1;
  });
};
