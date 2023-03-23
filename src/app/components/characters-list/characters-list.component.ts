import { Component } from '@angular/core';
import { Character } from 'src/app/interface/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService],
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
