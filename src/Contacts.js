import React, { useState } from 'react';
//import Style from './Style.css'
 
const Demo = () => {
  const [state, setState] = useState({});
 
  const handler = (e) => {
    setState({ state, [e.target.name]: e.target.value });
  };
 
  const handler1 = (e) => {
   // e.preventDefault();
 
  };
 
  return (
    <>
   <body className='container-fluid alla'>
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }} >
      <h2 style={{color:"white",fontSize:"30px"}}><span style={{color:"black"}}>Contact</span> <span style={{color:"white"}}>Us</span></h2>
      {/* <h3><span style={{color:"light blue"}}>Phone:</span><span style={{color:"white"}}>+917893715564</span></h3> */}
      {/* <h3><span style={{color:"orange"}}>Email:</span><span style={{color:"white"}}>gangabhaskar@gmail.com</span></h3> */}
      <form style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:"lightblue" }} onSubmit={handler1}>
        <label style={{ display: 'block', marginBottom: '5px', color:"black" }}>Name:</label>
        <input 
          type="text"
          name="name"
          placeholder='Enter your Name'
          value={state.name}
          onChange={handler}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', }}
         
        />
        <label style={{ display: 'block', marginBottom: '5px', color:"black" }}>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Enter your Email'
          value={state.email}
          onChange={handler}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
        <label style={{ display: 'block', marginBottom: '5px', color:"black" }}>Message:</label>
        <textarea
          name="message"
          placeholder='Enter message here'
          value={state.message}
          onChange={handler}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
         />
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Submit</button>
      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </body>
    <div className='container-fluid text-center bg-primary'>
        <h1>Irfan Ali @ Footer</h1>
      </div>
    </>
  );
};
export default Demo;