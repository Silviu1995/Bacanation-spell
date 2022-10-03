import React, {Component} from 'react';
// import Particles from 'react-particles-js';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Logou from './Components/Logo/Logo.js';
import Imageinput from './Components/Imageinput/Imageinput.js';
import Rank from './Components/Rank/Rank.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register';



// const particlesOptions = {
//   particles: {
//     move: {
//       random: true,
//       speed: 7,
//       straight: false,
//     },
//     number: {
//       value: 40,
//       density: {
//         enable: true,
//         value_area: 550
//       }
//     },
//     opacity: {
//       value: 0.9,
//     },

//   }
// }

const initialState = {
  input:'',
  imgUrl:'',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user:  {
    id:'',
    name:'',
    email: '',
    entries: 0,
    joined:''
}
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }
  loadUser = (data) => {
    this.setState({user: {
      id:data.id,
      name:data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }
  calcFace = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width -(clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }
  displayFaceBox = (box) => {
    this.setState({box:box});
   
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
    fetch('https://magical-brain-app.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          input: this.state.input
          })
        })
    .then(response => response.json())
    .then(response => { 
      if (response) {
        fetch('https://magical-brain-app.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          id: this.state.user.id
          })
        })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, { entries: count}))
      })
      .catch(err => console.log(err))
    }
  this.displayFaceBox(this.calcFace(response))
})
.catch(err => console.log(err));

  }
  onRouteChange = (route) => {
    if( route === 'signout') {
      this.setState(initialState)
    } else if ( route === 'home') {
      this.setState({isSignedIn:true})
    }
    this.setState({route: route})
  }
  render() {
    return(
      <div>
        
        <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
        ? <div> 
        <Logou/>
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <Imageinput InputChange={this.onInputChange} ButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition square={this.state.box} imgUrl={this.state.imgUrl}/> 
        </div>
        : (
          this.state.route === 'signin' ?
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :   <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )}
        </div>  
    
    )
  }
}






export default App;
