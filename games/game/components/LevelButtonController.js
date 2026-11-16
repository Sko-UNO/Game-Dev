class LevelButtonController extends Component{
	chosenLevel = 0
	hover = false
	fixedUpdate(){
		this.hover = false
	}
	update(){
		if(this.hover == true){
			this.gameObject.getComponent(Polygon).fillStyle = "#aaaa"
			if(Input.mouseButtonsUpThisFrame.includes(0)){
				SceneManager.loadScene(Level02)
			}
		} else {
			this.gameObject.getComponent(Polygon).fillStyle = "#ffff"
		}
	}
	
	onMouseOver(){
		this.hover = true
	}
	
}