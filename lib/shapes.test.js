
const { describe } = require('yargs');
const shapes = require('./shapes');



test('Initialized Square render', () => {
    const square = new shapes.Square();
    square.setFillColor('blue');
    expect(square.render()).toEqual('<rect x="56" y="18" width="170" height="120"  fill="blue" />');
})


test('Initialized Circle render', () => {

    const circle = new shapes.Circle();
    circle.setFillColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});



test('Initialized Triangle render', () => {

    const triangle = new shapes.Triangle();
    triangle.setFillColor('yellow');
    expect(triangle.render()).toEqual('<polygon points="150,18,244,182,56,182"  fill="yellow" />');
});


