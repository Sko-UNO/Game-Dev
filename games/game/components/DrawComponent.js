class DrawComponent extends Component{
	draw(ctx){
		let position = this.transform.position
			    
		//open and close with ctx.save and cx.restore
		ctx.save()
		   
		   
		ctx.translate(position.x, position.y)
		
		ctx.fillStyle = "black"
		ctx.fill()
		
		ctx.restore()
	}
}