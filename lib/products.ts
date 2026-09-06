export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  interval: 'month' | 'year'
}

export const PRODUCTS: Product[] = [
  { id: 'zfile-pro-monthly', name: 'Pro', description: 'For creators and professionals', priceInCents: 1200, interval: 'month' },
  { id: 'zfile-team-monthly', name: 'Team', description: 'For growing teams', priceInCents: 2900, interval: 'month' },
]

export function getProduct(id: string) {
  return PRODUCTS.find((product) => product.id === id)
}

export function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceInCents / 100)
}

export function getStripePriceId(productId: string) {
  return process.env[`STRIPE_PRICE_${productId.toUpperCase().replaceAll('-', '_')}`]
}
