class Level01 extends Scene{
	constructor(){
		super()
		this.instantiate(new GroundGameObject(), new Vector2(0, 800))
		this.instantiate(new SplitterGameObject(), new Vector2(575, 0))
		this.instantiate(new LevelControllerGameObject())
	}
}