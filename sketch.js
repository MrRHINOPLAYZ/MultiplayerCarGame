var ball;
var database
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var deref=database.ref('ballposition')
    deref.on("value",readdata)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ballposition").set({
        x:ball.x+x,
        y:ball.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readdata(data){
    var position=data.val()
 ball.x=position.x
 ball.y=position.y
}


