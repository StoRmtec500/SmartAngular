
export interface ICmdAction{
    () : void;   
}


export class SidePanelItem{
    title: string;
    evt: ICmdAction;
}