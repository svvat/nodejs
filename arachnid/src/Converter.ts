export type Dictionary = {[key: string]: number};

export interface IConverter
{
    convertDirNum(dir: number): string;
    convertDir(dir: string): number
    convertTurn(t: string): number
    convertPositionString(positionInput: string): SVGTextPositioningElement;
}


export class Converter implements IConverter
{
    hdg: Dictionary = { N: 0, E: 1, S: 2, W: 3 };

    public convertDirNum(dir: number): string
    {
        if (dir == 0 ) { return "N"};
        if (dir == 1 ) { return "E"};
        if (dir == 2 ) { return "S"};
        if (dir == 3 ) { return "W"};
        throw Error("unknown direction");
    }

    public convertDir(dir: string) : number
    {
        if (this.hdg[dir] != undefined)
            return this.hdg[dir];
        throw Error("Unknown direction");
    }
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
    public convertPositionString(positionInput:  string): Position
    {
        const position: Position;
        let positionItems = positionInput.split(' ');
        if (positionItems.length != 3)
            throw new Error("Invalid number of items in position input");
        try
        {
            position.x = Number(positionItems[0]);
            position.y = Number(positionItems[1]);
            position.hdg = this.convertDirNum(positionItems[2]);
        }
        catch (error)
        {
            throw new Error("Invalid position input");
        }
        return position;
    }
}
