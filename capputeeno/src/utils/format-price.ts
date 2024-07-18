export function formatPrice(value: number) {
  const total = value / 100;

  return total.toLocaleString('pt-br', {
    currency: 'BRL',
    style: "currency"
  })
}
