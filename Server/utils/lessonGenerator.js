import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();


console.log('🔑 OpenAI key loaded:', process.env.OPENAI_API_KEY?.slice(0, 10) + '...');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export const generateLessonFromTopic = async (topic) => {
  if (topic.toLowerCase().includes('democracy')) {
    return `
## Democracy in Kenya

Democracy allows citizens to choose their leaders through free and fair elections.

**Key Points:**
- Rooted in the 2010 Constitution of Kenya
- Citizens have rights to vote and participate in governance
- Devolution empowers county governments
- Separation of powers ensures checks and balances
- Civil society and media hold leaders accountable

**Summary:**
Democracy empowers people to shape their government and demand accountability, making it vital to Kenya’s development.
`;
  }

  return `
## ${topic}

"${topic}" is an essential civic topic in Kenya. Understanding it helps citizens engage in democratic processes and promote national development.

**Key Points:**
- What "${topic}" means
- Why it matters to citizenship
- How it relates to Kenyan law and governance
- Ways to promote it in your daily life

**Summary:**
Learning about "${topic}" equips youth with the tools to become active, informed citizens.
`;
};