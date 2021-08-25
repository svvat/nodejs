import { IPosition } from "./Position";

export type Dictionary = {[key: string]: number};

export interface IConverter
{
    convertDir(dir: number): string;
    convertDirToNum(dir: string): number
    convertTurn(t: string): number
    convertPositionString(positionInput: string): IPosition;
}


export class Converter implements IConverter
{
    public convertDir(dir: number): string {
        if (dir == 0 ) { return "N"};
        if (dir == 1 ) { return "E"};
        if (dir == 2 ) { return "S"};
        if (dir == 3 ) { return "W"};
        throw Error("unknown direction");

    }
    public convertDirToNum(dir: string): number {
        if (this.hdg[dir] != undefined)
            return this.hdg[dir];
        throw Error("Unknown direction");
    }
    hdg: Dictionary = { N: 0, E: 1, S: 2, W: 3 };

    public convertTurn(t: string): number
    {
        if (t == 'L')
        {
            return -1;
        }
        if (t == 'R')
        {
            return 1;
        }

        throw new Error("Unknown direction change");
    }
    public convertPositionString(positionInput:  string): IPosition
    {
        let position: IPosition;
        let positionItems = positionInput.split(' ');
        if (positionItems.length != 3)
            throw new Error("Invalid number of items in position input");
        try
        {
            position.x = Number(positionItems[0]);
            position.y = Number(positionItems[1]);
        }
        catch (error)
        {
            throw new Error("Invalid position input");
        }
        return position;
    }
}
