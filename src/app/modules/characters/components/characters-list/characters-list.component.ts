import { Component } from '@angular/core';
import { Character } from 'src/app/modules/characters/interface/character';
import { CharactersService } from 'src/app/modules/characters/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  
})
export class CharactersListComponent {
  characters!: Character[];

  constructor(private characterService: CharactersService) {}

  getCharacter(): void {
    this.characterService
      .getCharacter()
      .then((characters) => (this.characters = characters));
  }

  ngOnInit() {
    this.getCharacter();
  }
}
