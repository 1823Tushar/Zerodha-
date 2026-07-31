import React , {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault(); //yea use kroge to page refresh nhi hoga
        const response = await fetch("http://localhost:3002/signup", {
            method: "POST",
            // yea header btata hai ki json data bhj rha hu
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        });
        const data = await response.json();
        if(data.success){
            alert(data.message);
            navigate("/Login");
        } else {
            alert(data.message);
        }
    }
    return ( 

       <div className=' min-h-screen flex items-center  justify-center  bg-gray-100 px-8 '>
        <div className='grid grid-cols-2 gap-12 items-center max-w-6xl w-full rounded-xl  shadow-lg justify-center p-8 '>
 
 <div>
    <img src='https://plus.unsplash.com/premium_photo-1664476845274-27c2dabdd7f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D'
    alt='Stock Market'
    className='w-full h-[500px] object-cover rounded-xl'/>
 </div>
       
        
        <form onSubmit={handleSubmit}>
          
            <div className='bg-white p-8 rounded-xl shadow-lg'>
<h1 className='text-4xl text-center mb-3 '>Sign up Now</h1>
            <label>Name:</label>
            <input  type='name' placeholder='Enter your Name'
            className='w-full border rounded-lg p-2 mt-2 mb-4'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            
            
            <label>Email:</label>
        <input type='email' placeholder='Enter Your Email Id'
         className='w-full border rounded-lg p-2 mt-2 mb-4'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
       
        
        <label>Password:</label> 
        <input type='password' placeholder='Enter Your Password'
         className='w-full border rounded-lg p-2 mt-2 mb-4'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        
        <br />
        <br />

        <button  className='border px-3 bg-blue-400 py-1 text-center  '>SignUp Now</button>
        <p className='text-center mt-4'>Already have an account ?{" "}
            <span className='text-blue-500 cursor-pointer font-semibold'
            onClick={() => navigate("/login")}
            >  Login</span>
        </p>
         </div>
         </form>
          </div>
       </div>
       
     );
}

export default Signup;