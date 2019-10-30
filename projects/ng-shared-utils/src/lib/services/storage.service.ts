import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static get(index: string) {
    const obj = localStorage.getItem(index);
    return obj ? JSON.parse(obj) : null;
  }

  static set(index: string, object: any) {
    localStorage.setItem(index, JSON.stringify(object));
  }

  static getSession(index: string) {
    const obj = sessionStorage.getItem(index);
    return obj ? JSON.parse(obj) : null;
  }

  static setSession(index: string, object: any) {
    sessionStorage.setItem(index, JSON.stringify(object));
  }

  static getTemp() {
    const obj = sessionStorage.getItem('temp');
    return obj ? JSON.parse(obj) : null;
  }

  static setTemp(object: any) {
    sessionStorage.setItem('temp', JSON.stringify(object));
  }

  static clearTemp() {
    sessionStorage.removeItem('temp');
  }

  static clear() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
