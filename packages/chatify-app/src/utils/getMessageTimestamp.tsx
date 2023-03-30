export function getMessageTimestamp(timeStamp: string) {
  const date = new Date(timeStamp);
  return date.getHours() + ":" + date.getMinutes();
}
