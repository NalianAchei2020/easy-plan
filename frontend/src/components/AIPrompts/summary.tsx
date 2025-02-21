import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyDxSwx3qALjKav90coxCvwggl3dPh4aoUg';
const genAI = new GoogleGenerativeAI(apiKey as string);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

export const AIchatSessionForSummary = model.startChat({
  generationConfig,
  history: [],
});
