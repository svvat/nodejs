import { Converter, IConverter } from "./Converter";
import { INavigator, Navigator } from "./Navigator";
import { IChamber } from "./Chamber";
import { IPosition } from "./Position";
export interface IRobot
{
    sendCommands(command:string);
    advance();
    reverse();
    turn(change: string);
    reportPosition(): string;
    setPosition(positionInput: IPosition);
    getPosition(): IPosition;
    hdg: number;
}

export class Robot implements IRobot
{
    private position: IPosition;
    private converter: IConverter = new Converter();
    private navigator: INavigator;
    hdg: number;


    sendCommands(commands: string) {
        let nCmds=commands.length;
        for(var i=0;i<commands.length;i++) {
            let cmd = commands.charAt(i);
            this.execute(cmd);
        }
    }

    constructor(c: IConverter, n: INavigator, hdg: string)
    {
        this.converter = c;
        this.navigator = n;
        this.hdg = this.converter.convertDirToNum(hdg);
    }
    getPosition(): IPosition {
        return this.position;
    }

    setPosition(position: IPosition)
    {
        this.position = position;
    }

   
    private execute(order: string)
    {
        switch (order)
        {
            case 'L':
            case 'R':
                this.turn(order);
                break;
            case 'F':
                this.advance();
                break;
            case 'B':
                this.reverse();
                break;
            default:
            // Unknown command 
            break;
        }
    }

    advance()
    {
        this.position = this.navigator.advance(this.position, this.hdg);
    }
    reverse()
    {
        this.position = this.navigator.reverse(this.position, this.hdg);
    }
    turn(change: string)
    {
        this.hdg = this.navigator.turn(this.hdg, this.converter.convertTurn(change));
    }

    public reportPosition():string
    {
        let hdg = this.converter.convertDir(this.hdg);

        return `${this.position.x},${this.position.y},${hdg}`;
    }


}

