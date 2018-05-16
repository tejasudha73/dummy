import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeContainer from './../../components/jokes/JokeContainer';
import  { getJoke, goToPreviousJoke,reactOnJoke, goToNextJoke } from './../../actions';

class Home extends Component {
  componentWillMount(){
    this.getJoke();
  }

  getJoke = () =>{
    this.props.getJoke();
  }
  
  getNext = () =>{
    const { currentJoke, jokes } = this.props.jokesReducer;
    if(currentJoke.index === jokes.length - 1){
      this.getJoke();
    }else{
      this.props.goToNextJoke();
    }
  }
  
  getPrev = () =>{
    const { currentJoke } = this.props.jokesReducer;

    this.props.goToPreviousJoke(currentJoke);
  }

  reactOnJoke = (reaction, joke) =>{
    this.props.reactOnJoke(reaction, joke);
    this.getJoke();
  }

  render() {
    const { currentJoke } = this.props.jokesReducer;
    return (
        <div className="jokes-layout">
          <div className="buttons-layout">
            <div className="next-joke" >
             <button className="button"  onClick={this.getNext}> Next Joke </button>
            </div>
            <div className="prev-joke" >
             <button className={ currentJoke && currentJoke.index === 0 ? "disabled-button" : "button"} disabled={currentJoke && currentJoke.index === 0} onClick={this.getPrev}> Prev Joke </button>
            </div>
          </div>
          <JokeContainer 
            currentJoke={ currentJoke }
            reactOnJoke={this.reactOnJoke}/>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  jokesReducer: state.jokesReducer
});

const mapDispatchToProps = dispatch => ({
     getJoke: () => {
      dispatch(getJoke());
    },
    goToPreviousJoke: (currentJoke) => {
      dispatch(goToPreviousJoke(currentJoke))
    },
    reactOnJoke: (reaction, joke) => {
      dispatch(reactOnJoke(reaction, joke));
    },
    goToNextJoke: () => {
      dispatch(goToNextJoke())
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);