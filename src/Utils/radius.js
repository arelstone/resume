export function calculateRadius (level, i) {
  const calc = 1 + ((level * i) + 4) / 10
  if (calc > 10) {
    return 10
  }
  return calc
}
