class GenericLevel extends Scene{
	constructor(){
		super()
		let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(500, 400))
		this.instantiate(new PointsGameObject(), new Vector2(0, 20))
		//Camera.main.backgroundColor = "gray"
		let helperGameObject1 = this.instantiate(new HelperGameObject(), new Vector2(50, 50))
		let helperGameObject2 = this.instantiate(new HelperGameObject(), new Vector2(-50, 50))
		
		helperGameObject1.transform.setParent(mainGameObject.transform)
		helperGameObject2.transform.setParent(mainGameObject.transform)
		
		let sceneTimer = new GameObject("SceneTimer", [], "UI")
		sceneTimer.addComponent(new TextLabel(), {fillStyle: "gray", font:"30px Times"})
		sceneTimer.addComponent(new SceneTimerController())
		this.instantiate(sceneTimer, new Vector2(0, 50))
		
		let wrappedText = new GameObject("WrappedText", [], "UI")
		wrappedText.addComponent(new MultiLineTextLabel, )
		
	}
}