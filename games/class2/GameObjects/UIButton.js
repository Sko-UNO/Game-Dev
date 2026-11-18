class UIButton extends RectGameObject{
	constructor(){
		super("UIButton", [], "UI")
		this.addComponent(new Polygon(), {fillStyle: "green", points:[new Vector2(0, 0), new Vector2(0, 1), new Vector2(1, 1), new Vector2(1, 0)], alpha: 0.5})
		this.transform.useLetterBoxing = true
	}
}