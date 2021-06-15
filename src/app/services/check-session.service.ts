import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckSessionService {
  inSession: boolean = false;
  constructor() { }
}
