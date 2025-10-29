export default function formatCreationDate(creationDate: string): string {
  const parts = creationDate.split('/');
  
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${day}.${month}.${year}`;
  }
  
  const date = new Date(creationDate);
  const formattedDay = date.getDate().toString().padStart(2, '0');
  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const formattedYear = date.getFullYear();
  return `${formattedDay}.${formattedMonth}.${formattedYear}`;
}