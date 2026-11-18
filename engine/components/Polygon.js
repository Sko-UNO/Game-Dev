class Polygon extends Component {
	
	fillStyle = "magenta"
	points = []
	
	alpha = 1
	
	draw(ctx){
		//let position = this.transform.position
			    
		//open and close with ctx.save and cx.restore
		ctx.save()
		
		ctx.globalAlpha = this.alpha
		   
		   
		//ctx.translate(position.x, position.y)
		//ctx.scale(this.transform.scale.x, this.transform.scale.y)
		//ctx.rotate(this.transform.rotation)
		
		ctx.beginPath()
		for(const point of this.points){
			ctx.lineTo(point.x, point.y)
		}
		
		ctx.fillStyle = this.fillStyle
		ctx.fill()
		
		ctx.restore()
	}
}