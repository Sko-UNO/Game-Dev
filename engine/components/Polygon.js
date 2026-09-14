class Polygon extends Component {
	
	fillStyle = "magenta"
	points = []
	
	draw(ctx){
		let position = this.transform.position
			    
		//open and close with ctx.save and cx.restore
		ctx.save()
		   
		   
		ctx.translate(position.x, position.y)
		
		ctx.beginPath()
		for(const point of this.points){
			ctx.lineTo(point.x, point.y)
		}
		
		ctx.fillStyle = this.fillStyle
		ctx.fill()
		
		ctx.restore()
	}
}