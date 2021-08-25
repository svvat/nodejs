import { IChamber as IChamber } from "./Chamber";
import { IPosition } from "./Position";

export interface INavigator
{
    turn(direction: number, change: number): number;
    reverse( pos: IPosition, hdg: number): IPosition;
    advance( pos: IPosition, hdg: number): IPosition;
}
export class Navigator implements INavigator
{
    plateau: IChamber;

    constructor(plateau: IChamber) {
        this.plateau = plateau;
    }

    public turn(idirection:number, change:number):number
    {
        let direction:number = idirection;
        direction += change;
        while (direction > 3) direction -= 4;
        while (direction < 0) direction += 4;
        return direction;
    }

    move(ipos:IPosition, hdg: number, speed:number):IPosition {
        let pos:IPosition = Object.assign({}, ipos);
        switch (hdg)
        {
            case 0: pos.y+=speed; break;
            case 1: pos.x+=speed; break;
            case 2: pos.y-=speed; break;
            case 3: pos.x-=speed; break;
            default:
                throw Error("Invalid Heading");
        }
        pos = this.plateau.validate(pos);
        return pos;        
    }
    reverse(pos: IPosition, hdg: number): IPosition
    {
        return this.move(pos, hdg, -1);
    }
    advance(pos: IPosition, hdg: number): IPosition
    {
        return this.move(pos, hdg, 1);
    }
}

