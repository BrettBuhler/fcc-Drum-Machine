class Pads extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sound: 'freeCodeCamp Drum-Machine'
        }
        this.onPlay = this.onPlay.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount () {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount () {
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    handleKeyPress (event) {
        switch (event.keyCode) {
            case 81:
                return this.onPress("q");
                break;
            case 87:
                return this.onPress("w");
                break;
            case 69:
                return this.onPress("e");
                break;
            case 65:
                return this.onPress("a");
                break;
            case 83:
                return this.onPress("s");
                break;
            case 68:
                return this.onPress("d");
                break;
            case 90:
                return this.onPress("z");
                break;
            case 88:
                return this.onPress("x");
                break;
            case 67:
                return this.onPress("c");
                break;
            default:
                break;
        }
    }
    onPlay (e){
        var audio = document.getElementById(e.target.value);
        this.setState ({
            sound: e.target.value
        });
        audio.play();
    }
    onPress (str) {
        var audio = document.getElementById(str.toUpperCase());
        this.setState ({
            sound: str.toUpperCase()
        });
        audio.play();
    }
    render(){
        return (
            <div id='drum-machine'>
                <div id='display'>
                    <div id="soundDisplay"><div className="mySound">{this.state.sound}</div></div>
                    <div id="flexBox">
                        <button className="drum-pad btn btn-primary" id='0' onClick={this.onPlay} value="Q">
                            Q
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='1' onClick={this.onPlay} value="W">
                            W
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='2' onClick={this.onPlay} value="E">
                            E
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='3' onClick={this.onPlay} value="A">
                            A
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='4' onClick={this.onPlay} value="S">
                            S
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='5' onClick={this.onPlay} value="D">
                            D
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='6' onClick={this.onPlay} value="Z">
                            Z
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" className="clip" id="Z"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='7' onClick={this.onPlay} value="X">
                            X
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id='8' onClick={this.onPlay} value="C">
                            C
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return(<Pads />)
    }
}


ReactDOM.render(<App />, document.getElementById("root"));