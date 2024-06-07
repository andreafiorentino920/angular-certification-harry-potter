import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatTimeService {
  /**Method to convert minutes to hours and minutes */
  convertMinutesToHoursAndMinutes(totalMinutes: string) {
    const minutesNumber = parseInt(totalMinutes, 10);
    if (isNaN(minutesNumber)) {
      return 'Invalid input';
    }
    const hours = Math.floor(minutesNumber / 60);
    const minutes = minutesNumber % 60;
    return `${hours}h ${minutes}min`;
  }
}
