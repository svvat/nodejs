export interface IArachnid
{
    move(command: string): boolean;
    advance(): boolean;
    turn(change:string): boolean;
    execute(order:string): boolean;
    reportPosition(): string;
}

export class Arachnid implements IArachnid
    {
    }