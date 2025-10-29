export default function getCourseDuration(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const hourText = hours === 1 ? 'hour' : 'hours';
    
    return `${hoursStr}:${minutesStr} ${hourText}`;
  }