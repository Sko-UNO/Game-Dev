class GenericLevel extends Scene{
	constructor(){
		super()
		this.instantiate(new TimerGameObject(), new Vector2(20, 50))
		this.instantiate(new MainGameObject(), new Vector2(-200, 700))
		this.instantiate(new MirrorGameObject(), new Vector2(200, 700))
	}
}