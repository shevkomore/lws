import { InfoLabel } from "./info-label";


export interface IndexedInfoLabel extends InfoLabel{
  index:number
}

export function indexInfoLabel(infoLabel: InfoLabel, index: number): IndexedInfoLabel{
    let res = {title: "", description: "", index: index}
    Object.assign<IndexedInfoLabel, InfoLabel>(res, infoLabel)
    return res
}