export function formatNumber(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}