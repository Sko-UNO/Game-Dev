class LevelButtonController extends Component{
	lastFrameHover = false
	hover = false
	update(){
		if(this.lastFrameHover == true){
			this.gameObject.getComponent(Polygon).fillStyle = "#aaaa"
			if(Input.mouseButtonsUpThisFrame.includes(0)){
				SceneManager.loadScene(Level02)
			}
		} else {
			this.gameObject.getComponent(Polygon).fillStyle = "#ffff"
		}
		this.lastFrameHover = this.hover
		this.hover = false
	}
	
	onMouseOver(){
		this.hover = true
	}
	
}