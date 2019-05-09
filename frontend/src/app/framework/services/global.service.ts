import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  private currentProgramId: number;
  private token: string;
  private uid: number;

  getToken(): string {
    return this.token;
  }
  setToken(tokenValue: string) {
    this.token = tokenValue;
  }
  getCurrentProgramId(): number {
    return this.currentProgramId;
  }
  setCurrentProgramId(programId: number) {
    this.currentProgramId = programId;
  }
  getUid(): number {
    return this.uid;
  }
  setUid(uid: number) {
    this.uid = uid;
  }
}