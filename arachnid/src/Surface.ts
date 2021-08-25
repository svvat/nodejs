'use strict';

export interface ISurface
{
    xMax: number;
    yMax: number;
}
    export class Surface implements ISurface
    {
        xMax: number;
        yMax: number;

        public Plateau(input:string )
        {
            let positionItems = input.split(' ');
            if (positionItems.length != 2)
                throw new Error("Invalid number of items in plateau input");
            try
            {
                this.xMax = Number(positionItems[0])
                this.yMax = Number(positionItems[1]);
            }
            catch (error)
            {
                throw new Error("Invalid plateau input");
            }
        }
    }
}