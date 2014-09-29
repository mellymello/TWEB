function showAlert() {
    alert("Hello");
}

function init() {
    var date = new Date();
    $('.clock').text(date);
}

function Person(fn, ln, g) {
    this.firstName = fn;
    this.lastName = ln;
    this.gender = g;
}
Person.prototype.getLabel = function () {
    return "Hello " + this.firstName + " " + this.lastName + "( " + this.gender + " )";
}

function name() {
    var gender = chance.gender();
    var fn = chance.first({
        gender: gender
    });
    var ln = chance.last({
        gender: gender
    });
    var p = new Person(fn, ln, gender);
    $('.name').text(p.getLabel());
    if (gender === "Male") {
        $('.bgcolor').css("background-color", "lightblue");
        $('.bgcolor').css("color", "blue");
    } else {
        $('.bgcolor').css("background-color", "pink");
        $('.bgcolor').css("color", "red");
    }

    //now we have to display mouse x,y position on the footer
    $(document).mousemove(function (e) {
        $('.text-muted').text(e.pageX + "," + e.pageY);
    });

}


function toggle() {
    $("#namePan").toggle("slow");

}

function showRoom() {
    $.getJSON('room.json', function (jd) {
        
        $.each(jd, function (key, val) {

            $('#room').append('<p> Room: ' + val.nbr + ',' +  val.place +'</p>');
         
        });

    });
}

/*

Exemple shown by the prof

p = Person()

function Robot() {
    
    var counter = 0;
    
    this.name;
    
    this.incCounter = function() {
        counter++;
    }
    
    this.decCounter = function() {
        counter--;
    }
    
    this.getCounter = function() {
        return counter;
    }
    
}

Robot.prototype.fight = function() {
    //genericc fight
}

var r1 = new Robot();

var f = function() {}

Robot.prototype.fight = f;
*/