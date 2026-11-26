export interface BirthdayPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}

export interface BirthdayContent {
  recipientName: string;
  shortDate: string;
  fullDate: string;
  senderNames: readonly string[];
  senderLine: string;
  senderDotsLine: string;
  introEyebrow: string;
  introButtonLabel: string;
  skipIntroLabel: string;
  promptTitle: string;
  promptQuestion: string;
  promptYesLabel: string;
  promptNoLabel: string;
  promptStickerSrc: string;
  heroTitle: string;
  heroSubtitle: string;
  celebrationButtonLabel: string;
  letterTitle: string;
  letterSealLabel: string;
  letterParagraphs: readonly string[];
  letterClosing: string;
  letterButtonLabel: string;
  galleryTitle: string;
  gallerySubtitle: string;
  galleryButtonLabel: string;
  finaleTitle: string;
  finaleSubtitle: string;
  finaleClosingLine: string;
  photos: readonly BirthdayPhoto[];
  audioSrc: string;
}

export const birthdayContent: BirthdayContent = {
  recipientName: "Vaatsal Bhai",
  shortDate: "27 Nov 2026",
  fullDate: "27 November 2026",
  senderNames: ["Meet", "Devansh", "Tej", "Dhruv", "Bhumi", "Ronit"],
  senderLine: "Meet, Devansh, Tej, Dhruv, Bhumi & Ronit",
  senderDotsLine: "Meet • Devansh • Tej • Dhruv • Bhumi • Ronit",
  introEyebrow: "A little surprise is loading for…",
  introButtonLabel: "Open your surprise",
  skipIntroLabel: "Skip intro",
  promptTitle: "I have made something for you",
  promptQuestion: "Do you wanna see it ?",
  promptYesLabel: "YES",
  promptNoLabel: "NO",
  promptStickerSrc: "/GIF/Shinchan.gif",
  heroTitle: "Happy Birthday, Vaatsal Bhai!",
  heroSubtitle: "Today is all about you, bhai.",
  celebrationButtonLabel: "There's a message for you",
  letterTitle: "A note from your people",
  letterSealLabel: "For Vaatsal Bhai",
  letterParagraphs: [
    "Vaatsal Bhai,",
    "Happy birthday, bhai! Life is simply more fun with you around. From random plans and endless laughs to the memories we keep bringing up, you make every moment better.",
    "We hope this year brings you good health, bigger wins, new adventures, and everything you've been working towards. Keep smiling, keep winning, and never lose that madness. No matter what life throws your way, you've got your people standing right beside you.",
    "Here's to more laughs, more plans, more unforgettable memories, and an amazing year ahead. Have the best one, bhai!",
  ],
  letterClosing: "With lots of love,",
  letterButtonLabel: "Relive the memories",
  galleryTitle: "A few memories, a lifetime of stories",
  gallerySubtitle: "Some moments deserve their own little corner.",
  galleryButtonLabel: "See the final surprise",
  finaleTitle: "One big birthday hug from all of us.",
  finaleSubtitle: "With lots of love, your people.",
  finaleClosingLine: "Happy Birthday, Vaatsal Bhai!",
  // To add or change the note under any person's photo, edit that photo's `caption` string below.
  // Example: caption: "Always bringing the best energy!"
  photos: [
    {
      id: "photo-01",
      src: "/images/photo-01.jpg",
      alt: "Vaatsal Bhai and all six friends smiling together in a group selfie",
      caption: "",
      objectPosition: "center 24%",
    },
    {
      id: "photo-02",
      src: "/images/photo-02.jpg",
      alt: "Vaatsal Bhai sitting side by side with a close friend",
      caption: "",
      objectPosition: "center 20%",
    },
    {
      id: "photo-03",
      src: "/images/photo-03.jpg",
      alt: "Vaatsal Bhai standing with a friend under a floral doorway arch",
      caption: "",
      objectPosition: "center 32%",
    },
    {
      id: "photo-04",
      src: "/images/photo-04.jpg",
      alt: "Vaatsal Bhai and a friend sitting together by a fountain",
      caption: "",
      objectPosition: "center 30%",
    },
    {
      id: "photo-05",
      src: "/images/photo-05.jpg",
      alt: "Vaatsal Bhai and a friend smiling under Happy Birthday balloons",
      caption: "",
      objectPosition: "center 44%",
    },
    {
      id: "photo-06",
      src: "/images/photo-06.jpg",
      alt: "Candid portrait of Vaatsal Bhai smiling outdoors in the evening",
      caption: "",
      objectPosition: "center 28%",
    },
    {
      id: "photo-07",
      src: "/images/photo-07.jpg",
      alt: "Smiling candid moment of Vaatsal Bhai with a flower tucked in his hair",
      caption: "",
      objectPosition: "center 28%",
    },
    {
      id: "photo-08",
      src: "/images/photo-08.jpg",
      alt: "Vaatsal Bhai playing a blue acoustic guitar",
      caption: "",
      objectPosition: "center 25%",
    },
    {
      id: "photo-09",
      src: "/images/photo-09.jpg",
      alt: "Vaatsal Bhai and a friend posing in front of birthday balloons",
      caption: "",
      objectPosition: "center 22%",
    },
    {
      id: "photo-10",
      src: "/images/photo-10.jpg",
      alt: "The whole friend group gathered with Vaatsal Bhai under Happy Birthday balloons",
      caption: "",
      objectPosition: "center 42%",
    },
    {
      id: "photo-11",
      src: "/images/photo-11.jpg",
      alt: "Portrait of Vaatsal Bhai smiling in a blue t-shirt",
      caption: "",
      objectPosition: "center 18%",
    },
  ],
  audioSrc: "/audio/birthday-track.mp3",
};
