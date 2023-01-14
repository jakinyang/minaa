export const getTimeElapsed = (dateString) => {
  let returnString = ""
  const date = new Date(dateString)
  let seconds = Math.floor((new Date() - date) / 1000)
  let interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    returnString += `${interval} years `
    seconds = seconds - (interval * 31536000)
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    returnString += `${interval} months `
    seconds = seconds - (interval * 2592000)
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    returnString += `${interval} days `
    seconds = seconds - (interval * 86400)
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    returnString += `${interval} hours `
    seconds = seconds - (interval * 3600)
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    returnString += `${interval} minutes`
    seconds = seconds - (interval * 60)
  }
  return returnString
}