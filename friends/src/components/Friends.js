import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {    
        axiosWithAuth()
          .get('/friends')
          .then(resp=> {
            this.setState({
                ...this.state,
                friends: resp.data
            })
          })
          .catch(err=> {
            console.log(err);
          })
      }

    render() {
        return (
            <div style={friendStyle} className={"friends-container"}>
                <h2>Your Friends</h2>
                <div className={"friends-list"}>
                    {this.state.friends.map(friend => (
                        <div style={{...friendStyle, 'border-bottom': "1px solid"}} id={friend.id}className={"friend"}>
                            <p3>{friend.name}</p3>
                            <p4>Age: {friend.age}</p4>
                            <p4>Email: {friend.email}</p4>
                        </div>
                    ))}
                </div>
            </div>
            
        );
    }
}

const friendStyle = {
    display: "flex",
    "flex-direction": "column"
}

export default Friends;