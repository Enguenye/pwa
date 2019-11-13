import React, { Component } from 'react';
import Heroe from './Heroe';

class Joke extends Component {
    state={
        info:[]
    }
    render() {
        let inform = this.state.info;
        console.log(inform);
        return (
            <div>
                <h1>Heroes:</h1>
                {inform.map( (e,i) =>
<Heroe key={i} info={e}/>)}
            </div>
        );
    }
    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('info') === null)
                this.setState({ info: "loading..." })
            else
                this.setState({ info: localStorage.getItem('info') });
        }
      
        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=marvel&hash=4c34e64969b786bf216564d403dcb6dd&apikey=e7005cfba84391c5032fd91b65b9bcb1")
          .then(res => {
              return res.json();
          }).then(res => {
              this.setState({ info: res.data.results });
              localStorage.setItem('info', res.data.results);
          });
      }
}


export default Joke;