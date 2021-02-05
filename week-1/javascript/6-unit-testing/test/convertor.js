

/**
 *
 *
 *  test suite-1
 *
 *      test-case-1
 *      test-case-2
 *
 *
 *  test suite-2
 *
 *      test-case-1
 * *    test-case-2
 *
 */

/**
 * 
 *  Unit Testing => AAA
 * 
 *    A ==> Arrange
 *    A ==> Act
 *    A ==> Assert
 * 
 */


// UNIT
const converter = require('../app/convertor')
const expect = require('chai').expect;

describe('color code convertor', () => {

    describe('RGB to HEX conversion', () => {
        it('converts the basic colors', () => {
            var redHex = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex = converter.rgbToHex(0, 0, 255);
            expect(redHex).to.equal('ff0000')
            expect(greenHex).to.equal('00ff00')
            expect(blueHex).to.equal('0000ff')
        })
    })

    describe('HEX to RGB conversion', () => {
        it('converts the basic colors', () => {
            var red = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue = converter.hexToRgb("0000ff");

            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        })

    })

});