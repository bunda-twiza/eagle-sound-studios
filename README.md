Eagle Sound Studios — Website
A multi-page website for Eagle Sound Studios, a music production studio and record label based in Lusaka, Zambia.

Live site: [paste your Netlify URL here once deployed]

Overview
The site serves two audiences:

Paying clients — artists, choirs, podcasters, voice-over artists

Potential signees — artists looking for a label home

It's a front-end project with real interactive JavaScript. Forms validate on the client side and show confirmation states. Real submissions, member accounts, and a database come in Phase 2.

Pages
Page	What it does
index.html	Home, artist signing form, membership preview, referral info, testimonial, newsletter
about.html	Studio story, who we work with, image carousel, values, team, numbers
services.html	Services and gear — Recording, Mixing, Mastering, Video Production
artists.html	Artist roster and signing opportunity
membership.html	Membership benefits, sign-up form, FAQ
book.html	Booking form with Google Calendar availability embed
File Structure
text
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
Each page has its own CSS file rather than one large stylesheet. This keeps page styling independent and prevents conflicts between sections.

One shared script.js runs across the whole site. Because different pages contain different elements, the JavaScript checks whether an element exists before applying logic to it — so the same file safely runs everywhere.

Tech Stack
HTML, CSS, JavaScript — no frameworks

Google Fonts — Anton (display), Montserrat (body)

Google Calendar embed — for booking availability

Netlify Forms — for form submissions

No backend yet — Phase 2 will add member login, dashboard, and a real database

The project is intentionally built with plain HTML, CSS, and JavaScript so it stays lightweight and easy to maintain.

Design System
Element	Value
Primary Gold	#F8B801
Background	#111111
Dark	#181818
Text / Paper	#F5F1E8
Secondary Text	#BDBDBD
Muted Text	#A7A7A7
Display Font	Anton
Body Font	Montserrat
Colour behaviour: dark black and cream foundation, gold as the accent. Artist signing and testimonial sections use gold as the background. Referral section is cream. Membership is dark. Footer is near-black.

Key Decisions
1. Gold used sparingly.
Early drafts had gold everywhere. It looked cheap. I pulled it back so gold only appears on buttons, borders, section numbers, and key words. Every gold element now feels intentional.

2. No membership tiers.
Early ideas had Bronze, Silver, Gold, Platinum. I killed them. Tiers make members feel ranked and create admin overhead. One membership, same perks for everyone.

3. Referrals are members-only.
The first version let anyone generate a referral code. That broke tracking. I made it members-only with a sign-up form that captures name, artist name, email, and phone. Now every referral is traceable.

4. Cash reward option.
The original referral reward was 10% off a session. I added a 50 ZMW cash alternative so members can choose what's actually useful to them.

5. Member vs non-member booking flow.
The booking page needs to look different depending on who's booking. Members should see perks applied automatically. Non-members should see a clear path to sign up. Phase 2 will detect logged-in members and personalize this.

6. Artist signing form with genre tags.
The form collects stage name, government name, email, phone, genre tags (click to select, max 5), a bio, 2–3 audio samples, and social links. The genre tag system was custom and needed several iterations to feel smooth.

JavaScript Logic
Navigation

Mobile menu opens and closes

Menu closes after selecting a link

Header responds to scroll position

Artist application

Application form opens and closes

Genre tags selectable, max 5

"Other" genre field appears when selected

Required fields validated

Email validated

2–3 audio files required

Success message on valid submission

About page

Image carousel with prev/next controls and navigation dots

Booking

Service selection

Session length selection

Date cannot be in the past

Required field validation

Confirmation message on submit

Membership

Required field validation

Confirmation message on submit

FAQ

Questions open and close

Newsletter

Email validation

Subscription confirmation

Current Form Limitation
Forms currently validate on the front end. A successful submission shows a confirmation message but is not yet wired to a live backend.

What's missing (intentional at this stage):

Database

Email notification system

Member account system

Artist application storage

Booking storage

Automatic referral tracking

What Was Hard
Keeping the design consistent.
The visual identity went through several iterations. Earlier versions looked generic. I had to push back multiple times and lock in a palette that felt right — cream, black, and gold, with gold used sparingly. Separate CSS files per page stopped styles from bleeding across sections.

Referral tracking without a backend.
The referral system looks simple. Without a database, tracking who referred who is manual. The current version uses a sign-up form. Phase 2 moves this into a real database.

The booking calendar.
A real calendar showing booked vs available dates needs a backend. For now, the booking page uses a Google Calendar embed where bookings are added manually. Phase 2 fixes this.

Balancing member and non-member experience.
The site has to serve both audiences without confusing either. Non-members need a clear path to sign up. Members need to feel their perks are already working. Getting that balance right took several iterations.

Artist application logic.
The genre-selection system needed the most iteration — the max-five rule, the conditional "Other" field, audio-file validation, and submission validation.

JavaScript across multiple pages.
One script.js shared across the whole site. Every block checks if its target element exists before running, so the same file works on every page without errors.

What's Next
Phase 1 — Front-end completion

Finish testing all JavaScript interactions

Test every page on desktop and mobile

Fix remaining UI and logic issues

Improve form error messages

Finalize responsive behaviour

Phase 2 — Backend

Real artist application submissions

Real booking submissions

Email notifications

Member registration and login

Member dashboard

Database

Phase 3 — Member system

Member accounts

Automatic membership verification

Member-only referral codes

Referral tracking

Automatic reward tracking

Session history and benefits

Phase 4 — Studio administration

Admin dashboard

Artist application management

Booking, member, and referral management

Reward tracking

Built With
AI assistance for code generation, debugging, structure, and initial copywriting.

The website was developed with help from multiple AI tools. One AI handled the initial build. Another continued development, debugged existing code, and added or refined functionality.

Concept, design direction, business logic, brand direction, and every creative decision came from me.

The AI was a tool. It wrote HTML, CSS, and JavaScript faster than I could have alone. Every business decision, every section on every page, every colour choice, and every offer came from me. The AI executed. I decided.

Author
Twiza Bunda
Creative Director
Lusaka, Zambia

