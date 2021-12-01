import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { EndGameStaticsComponent } from "./end-game-statics/end-game-statics.component";

@NgModule({
    declarations:[EndGameStaticsComponent,CardComponent],
    exports:[EndGameStaticsComponent,CardComponent]
})

export class ComponentModule{}