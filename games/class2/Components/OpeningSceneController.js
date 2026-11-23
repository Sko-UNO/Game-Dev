class OpeningSceneController extends Component{
	update(){
		if (Input.keysDown.length != 0) {
			SceneManager.nextScene = Level01
		}
	}
}