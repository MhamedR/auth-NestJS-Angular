import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public snav: any;
  constructor() { }
  /**
   * shared snav between header and  side nav
   */
  public openCloseSnav() {
    this.snav.toggle();
  }
}
