import { expect } from 'chai';
import { Converter } from '../Converter';
import { INavigator, Navigator } from '../Navigator';
import { IChamber, Chamber } from '../Chamber';
import { IRobot, Robot } from '../Robot';
import { IPosition } from '../Position';

describe('Robot', () => {
    let plateau: IChamber = new Chamber(10, 10);
    let navigator : INavigator =  new Navigator(plateau);
    let robot: IRobot = new Robot(new Converter(), navigator, "N");
    it('can be initialized', () => {
        let robot: IRobot = new Robot(new Converter(), navigator, "N");
        expect(robot).to.not.null;
    });
    it('can be positioned', () => {
        robot.setPosition({ x: 1, y: 1});
        expect(robot.reportPosition()).to.equal("1,1,N");
    });
    it('can move forward', () => {

        robot.setPosition({ x: 1, y: 1});
        robot.advance();
        expect(robot.reportPosition()).to.equal("1,2,N");
    });
    it('can reverse', () => {

        robot.setPosition({ x: 5, y: 4});
        robot.reverse();
        expect(robot.reportPosition()).to.equal("5,3,N");
    });
});