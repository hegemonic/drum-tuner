/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const deepFreeze = require('deep-freeze');

const categories = [
  {
    "category": "headquarters",
    "suggestion": "Headquarters",
    "tips": [
      "Google's headquarters is in Mountain View, California.",
      "Google has over 30 cafeterias in its main campus.",
      "Google has over 10 fitness facilities in its main campus."
    ],
    "tipPrefix": "Okay, here's a headquarters tip."
  },
  {
    "category": "history",
    "suggestion": "History",
    "tips": [
      "Google was founded in 1998.",
      "Google was founded by Larry Page and Sergey Brin.",
      "Google went public in 2004.",
      "Google has more than 70 offices in more than 40 countries."
    ],
    "tipPrefix": "Sure, here's a history tip."
  }
];

const tuning = {
  "toms": "Your toms will be tuned as %s",
  "drum": "Tune the batter lugs of your %s to %s Hz and resonant lugs to %s Hz. The fundamental note should be %s.",
  "lugs": "Here's the tuning set up for the %s. Batter lug: %s Hz, Resonant lug: %s Hz",
  "note": "What's the desired note for your %s?"
};

const content = {
  "images": [
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_GSA.2e16d0ba.fill-300x300.png",
      "Google app logo"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Logo.max-900x900.png",
      "Google logo"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Dinosaur-skeleton-at-Google.max-900x900.jpg",
      "Stan the Dinosaur at Googleplex"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Wide-view-of-Google-campus.max-900x900.jpg",
      "Googleplex"
    ],
    [
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Bikes-on-the-Google-campus.2e16d0ba.fill-300x300.jpg",
      "Biking at Googleplex"
    ]
  ],
  "link": "https://www.google.com/about/"
};

const cats = {
  "suggestion": "Cats",
  "tips": [
    "When you tune a drum, it\u0027s good to use two drum keys simultaneously.",
    "When seating the bass drum head, it\u0027s a good practice to stretch it out before tuning.",
    "When tuning the front head, increase tension in very small increments. Try using a quarter or a half of a turn at a time, no more.",
    "Whatever style and sound you are trying to achieve, generally a drum will sound best if the batter head is tuned lower (slacker) than the resonant head.",
    "If you find the overall pitch too low, go back to the bottom head and take it up another pitch level, return to tuning the top head and it will come back into tune with the bottom after a few turns of the rods.",
    "Whenever detuning or loosening a rod, always end the movement with a slight re-tightening. This enables the rod to \u0027bite\u0027 and hold while getting the others sorted.",
    "Try using a stool as your tuning base. It\u0027s a great way to dampen the batter head while working on the resonant head and you can (normally) spin the drum round as you go."
  ],
  "images": [
    [
      "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg",
      "Gray Cat"
    ]
  ],
  /**
   * This sample uses a sound clip from the Actions on Google Sound Library
   * https://developers.google.com/actions/tools/sound-library
   */
  "sounds": [
    "https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg"
  ],
  "link": "https://www.google.com/search?q=cats",
  "tipPrefix": "Alright, here's a cat tip. <audio src=\"%s\"></audio>"
};

const transitions = {
  "content": {
    "heardItAll": "Looks like you've heard all there is to know about the %s of Google. I could tell you about its %s instead.",
    "alsoCats": "By the way, I can tell you about cats too."
  },
  "cats": {
    "heardItAll": "Looks like you've heard all there is to know about cats. Would you like to hear about Google?"
  }
};

const general = {
  "heardItAll": "Actually it looks like you heard it all. Thanks for listening!",
  /** Used to give responses for no inputs */
  "noInputs": [
    "I didn't hear that.",
    "If you're still there, say that again.",
    "We can stop here. See you soon."
  ],
  "suggestions": {
    /** Google Assistant will respond to more confirmation variants than just these suggestions */
    "confirmation": [
      "Sure",
      "No thanks"
    ]
  },
  "nexttip": "Would you like to hear another tip?",
  "linkOut": "Learn more",
  "wantWhat": "So what would you like to hear about?",
  "unhandled": "Welcome to Drum Tuner! I'd rather not talk about %s. Wouldn't you rather talk about drumming? I can tell you about Google's history or its headquarters. Which do you want to hear about?"
};

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  tuning,
  categories,
  content,
  cats,
  transitions,
  general
});
