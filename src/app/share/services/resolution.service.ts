import { HostListener, Injectable } from '@angular/core';

@Injectable()
export class ResolutionService {
  private MOBILE_SIZE_CONST = 720;

  widthGreaterThanMobile(): boolean {
    return window.screen.width > this.MOBILE_SIZE_CONST;
  }
}
