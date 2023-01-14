export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  const date = new Date(dateString).toLocaleDateString(undefined, options)
  const time = new Date(dateString).toLocaleTimeString()
  return `${date} at ${time}`
}