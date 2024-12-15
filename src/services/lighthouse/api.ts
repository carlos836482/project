import { PAGESPEED_CONFIG, DEFAULT_OPTIONS } from './config';
import type { PageSpeedResponse } from './types';

export async function fetchPageSpeedResults(url: string): Promise<PageSpeedResponse> {
  const params = new URLSearchParams({
    url: url,
    key: PAGESPEED_CONFIG.API_KEY,
    ...DEFAULT_OPTIONS
  });

  const requestUrl = `${PAGESPEED_CONFIG.BASE_URL}?${params.toString()}`;
  
  try {
    console.log('Fetching PageSpeed results for:', url);
    const response = await fetch(requestUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('PageSpeed API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`PageSpeed API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('PageSpeed results received:', {
      url: data.id,
      score: data.lighthouseResult?.categories?.accessibility?.score
    });
    
    return data;
  } catch (error) {
    console.error('Error fetching PageSpeed results:', error);
    throw error;
  }
}