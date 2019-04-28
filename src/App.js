import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {


  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
              title:"Matrix",
              poster:""
        
          },
          {
              title:"Full Metal jacket",
              poster:""
        
          },
          {
              title:"Oldboy",
              poster:""
        
          },
          {
              title:"Star-wars",
              poster:""
        
          }
        ]
     

      })
    }, 1000)


  }

  _renderMovies = ()=>{
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })

    return movies

    

  }

  render() {

    return (
      <div className="APP">
  

      
      </div>
    );
  }
}

export default App;
