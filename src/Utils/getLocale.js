export function getLanguage () {
  return location.hash.split('?lang=')[1] || 'da'
}
