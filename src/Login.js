import React from 'react';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, e.g., send data to server
    console.log('Form submitted:', this.state);
    // Clear form fields
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <>
      <div className='container-fluid j'>
     <center>
      <h1 style={{color:'yellow'}}>Login Page</h1>
      <br></br>
      <div className='row'>
       <div className='col-md-12 '>
       <div className='col-md-4'>
      <div className='card' style={{opacity:'0.8',backgroundColor:'green', }} >
      <form onSubmit={this.handleSubmit} className=''>
        <label>
          <br></br>
         <span style={{color:'white'}}><b>Username:</b></span> 
          <input  
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br></br>
        <br></br>
        <br></br>
        <label>
        <span style={{color:'white'}}><b>password:</b></span>
          <input 
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br></br>
        <br></br>
        <button type="submit"  >Login</button>
      </form>
      </div>
      </div>
      </div>
      </div>
      </center>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
   
      </>
    );
  }
}
export default LoginForm;

