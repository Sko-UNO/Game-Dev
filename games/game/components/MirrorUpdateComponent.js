class MirrorUpdateComponent extends Component{
	gravity = 0
	speed = 200
	
	update(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowUp"))
			if(this.transform.position.y >= 600) {
				this.transform.position.y -= Time.deltaTime * this.speed
				this.gravity = -3
			}
		
		if(this.transform.position.y < 600){
			this.gravity += .1
			this.transform.position.y += this.gravity * Time.deltaTime * this.speed
		}
		
		if(this.transform.position.y >= 600)
			this.gravity = 0
		
	
	
	}
}