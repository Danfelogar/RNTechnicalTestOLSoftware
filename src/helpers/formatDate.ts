//dependencies
import moment from 'moment';
//parsing date and try to fixing time
export function formattedDate(originalDate: string) {
  console.log({originalDate});
  //fixing logic
  const [datePart, timePart] = originalDate.split(' ');

  const [hours, minutes] = timePart.split(':').map(Number);

  const adjustedHours = Math.floor(minutes / 60);
  const adjustedMinutes = minutes % 60;
  const correctedHours = hours + adjustedHours;
  const correctedMinutes = adjustedMinutes;
  console.log({
    adjustedHours,
    adjustedMinutes,
    correctedHours,
    correctedMinutes,
  });

  const correctedTime = `${correctedHours}:${correctedMinutes
    .toString()
    .padStart(2, '0')}`;

  const correctedDate = `${datePart} ${correctedTime}`;

  return moment(correctedDate, 'DD/MM/YYYY HH:mm').format('DD/MM/YYYY h:mm A');
}
