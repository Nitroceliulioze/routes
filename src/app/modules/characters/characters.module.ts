import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersListComponent } from "./components/characters-list/characters-list.component";
import { CharacterComponent } from "./components/character/character.component";
import { CharactersService } from "./services/characters.service";
import { CharactersRoutingModule } from "./characters-routing.module";
import { MyMaterialModule } from "../my-material/my-material.module";


@NgModule({
imports: [CommonModule, CharactersRoutingModule, MyMaterialModule],
declarations: [CharactersListComponent, CharacterComponent],
providers: [CharactersService]
 })

export class CharactersModule { }