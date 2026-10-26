class MainMenu extends Scene{
	constructor(){
		super()
		let titleScreen = new GameObject("TitleScreen", [], "UI")
		titleScreen.addComponent(new TextLabel(), {fillStyle: "black", font:"100px Times"})
		this.instantiate(titleScreen, new Vector2(0, 100))
		titleScreen.getComponent(TextLabel).text = "The Game"
		let startButton = this.instantiate(new StartButtonGameObject(), new Vector2(10, 300))
		let startButtonTop = new GameObject("StartBorderTop", [], "UI")
		let startButtonBot = new GameObject("StartBorderBot", [], "UI")
		let startButtonLeft = new GameObject("StartBorderLeft", [], "UI")
		let startButtonRight = new GameObject("StartBorderRight", [], "UI")
		startButtonTop.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,5), new Vector2(300,5), new Vector2(300,0)]})
		startButtonBot.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,-5), new Vector2(300,-5), new Vector2(300,0)]})
		startButtonLeft.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,50), new Vector2(5,50), new Vector2(5,0)]})
		startButtonRight.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,50), new Vector2(-5,50), new Vector2(-5,0)]})
		this.instantiate(startButtonTop, new Vector2(0, 0))
		this.instantiate(startButtonBot, new Vector2(0, 50))
		this.instantiate(startButtonLeft, new Vector2(0, 0))
		this.instantiate(startButtonRight, new Vector2(300, 0))
		startButtonTop.transform.setParent(startButton.transform)
		startButtonBot.transform.setParent(startButton.transform)
		startButtonLeft.transform.setParent(startButton.transform)
		startButtonRight.transform.setParent(startButton.transform)
		let startButtonText = new GameObject("StartText", [], "UI")
		startButtonText.addComponent(new TextLabel(), {fillStyle: "black", font:"30px Times"})
		this.instantiate(startButtonText, new Vector2(115, 35))
		startButtonText.getComponent(TextLabel).text = "Start"
		startButtonText.transform.setParent(startButton.transform)
	}
}