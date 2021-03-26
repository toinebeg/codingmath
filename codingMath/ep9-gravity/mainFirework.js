 window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particles = [],
		numParticles = 100

	
	for(let i = 0; i < numParticles; i++){
		particles.push(Particle.create(width/2, height/3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1))
	}

	update()

	function update(){ 
		context.clearRect(0,0,width,height)
		
		particles.forEach((p)=>{ 
			p.update()
			context.beginPath()
			context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2, false)
			context.fill( )
		})
		
		requestAnimationFrame(update)
	}

}; 