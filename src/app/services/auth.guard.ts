import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StorageService } from './storage.service';

export const AUTH_GUARD: CanActivateFn = (route, state) => {
  return inject(StorageService).doTokenExists();
};