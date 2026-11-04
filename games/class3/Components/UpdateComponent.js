class UpdateComponent extends Component{
	
	speed = 100
	start(){
		this.isGrounded = false
		this.lastJumpTime = -100
		this.rigidBody = this.gameObject.getComponent(RigidBody)
	}
	
	fixedUpdate(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x += Time.deltaTime * this.speed
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x -= Time.deltaTime * this.speed
		this.isGrounded = false
	}
	
	update(){
		if(Input.keysDown.includes("Space") && this.isGrounded){
			this.rigidBody.velocity.y = -100
			this.lastJumpTime = Time.time
		}
		
		if(Input.keysDown.includes("Space") && Time.time - this.lastJumpTime < .3){
			this.gameObject.rigidBody.velocity.y = -100
		}
	}
	onTriggerStay(other, minimumTransformVector){
		if(other.name == "CoinGameObject"){
			other.destroy()
		}
	}
	onCollisionStay(other, minimumTransformVector){
		if(minimumTransformVector.y < 0 && this.rigidBody.velocity.y > 0){
			this.rigidBody.velocity.y = 0
			this.isGrounded = true
		}
		if(minimumTransformVector.y > 0 && this.rigidBody.velocity.y > 0){
			this.rigidBody.velocity.y = 0
		}
	}
}