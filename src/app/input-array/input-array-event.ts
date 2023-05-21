import { IonInput } from "@ionic/angular";
import { InputArrayComponent } from "./input-array.component";

export interface InputArrayEvent{
  source: InputArrayComponent
  sourceInput?: IonInput
  data: any[]
}