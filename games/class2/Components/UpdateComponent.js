class UpdateComponent extends Component{
	
	speed = 50
	start(){
	}
	
	update(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowUp"))
			this.transform.position.y -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowDown"))
			this.transform.position.y += Time.deltaTime * this.speed
	}
}