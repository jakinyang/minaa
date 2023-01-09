export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email field can't be empty."
  if (!re.test(email)) return 'Valid email address required.'
  return ''
}