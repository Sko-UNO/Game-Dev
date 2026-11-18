class Level01 extends Scene{
	constructor(){
		super()
		this.instantiate(new MainGameObject(), new Vector2(0, 0))
		this.instantiate(new BoxGameObject(), new Vector2(50, 0))
		
		const uiButton = this.instantiate(new UIButton())
		uiButton.transform.anchorMin = new Vector2(0, 0)
		uiButton.transform.anchorMax = new Vector2(1, 1)
		uiButton.transform.offsetUpperLeft = new Vector2(0, 0)
		uiButton.transform.offsetLowerRight = new Vector2(0, 0)
	}
}