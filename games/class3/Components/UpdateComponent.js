class UpdateComponent extends Component{
	
	speed = 200
	start(){
		
	}
	
	update(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x -= Time.deltaTime * this.speed
		
		
		
		
	}
	onCollisionStay(other){
		this.gameObject.getComponent(RigidBody).velocity = 0
	}
	onMouseOver(){
		console.log("Mouse Over")
	}
}