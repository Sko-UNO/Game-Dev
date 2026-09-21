class MainScene extends Scene{
	constructor(){
		super()
		this.instantiate(new MainGameObject(), new Vector2(500, 400))
		this.instantiate(new EnemyGameObject(), new Vector2(25, 250), Math.PI)
		this.instantiate(new PointsGameObject(), new Vector2(0, 20))
	}
}