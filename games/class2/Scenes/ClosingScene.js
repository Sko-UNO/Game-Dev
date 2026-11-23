class ClosingScene extends Scene{
	constructor(){
		super("red")
		const closingText = new RectGameObject("Closing Text", [], "UI")
		closingText.addComponent(new TextLabel(), {text:"Die", textAlign:"center", textBaseLine:"middle", font:"50px sans"})
		closingText.transform.anchorMin = new Vector2(.5, .25)
		closingText.transform.anchorMax = new Vector2(.5, .25)
		closingText.transform.offsetLowerRight = new Vector2(1, 1)
		closingText.transform.useLetterBoxing = true
		this.instantiate(closingText)
		const closingSceneControllerGameObject = new GameObject("ClosingSceneController", [], "UI")
		closingSceneControllerGameObject.addComponent(new ClosingSceneController())
		this.instantiate(closingSceneControllerGameObject)
	}
}