import { Injectable } from '@angular/core';
import { Character } from '../interface/character';
import { CHARACTERS } from '../interface/data-characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  getCharacter(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }
}
