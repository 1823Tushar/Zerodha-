import React , {use, useState} from 'react';
import { useNavigate } from 'react-router-dom';

 
function Login() {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const[message, setMessage] = useState("");
 const[isSuccess, setIsSuccess] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();

        const response = await fetch("http://localhost:3002/login", {
            method: "POST",
            headers: {
                "content-Type" : "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();

        if(data.success){
            console.log("Token:", data.token);
          localStorage.setItem("token", data.token);
            window.location.href = "http://localhost:5173";

        }else{
            setMessage(data.message);
            setIsSuccess(false);
        }
    };
   
    
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
<h1 className='text-4xl text-center mb-3 '>Login Now</h1>
{message && (
  <p
    className={`mb-4 text-center font-medium ${
      isSuccess ? "text-green-600" : "text-red-600"
    }`}
  >
    {message}
  </p>
)}
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

        <button  type='submit'
        className='border px-3 bg-blue-400 py-1 text-center  '>Login</button>
         </div>
         </form>
          </div>
       </div>
       
     );
}


export default Login;