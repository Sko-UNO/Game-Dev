class ClosingSceneController extends Component{
	update(){
		if (Time.time >= this.startingTime + 5) {
			SceneManager.nextScene = OpeningScene
		}
	}
}