class EnemyGameObject extends GameObject{
	constructor(){
		super("Enemy")
		this.addComponent(new Polygon(), {fillStyle: "green", points:Assets.tower})
		this.addComponent(new EnemyController())
		this.transform.scale = new Vector2(.5, .5)
		this.addComponent(new Health(), {health:2})
	}
}