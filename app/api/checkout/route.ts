import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'
import { getProduct, getStripePriceId } from '@/lib/products'

export async function POST(request: Request) {
  try {
    const { productId } = await request.json()
    const product = getProduct(productId)
    if (!product) return NextResponse.json({ error: 'Invalid product' }, { status: 400 })

    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) return NextResponse.json({ error: 'Stripe is not configured yet' }, { status: 503 })

    const stripe = new Stripe(secretKey)
    const priceId = getStripePriceId(product.id)
    const lineItems = priceId
      ? [{ price: priceId, quantity: 1 }]
      : [{ price_data: { currency: 'usd', product_data: { name: product.name, description: product.description }, unit_amount: product.priceInCents, recurring: { interval: product.interval } }, quantity: 1 }]

    const origin = request.headers.get('origin') ?? 'http://localhost:3000'
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: lineItems,
      success_url: `${origin}/pricing?checkout=success`,
      cancel_url: `${origin}/pricing?checkout=cancelled`,
      allow_promotion_codes: true,
      integration_identifier: `zfile_upgrade_${Math.random().toString(36).slice(2, 10)}`,
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json({ error: 'Unable to create checkout session' }, { status: 500 })
  }
}
