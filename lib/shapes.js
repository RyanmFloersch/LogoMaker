const { SummaryReporter } = require("@jest/reporters");


class Shape{
    constructor(){
        this.color='transparent';
        this.text = '';
        
    }

    setFillColor(color){
        this.color=color;
    }
    
    setText(text){
        this.text=text;
    }

    

}

class Triangle extends Shape{
    constructor(){
        super();
        this.x1 = 150;
        this.y1 = 18;
        this.x2 = 244;
        this.y2 = 182;
        this.x3 = 56;
        this.y3 = 182;
    }

    render(){
        return `<polygon points="${this.x1},${this.y1},${this.x2},${this.y2},${this.x3},${this.y3}"  fill="${this.color}" />`;
    }

}

class Square extends Shape{
    constructor(color){
        super();
        this.x =56;//130
        this.y = 18;//80
        this.width = 170;//170
        this.height = 120;//120

        
    }

    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}"  fill="${this.color}" />`;
    }

}


class Circle extends Shape{

    constructor(){
        super();
        this.x = 150;
        this.y = 100;
        this.radius = 80;
    }


    render(){
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`

    }

}


module.exports = {
    Square,
    Circle,
    Triangle

}