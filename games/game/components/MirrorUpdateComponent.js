class MirrorUpdateComponent extends Component{
	lastFrameY = 700
	counter = 100
	gravity = 0
	speed = 200
	
	update(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowUp")){
			if(this.gravity == 0) 
				this.gravity = -3
			if(this.transform.position.x <= 55)
				if(this.counter >= 100){
					if(this.gravity >= 0)
						this.gravity = -3
					else if (this.gravity < -2)
						this.gravity = -4
					else this.gravity -= 2
					this.counter = 0
				}
		}
		
		
		if(this.transform.position.x <= 55){
			this.transform.position.x = 55
		}
		

		this.gravity += .1
		this.transform.position.y += this.gravity * Time.deltaTime * this.speed

		
		if(this.transform.position.y >= 700){
			this.gravity = 0
			this.transform.position.y = 700
		}
		
		let platforms = GameObject.findGameObjectsWithTag("Platform")
		for(const platform of platforms){
			let perimiter = platform.getComponent(Polygon)
			if(this.transform.position.x + 30 > perimiter.transform.position.x && this.transform.position.x - 30 < perimiter.transform.position.x + perimiter.points[1].x && this.transform.position.y + 100 >= perimiter.transform.position.y && this.lastFrameY + 100 <= perimiter.transform.position.y && this.gravity >= 0){
				this.transform.position.y = perimiter.transform.position.y - 100
				this.gravity = 0
			}
		}
		this.lastFrameY = this.transform.position.y
		this.counter ++
	}
}