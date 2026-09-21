class MirrorUpdateComponent extends Component{
	
	speed = 200
	
	update(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowUp"))
			this.transform.position.y -= Time.deltaTime * this.speed * 1.5
		
		
		
	
	
	}
}