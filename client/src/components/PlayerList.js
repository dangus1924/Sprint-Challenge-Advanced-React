import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';

class PlayerList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
    }
  
    componentDidMount() {
      axios.get(`http://localhost:5000/api/players`)
        .then(res => {
          console.log(res.data)
          this.setState({ 
            data: res.data
          })
        })
        .catch(err => {
          console.log(err, 'Data was not retrieved ')
        })
    }
  
    render() {
      return (
        <div>
          {this.state.data.map(player => (
            <PlayerCard key={player.id} playerData={player} />
          ))}
        </div>
      )
    }
  }

  export default PlayerList
