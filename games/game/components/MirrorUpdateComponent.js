class MirrorUpdateComponent extends Component{
	
	update(){
		if(Input.keysDown.includes("ArrowRight"))
			this.transform.position.x -= 5
		if(Input.keysDown.includes("ArrowLeft"))
			this.transform.position.x += 5
		if(Input.keysDown.includes("ArrowUp"))
			this.transform.position.y -= 5
		
	
		}
		if(this.transform.position.y <= 800)
			this.transform.position.y += 1
		

		}
}