class LevelButtonController extends Component{
	chosenLevel = MainMenu
	hover = false
	
	start(){
		let levelButtonTop = new GameObject("LevelOneBorderTop", [], "UI")
		let levelButtonBot = new GameObject("LevelOneBorderBot", [], "UI")
		let levelButtonLeft = new GameObject("LevelOneBorderLeft", [], "UI")
		let levelButtonRight = new GameObject("LevelOneBorderRight", [], "UI")
		levelButtonTop.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,5), new Vector2(100,5), new Vector2(100,0)]})
		levelButtonBot.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,-5), new Vector2(100,-5), new Vector2(100,0)]})
		levelButtonLeft.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,100), new Vector2(5,100), new Vector2(5,0)]})
		levelButtonRight.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,100), new Vector2(-5,100), new Vector2(-5,0)]})
		instantiate(levelButtonTop, this.transform.position.clone())
		instantiate(levelButtonBot, new Vector2(0, 100).plus(this.transform.position.clone()))
		instantiate(levelButtonLeft, this.transform.position.clone())
		instantiate(levelButtonRight, new Vector2(100, 0).plus(this.transform.position.clone()))
		
		let levelButtonText = new GameObject("LevelOneText", [], "UI")
		levelButtonText.addComponent(new TextLabel(), {fillStyle: "black", font:"30px Times"})
		instantiate(levelButtonText, new Vector2(50, 58).plus(this.transform.position.clone()))
		levelButtonText.getComponent(TextLabel).text = "1"
		levelButtonText.getComponent(TextLabel).textAlign = "center"
	}
	fixedUpdate(){
		this.hover = false
	}
	update(){
		if(this.hover == true){
			this.gameObject.getComponent(Polygon).fillStyle = "#aaaa"
			if(Input.mouseButtonsUpThisFrame.includes(0)){
				SceneManager.loadScene(this.chosenLevel)
			}
		} else {
			this.gameObject.getComponent(Polygon).fillStyle = "#ffff"
		}
	}
	
	onMouseOver(){
		this.hover = true
	}
	
}