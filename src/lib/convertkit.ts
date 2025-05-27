// src/lib/convertkit.ts
interface ConvertKitSubscriber {
  email: string;
  first_name?: string;
  fields?: Record<string, any>;
  tags?: string[];
}

interface ConvertKitResponse {
  subscription: {
    id: number;
    subscriber: {
      id: number;
      email_address: string;
    };
  };
}

class ConvertKitService {
  private apiKey: string;
  private formId: string;
  private baseUrl = 'https://api.convertkit.com/v3';

  constructor() {
    this.apiKey = process.env.CONVERTKIT_API_KEY || '';
    this.formId = process.env.CONVERTKIT_FORM_ID || '';

    if (!this.apiKey || !this.formId) {
      console.warn('ConvertKit API key or Form ID not configured');
    }
  }

  async addSubscriber(data: ConvertKitSubscriber): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      // V4 API keys still use v3 endpoints
      const response = await fetch(`${this.baseUrl}/forms/${this.formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: this.apiKey,
          email: data.email,
          first_name: data.first_name,
          fields: data.fields,
          tags: data.tags,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`ConvertKit API error: ${error}`);
      }

      const result: ConvertKitResponse = await response.json();
      
      return {
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: result,
      };
    } catch (error) {
      console.error('ConvertKit subscription error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to subscribe',
      };
    }
  }

  async tagSubscriber(email: string, tagName: string): Promise<boolean> {
    try {
      // First, get the tag ID
      const tagResponse = await fetch(`${this.baseUrl}/tags?api_key=${this.apiKey}`);
      const tags = await tagResponse.json();
      const tag = tags.tags.find((t: any) => t.name === tagName);

      if (!tag) {
        console.error(`Tag "${tagName}" not found`);
        return false;
      }

      // Then tag the subscriber
      const response = await fetch(`${this.baseUrl}/tags/${tag.id}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: this.apiKey,
          email: email,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error tagging subscriber:', error);
      return false;
    }
  }

  async getSubscriber(email: string): Promise<any> {
    try {
      const response = await fetch(
        `${this.baseUrl}/subscribers?api_key=${this.apiKey}&email_address=${email}`
      );
      
      if (!response.ok) return null;
      
      const data = await response.json();
      return data.subscribers[0] || null;
    } catch (error) {
      console.error('Error fetching subscriber:', error);
      return null;
    }
  }

  async unsubscribe(email: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/unsubscribe`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: this.apiKey,
          email: email,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error unsubscribing:', error);
      return false;
    }
  }
}

export const convertKit = new ConvertKitService();
export type { ConvertKitSubscriber };
