function Person() {}

function Toy() {}

function Cat() {
    this.legs = 4;
}

var hans = new Person();
hans.firstName = "Hans";
hans.lastName = "Liechti";
hans.zip = "1400";

var olivier = Object.create(hans);
olivier.firstName = "Olivier";
olivier.zip = "1734";

var sacha = Object.create(olivier);
sacha.firstName = "Sacha";
sacha.toy = new Toy();
sacha.toy.description = "xbox";

var stephan = Object.create(hans);
stephan.firstName = "Stephan";
stephan.walk = function () {
    console.log("I'm wolking on sunshine ;-)");
}

var tomCat = new Cat();
tomCat.name = "TomCat";

$(function() {
    
    var visualGraph1 = new jsvis.VisualizationGraph();
    visualGraph1.addJsObjectToGraph(tomCat);
    visualGraph1.create('graph1');

    
    var visualGraph2 = new jsvis.VisualizationGraph();
    visualGraph2.addJsObjectToGraph(hans);
    visualGraph2.create('graph2');    
    
    var visualGraph3 = new jsvis.VisualizationGraph();
    visualGraph3.addJsObjectToGraph(sacha);
    visualGraph3.addJsObjectToGraph(sacha.toy);
    visualGraph3.addJsObjectToGraph(stephan);
    visualGraph3.addJsObjectToGraph(tomCat);
    visualGraph3.create('graph3');
});
