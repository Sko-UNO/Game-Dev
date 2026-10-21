class UpdateComponent extends Component{
	
	speed = 200
	start(){
		this.timeSinceLastLaser = 0
	}
	
	update(){
		this.timeSinceLastLaser += 1
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowUp"))
			this.transform.position.y -= Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowDown"))
			this.transform.position.y += Time.deltaTime * this.speed
		
		
		
		//if(this.timeSinceLastLaser > 50){
		//	this.timeSinceLastLaser = 0
		//	let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
		//	if (Math.random() < .5)
		//		laserGameObject.getComponent(Polygon).fillStyle = "blue"
		//}
		if(Input.keysDownThisFrame.includes("Space"))
			instantiate(new LaserGameObject(), this.transform.position.clone())
		
		Camera.main.transform.position = this.transform.position.clone()
		//Camera.main.transform.scale = new Vector2(2, 2)
		//Camera.main.transform.rotation = 1
		//const enemies = GameObject.findGameObjectsWithTag("Enemy")
		//for(const enemy of enemies){
		//	if(Collisions.isCollisionPolygonPolygon(this.gameObject, enemy))
		//		console.log("Collision")
		//}
	}
	onCollisionStay(other){
		console.log(other)
	}
	onMouseOver(){
		console.log("Mouse Over")
	}
}