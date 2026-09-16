class MainScene extends Scene{
	constructor(){
		super()
		this.instantiate(new MainGameObject(), new Vector2(500, 100))
		this.instantiate(new MirrorGameObject(), new Vector2(700, 100))
		this.instantiate(new GroundGameObject(), new Vector2(0, 1000))
	}
}