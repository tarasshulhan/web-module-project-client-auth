import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class AddForm extends React.Component {
    state = {
        id: "",
        name:"",
        age:"",
        email:"",
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/friends', this.state)
          .then(resp=> {
            this.props.history.push('/friends');
          })
          .catch(err=> {
            console.log(err);
          })
        
    }
    render(){
    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={this.handleChange} value={this.state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label><br/>
                <input onChange={this.handleChange} value={this.state.age} name="age" id="age" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label><br/>
                <input onChange={this.handleChange} value={this.state.email} name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="id">Id:</label><br/>
                <input onChange={this.handleChange} value={this.state.id} name="id" id="id" />
            </div>
            <button onClick={this.handleSubmit}>Submit Friend</button>
        </form>
    </section>);
    }
}

export default AddForm;