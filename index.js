
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const checks = require('./lib/checks');

// Prompt user for text, up to 3 letters
// Prompt for text color using a color keyword or hexadecimal number
// Prompt for A shape using a list of circle, triangle, and square
// Prompt for a color same way as for the text.
// Create an svg named logo.svg
// Svg shows an image in 300x2000



inquirer.prompt([
    {
        name:"text",
        message:"Enter 3 characters"
    },
    {
        name:"textColor",
        message:"Enter a text color"
    },
    {
        name:"pickedShape",
        type: "list",
        message:"Choose a shape",
        choices: ['Square','Circle','Triangle']
    },
    {
        name:"shapeColor",
        message:"Enter a color for the shape"
    }


]).then((answerObj)=>{
    let shape = null;
    if(answerObj.pickedShape === 'Square'){
        shape = new shapes.Square();
        console.log('reached square');
    }else if(answerObj.pickedShape === 'Circle'){
        shape = new shapes.Circle();
        console.log('reached circle');

    }else if(answerObj.pickedShape === 'Triangle'){
        console.log('reached triangle ');
        shape = new shapes.Triangle();
    }

    shape.setFillColor(answerObj.shapeColor);
    shape.setText(answerObj.text);

    const svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answerObj.textColor}">${answerObj.text}</text>
    </svg>
    `;

      

    const fileName ='./examples/'+answerObj.text+'.svg';
    fs.writeFile(fileName, svgString, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('File written successfully');
        }
    });
    








});