export function emailValidator(email) {
  const re = "^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$" 
  if (!email) return "Date of Birth field can't be empty."
  if (!re.test(email)) return 'Specific format required: YYYY-MM-DD'
  return ''
}

// using regex here is scary cause I can't read that regex string I got off web. loooking into another solution