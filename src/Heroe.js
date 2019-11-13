import React, { Component } from 'react';

class Heroe extends Component {
    render() {
        return (
            <div>
                <div className="card text-white bg-secondary mb-3">
                <div className="card-body"> 
                <ol>
               <li><h3>Nombre: {this.props.info.name}</h3> </li>
               <li> <h5>Descipcion: {this.props.info.description}</h5></li>
               <li><h5>Comics disponibles:{this.props.info.comics.available}</h5> </li>
               <ul>{this.props.info.comics.items.map((e,i)=><h6 key ={i}><li key ={i} >{e.name}></li></h6>)}</ul>
               <li><h5>Series disponibles:{this.props.info.series.available}</h5> </li>
               <ul> {this.props.info.series.items.map((e,i)=><h6 key ={i}><li key ={i} >{e.name}</li></h6>)}</ul>
               <li> <h5>Urls:</h5> </li>
               <ul>{this.props.info.urls.map((e,i)=><h6 key ={i}><li key ={i} >{e.url}</li></h6>)}</ul>
               </ol>
               </div>
               </div>
            </div>
        );
    }
}

export default Heroe;