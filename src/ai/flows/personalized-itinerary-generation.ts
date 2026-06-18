'use server';
/**
 * @fileOverview A Genkit flow for generating personalized luxury travel itineraries for Sri Lanka.
 *
 * - generatePersonalizedItinerary - A function that handles the itinerary generation process.
 * - PersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - PersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedItineraryInputSchema = z.object({
  travelerPreferences: z
    .string()
    .describe(
      'Detailed preferences of the luxury traveler, including interests like wildlife, relaxation, cultural experiences, adventure, food, specific regions, duration, and any other relevant details. Example: "I want a 7-day itinerary focusing on wildlife safaris, ancient cultural sites, and a few days of relaxation on a pristine beach. I enjoy luxury accommodations and fine dining."'
    ),
});
export type PersonalizedItineraryInput = z.infer<
  typeof PersonalizedItineraryInputSchema
>;

const ItineraryActivitySchema = z.object({
  name: z.string().describe('Name of the activity.'),
  time: z
    .string()
    .describe('Recommended time for the activity (e.g., "Morning", "Afternoon", "Full Day").'),
  details: z.string().describe('Further details or description of the activity.'),
});

const ItineraryDaySchema = z.object({
  dayNumber: z.number().describe('The day number in the itinerary.'),
  theme: z.string().describe('A short theme or highlight for the day.'),
  location: z.string().describe('The primary location for the day.'),
  description: z.string().describe('A detailed description of the day\'s plan and experiences.'),
  activities: z.array(ItineraryActivitySchema).describe('List of activities planned for the day.'),
});

const PersonalizedItineraryOutputSchema = z.object({
  title: z.string().describe('A captivating title for the personalized itinerary.'),
  overview: z.string().describe('A brief, enticing overview of the entire journey.'),
  durationDays: z.number().describe('The total number of days for the itinerary.'),
  itinerary: z.array(ItineraryDaySchema).describe('A detailed day-by-day breakdown of the itinerary.'),
  accommodationSuggestions: z
    .string()
    .describe(
      'Suggestions for luxury accommodations or types of stays relevant to the itinerary, emphasizing unique or boutique options.'
    ),
  travelTips: z
    .string()
    .describe('Practical luxury travel tips relevant to the itinerary (e.g., packing, best time to travel, cultural etiquette).'),
});
export type PersonalizedItineraryOutput = z.infer<
  typeof PersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: PersonalizedItineraryInput
): Promise<PersonalizedItineraryOutput> {
  return personalizedItineraryFlow(input);
}

const itineraryPrompt = ai.definePrompt({
  name: 'personalizedItineraryPrompt',
  input: {schema: PersonalizedItineraryInputSchema},
  output: {schema: PersonalizedItineraryOutputSchema},
  prompt: `You are an expert luxury travel planner for Ceylon Cozy, specializing in bespoke Sri Lankan journeys.
Your task is to create a detailed, personalized travel itinerary based on the user's preferences.
Focus on delivering a premium, unforgettable experience, highlighting the unique beauty and luxury offerings of Sri Lanka.
Ensure the itinerary is structured, engaging, and covers all aspects mentioned in the preferences.

User Preferences: {{{travelerPreferences}}}

Generate an itinerary that embodies the spirit of Ceylon Cozy, focusing on high-end experiences, unique insights, and seamless luxury.`,
});

const personalizedItineraryFlow = ai.defineFlow(
  {
    name: 'personalizedItineraryFlow',
    inputSchema: PersonalizedItineraryInputSchema,
    outputSchema: PersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await itineraryPrompt(input);
    return output!;
  }
);
