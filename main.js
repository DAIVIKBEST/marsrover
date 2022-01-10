function add() {
background_imgTag = new Image(); //defining a variable with a new image
background_imgTag.onload = uploadBackground; //setting a fuction, onloading this variable
background_imgTag.src = background_image; //load image

rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onload = uploadrover; //setting a fuction, onloading this variable
rover_imgTag.src = rover_image; //load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);
}

function up()
{
    if(rover_y >=0)
{
    rover_y -= 10;
    console.log("when up arrow is pressed = " + rover_x + " - " +rover_y);
    uploadBackground();
    uploadrover();
}
}

function down()
{
    if(rover_y <=500)
{
    rover_y += 10;
    console.log("when down arrow is pressed = " + rover_x + " - " +rover_y);
    uploadBackground();
    uploadrover();
}
}

function left()
{
    if(rover_x >=0)
{
    rover_x -= 10;
    console.log("when left arrow is pressed = " + rover_x + " - " +rover_y);
    uploadBackground();
    uploadrover();
}
}

function right()
{
    if(rover_x <=500)
{
    rover_x += 10;
    console.log("when right arrow is pressed = " + rover_x + " - " +rover_y);
    uploadBackground();
    uploadrover();
}
}