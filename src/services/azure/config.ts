import { z } from 'zod';

const configSchema = z.object({
  cognitiveServicesEndpoint: z.string().optional(),
  cognitiveServicesKey: z.string().optional(),
  formRecognizerEndpoint: z.string().optional(),
  formRecognizerKey: z.string().optional(),
  functionAppUrl: z.string().optional(),
});

export const AZURE_CONFIG = configSchema.parse({
  cognitiveServicesEndpoint: import.meta.env.VITE_AZURE_COGNITIVE_SERVICES_ENDPOINT || '',
  cognitiveServicesKey: import.meta.env.VITE_AZURE_COGNITIVE_SERVICES_KEY || '',
  formRecognizerEndpoint: import.meta.env.VITE_AZURE_FORM_RECOGNIZER_ENDPOINT || '',
  formRecognizerKey: import.meta.env.VITE_AZURE_FORM_RECOGNIZER_KEY || '',
  functionAppUrl: import.meta.env.VITE_AZURE_FUNCTION_APP_URL || '',
});