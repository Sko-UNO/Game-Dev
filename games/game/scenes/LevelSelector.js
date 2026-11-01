class LevelSelector extends Scene{
	constructor(){
		super()
		let levelOneButton = this.instantiate(new LevelButtonGameObject(), new Vector2(20, 20))
		let levelOneButtonTop = new GameObject("LevelOneBorderTop", [], "UI")
		let levelOneButtonBot = new GameObject("LevelOneBorderBot", [], "UI")
		let levelOneButtonLeft = new GameObject("LevelOneBorderLeft", [], "UI")
		let levelOneButtonRight = new GameObject("LevelOneBorderRight", [], "UI")
		levelOneButtonTop.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,5), new Vector2(100,5), new Vector2(100,0)]})
		levelOneButtonBot.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,-5), new Vector2(100,-5), new Vector2(100,0)]})
		levelOneButtonLeft.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,100), new Vector2(5,100), new Vector2(5,0)]})
		levelOneButtonRight.addComponent(new Polygon(), {fillStyle:"black", points:[new Vector2(0,0), new Vector2(0,100), new Vector2(-5,100), new Vector2(-5,0)]})
		this.instantiate(levelOneButtonTop, new Vector2(0, 0))
		this.instantiate(levelOneButtonBot, new Vector2(0, 100))
		this.instantiate(levelOneButtonLeft, new Vector2(0, 0))
		this.instantiate(levelOneButtonRight, new Vector2(100, 0))
		levelOneButtonTop.transform.setParent(levelOneButton.transform)
		levelOneButtonBot.transform.setParent(levelOneButton.transform)
		levelOneButtonLeft.transform.setParent(levelOneButton.transform)
		levelOneButtonRight.transform.setParent(levelOneButton.transform)
		let levelOneButtonText = new GameObject("LevelOneText", [], "UI")
		levelOneButtonText.addComponent(new TextLabel(), {fillStyle: "black", font:"30px Times"})
		this.instantiate(levelOneButtonText, new Vector2(42, 58))
		levelOneButtonText.getComponent(TextLabel).text = "1"
		levelOneButtonText.transform.setParent(levelOneButton.transform)
	}
}