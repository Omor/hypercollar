// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server';
import { convertKit } from '@/lib/convertkit';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Add to ConvertKit if configured
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      const result = await convertKit.addSubscriber({
        email,
        tags: ['hypercollar-website', 'newsletter'],
        fields: {
          source: 'website',
          signup_date: new Date().toISOString(),
        }
      });

      if (!result.success) {
        // Log the error but don't necessarily fail the request
        console.error('ConvertKit error:', result.message);
        
        // If it's a duplicate subscriber error, that's okay
        if (!result.message.includes('already subscribed')) {
          return NextResponse.json(
            { error: 'Failed to subscribe. Please try again.' },
            { status: 500 }
          );
        }
      }
    }

    // Also save locally as backup (optional - remove in production)
    if (process.env.NODE_ENV === 'development') {
      try {
        const filePath = path.join(process.cwd(), 'subscribers.json');
        let subscribers = [];
        
        try {
          const data = await fs.readFile(filePath, 'utf-8');
          subscribers = JSON.parse(data);
        } catch (error) {
          // File doesn't exist yet, that's okay
        }

        // Check if already subscribed
        if (!subscribers.find((sub: any) => sub.email === email)) {
          subscribers.push({
            email,
            subscribedAt: new Date().toISOString(),
          });

          await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
        }
      } catch (error) {
        console.error('Local save error:', error);
      }
    }

    return NextResponse.json({ 
      success: true,
      message: 'Thanks for subscribing! Check your email for confirmation.' 
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
