import React ,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Inputlink from './components/Inputlink/Inputlink';
import Cardlist from './components/Cardlist/Cardlist'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';



class App extends Component {
	constructor(){
		super();
		this.state = {
			input:'',
			imageurl:'',
			flag: false ,
      route:'signin',
      isSignedIn:false,
      animes:[]
		}
	}

oninputchange = (event) =>{
    //console.log(event.target.value);
	this.setState({input:event.target.value});
}

onbuttonsubmit = () =>{
	//this.setState({imageurl:this.state.input});
    console.log(this.state.input);
	 fetch(`http://localhost:5000/anime/${this.state.input}`, {
           method:'get',
           headers:{'Content-Type':'application/json'},
        })
   .then(response => response.json())
   .then(response => {
    if(response.length){
     this.setState({flag:false})
    this.setState({animes:response});
    
  }
  else{
    let anime2 = ["Dragon Ball Z","Naruto","One Piece","Death Note","Psycho Pass"];
    this.setState({animes:anime2});
    this.setState({flag:true});
    console.log(this.state.animes);
  }
  })
    .catch(err =>console.log(err));
}

onRouteChange = (route) => {
  if(route === 'signout'){
    this.setState({isSignedIn: false})
  }
  else if(route === 'home'){
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})
}


render(){	
  const {isSignedIn, route}= this.state;
  return (
    <div className="App">
     <Navigation isSignedIn = {isSignedIn} onRouteChange={this.onRouteChange} />
     { this.state.route === 'home' ?
     <div> 
     <Inputlink oninputchange={this.oninputchange} onbuttonsubmit = {this.onbuttonsubmit}/>
    <Cardlist flag={this.state.flag} animes={this.state.animes}/>
    </div>
    :
    (
        route === 'signin' ? 
         <Signin onRouteChange={this.onRouteChange} />
         :
         <Register onRouteChange={this.onRouteChange} />
        )
  }
    </div>
  );
}
}

export default App;
