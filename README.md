**Eagle Sound Studios**

This is the website for Eagle Sound Studios, a music production studio and record label in Lusaka, Zambia.

Live site: [paste your Netlify URL here once deployed]

**What it is**

The site is built for two groups of people: paying clients (artists, choirs, podcasters, voice over artists) and artists who might want to sign with the label.

It's a front end project with real JavaScript doing actual work. Forms validate on the client side and show confirmation messages. Nothing is wired to a backend yet. Real submissions, member accounts, and a database come in Phase 2.

**Pages**

Here's what each page does.

index.html is the home page. It has the artist signing form, a membership preview, referral info, a testimonial, and a newsletter signup.

about.html covers the studio story, who we work with, an image carousel, values, team, and some numbers.

services.html lists what we offer: Recording, Mixing, Mastering, and Video Production, along with the gear.

artists.html shows the artist roster and the signing opportunity.

membership.html has the membership benefits, a sign up form, and an FAQ.

book.html is the booking form with a Google Calendar embed for availability.

**File Structure**

```
Eagle Sound Studio
│
├── index.html
├── about.html
├── services.html
├── artists.html
├── membership.html
├── book.html
│
├── css/
│   ├── home.css
│   ├── about.css
│   ├── services.css
│   ├── artists.css
│   ├── membership.css
│   └── book.css
│
├── js/
│   └── script.js
│
└── EAGLE-SOUND-STUDIOS-LOGO.png
```

Each page has its own CSS file instead of one big stylesheet. That keeps things independent and stops styles from bleeding between sections.

There's one shared script.js across the whole site. Since different pages have different elements, the JavaScript checks if an element exists before running logic on it. That way the same file works everywhere without errors.

**Tech Stack**

Plain HTML, CSS, and JavaScript. No frameworks.

Google Fonts for Anton (display) and Montserrat (body).

Google Calendar embed for booking availability.

Netlify Forms for form submissions.

No backend yet. Phase 2 adds member login, a dashboard, and a real database.

I kept it plain on purpose. It stays lightweight and easy to maintain.

**Design System**

| Element | Value |
| :--- | :--- |
| Primary Gold | #F8B801 |
| Background | #111111 |
| Dark | #181818 |
| Text / Paper | #F5F1E8 |
| Secondary Text | #BDBDBD |
| Muted Text | #A7A7A7 |
| Display Font | Anton |
| Body Font | Montserrat |

The foundation is dark black and cream with gold as the accent. Artist signing and testimonial sections use gold as the background. The referral section is cream. Membership is dark. The footer is near black.

**Key Decisions**

Gold used sparingly. Early drafts had gold everywhere. It looked cheap. I pulled it back so gold only shows up on buttons, borders, section numbers, and key words. Every gold element now feels intentional.

No membership tiers. Early ideas had Bronze, Silver, Gold, Platinum. I killed them. Tiers make members feel ranked and create admin overhead. One membership, same perks for everyone.

Referrals are members only. The first version let anyone generate a referral code. That broke tracking. I made it members only with a sign up form that captures name, artist name, email, and phone. Now every referral is traceable.

Cash reward option. The original referral reward was 10% off a session. I added a 50 ZMW cash alternative so members can choose what's actually useful to them.

Member vs non member booking flow. The booking page needs to look different depending on who's booking. Members should see perks applied automatically. Non members should see a clear path to sign up. Phase 2 will detect logged in members and personalize this.

Artist signing form with genre tags. The form collects stage name, government name, email, phone, genre tags (click to select, max 5), a bio, 2 to 3 audio samples, and social links. The genre tag system was custom and needed several iterations to feel smooth.

**JavaScript Logic**

Navigation: mobile menu opens and closes, menu closes after selecting a link, header responds to scroll position.

Artist application: form opens and closes, genre tags selectable up to 5, "Other" genre field appears when selected, required fields validated, email validated, 2 to 3 audio files required, success message on valid submission.

About page: image carousel with prev/next controls and navigation dots.

Booking: service selection, session length selection, date cannot be in the past, required field validation, confirmation message on submit.

Membership: required field validation, confirmation message on submit.

FAQ: questions open and close.

Newsletter: email validation, subscription confirmation.

**Current Form Limitation**

Forms validate on the front end for now. A successful submission shows a confirmation message but isn't wired to a live backend yet.

What's missing, and intentional at this stage:

Database

Email notification system

Member account system

Artist application storage

Booking storage

Automatic referral tracking

**What Was Hard**

Keeping the design consistent. The visual identity went through several iterations. Earlier versions looked generic. I had to push back multiple times and lock in a palette that felt right: cream, black, and gold, with gold used sparingly. Separate CSS files per page stopped styles from bleeding across sections.

Referral tracking without a backend. The referral system looks simple. Without a database, tracking who referred who is manual. The current version uses a sign up form. Phase 2 moves this into a real database.

The booking calendar. A real calendar showing booked vs available dates needs a backend. For now, the booking page uses a Google Calendar embed where bookings are added manually. Phase 2 fixes this.

Balancing member and non member experience. The site has to serve both audiences without confusing either. Non members need a clear path to sign up. Members need to feel their perks are already working. Getting that balance right took several iterations.

Artist application logic. The genre selection system needed the most iteration: the max five rule, the conditional "Other" field, audio file validation, and submission validation.

JavaScript across multiple pages. One script.js shared across the whole site. Every block checks if its target element exists before running, so the same file works on every page without errors.

**What's Next**

Phase 1, front end completion: finish testing all JavaScript interactions, test every page on desktop and mobile, fix remaining UI and logic issues, improve form error messages, finalize responsive behaviour.

Phase 2, backend: real artist application submissions, real booking submissions, email notifications, member registration and login, member dashboard, database.

Phase 3, member system: member accounts, automatic membership verification, member only referral codes, referral tracking, automatic reward tracking, session history and benefits.

Phase 4, studio administration: admin dashboard, artist application management, booking, member, and referral management, reward tracking.

**Built With**

AI assistance for code generation, debugging, structure, and initial copywriting.

The website was developed with help from multiple AI tools. One AI handled the initial build. Another continued development, debugged existing code, and added or refined functionality.

Concept, design direction, business logic, brand direction, and every creative decision came from me.

The AI was a tool. It wrote HTML, CSS, and JavaScript faster than I could have alone. Every business decision, every section on every page, every colour choice, and every offer came from me. The AI executed. I decided.

**Author**

Twiza Bunda
Creative Director
Lusaka, Zambia
