import { expect } from 'chai';
import { Converter } from '../Converter';
import { INavigator, Navigator } from '../Navigator';
import { IChamber, Chamber } from '../Chamber';
import { IRobot, Robot } from '../Robot';
import { IPosition, Position } from '../Position';

describe('Navigator', () => {
    let plateau: IChamber = new Chamber(10, 10);
    let navigator : INavigator =  new Navigator(plateau);
    let x0 = 4;
    let y0 = 5;
    it('can be initialized', () => {
        expect(navigator).to.not.null;
    });
    it('can turn right', () => {
        let hdg = navigator.turn(0, 1);
        expect(hdg).to.equal(1);
        hdg = navigator.turn(hdg, 1);
        expect(hdg).to.equal(2);
        hdg = navigator.turn(hdg, 1);
        expect(hdg).to.equal(3);
        hdg = navigator.turn(hdg, 1);
        expect(hdg).to.equal(0);
    });
    it('can turn left', () => {
        let hdg = navigator.turn(0, -1);
        expect(hdg).to.equal(3);
        hdg = navigator.turn(hdg, -1);
        expect(hdg).to.equal(2);
        hdg = navigator.turn(hdg, -1);
        expect(hdg).to.equal(1);
        hdg = navigator.turn(hdg, -1);
        expect(hdg).to.equal(0);
    });
    it('can turn advance North', () => {
        let pos0: IPosition = new Position(x0, y0);
        let pos: IPosition = navigator.advance(pos0, 0);
        expect(pos.x).to.equal(pos0.x);
        expect(pos.y).to.equal(pos0.y+1);
    });
    it('can turn advance East', () => {
        let pos0: IPosition = new Position(x0, y0);
        let pos: IPosition = navigator.advance(pos0, 1);
        expect(pos.x).to.equal(pos0.x+1);
        expect(pos.y).to.equal(pos0.y);
    });
});