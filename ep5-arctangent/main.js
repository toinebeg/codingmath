 window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		centerX = width / 2,
		centerY = height / 2,
        xRadius = width/2,
        yRadius = height/2,
		xangle = 0,
		xspeed = .01,
        yangle = 0,
		yspeed = .031,
        x,y,
		
		arrowX = centerX,
		arrowY = centerY,
		mousePositionX, mousePositionY,
		dx,dy,
		arrowAngle = 0

		render()

		function render(){
			context.clearRect(0, 0, width, height);
			arrowX = centerX + Math.cos(xangle) * xRadius
			arrowY = centerY + Math.sin(yangle) * yRadius
			dx = mousePositionX - centerX;
			dy = mousePositionY - centerY;
			arrowAngle = Math.atan2(dy, dx);
			drawArrow(context,arrowX,arrowY,arrowAngle)
			xangle += xspeed
			yangle += yspeed
			context.fillText(`dx ${dx} = mousePosx ${mousePositionX} - arrX ${arrowX}`, 10, 10)
			context.fillText(`dy ${dy} = mousePosy ${mousePositionY} - arry ${arrowY}`, 10,20)
			context.fillText(`making arrowAngle = ${arrowAngle}`,10,30)
			//requestAnimationFrame(render);
		}

		function drawArrow(ctx,_arrowX,_arrowY,_angle){
			ctx.save();
			ctx.translate(_arrowX, _arrowY);
			ctx.rotate(_angle)
			ctx.beginPath();
			ctx.moveTo(20, 0);
			ctx.lineTo(-20, 0);
			ctx.moveTo(20,0);
			ctx.lineTo(10,-10);
			ctx.moveTo(20,0);
			ctx.lineTo(10,10);
			ctx.stroke();
			ctx.restore();
		}
		document.body.addEventListener('keyup',()=>{
			render();
		})
		document.body.addEventListener("mousemove",(event)=>{
			mousePositionX = event.clientX 
			mousePositionY = event.clientX 

		});
	
}