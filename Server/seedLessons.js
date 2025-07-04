// Server/seedLessons.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lesson from './models/Lesson.js';

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);
console.log('🛢️ Connected to MongoDB');

const lessons = [
  {
    topic: 'Democracy in Kenya',
    content: `
## Democracy in Kenya

Democracy allows citizens to choose their leaders through free and fair elections.

**Key Points:**
- Based on the Constitution of Kenya (2010)
- Citizens have rights to vote and run for office
- Separation of powers ensures accountability
- Devolution gives counties control over local governance

**Summary:** Democracy empowers the people to shape their government and hold leaders accountable.`
  },
  {
    topic: 'Human Rights',
    content: `
## Human Rights

Human rights are the freedoms and protections everyone is entitled to.

**Key Points:**
- Protected under the Bill of Rights
- Includes life, dignity, privacy, equality, education
- No one can be discriminated against
- Citizens can challenge violations in court

**Summary:** Understanding your rights helps you defend yourself and advocate for others.`
  },
  {
    topic: 'The Rule of Law',
    content: `
## The Rule of Law

The rule of law means everyone is subject to the law, no matter their position.

**Key Points:**
- No one is above the law
- Leaders must follow the Constitution
- Courts interpret and enforce laws fairly
- Laws protect both citizens and institutions

**Summary:** The rule of law guards against abuse of power and ensures justice for all.`
  }
];

await Lesson.insertMany(lessons);
console.log('✅ Lessons seeded');
process.exit();