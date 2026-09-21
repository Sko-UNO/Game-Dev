class GravityComponent extends Component{
	gravity = 0
	update(){
		
		if(this.transform.position.y < 600){
			this.gravity += .1
			this.transform.position.y += this.gravity
		}
		
		if(this.transform.position.y >= 600)
			this.gravity = 0
	}
}