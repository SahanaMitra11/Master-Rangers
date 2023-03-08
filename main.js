// Create canvas variable
canvas = new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_w = 350;
block_h = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_w);
        block_image_object.scaleToHeight(block_h);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image("rr1.png")
        console.log("R")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image("gr.png")
        console.log("G")
	}

	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image("yr.png")
        console.log("Y")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image("pr.png")
        console.log("P")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image("br.png")
        console.log("B")
	}

}
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	}
	


