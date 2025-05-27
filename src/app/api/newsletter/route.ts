import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json')

async function getSubscribers() {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveSubscribers(subscribers: any[]) {
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const subscribers = await getSubscribers()
    
    if (!subscribers.find((sub: any) => sub.email === email)) {
      subscribers.push({
        email,
        subscribedAt: new Date().toISOString()
      })
      await saveSubscribers(subscribers)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const subscribers = await getSubscribers()
    return NextResponse.json({ count: subscribers.length })
  } catch (error) {
    return NextResponse.json({ count: 0 })
  }
}
