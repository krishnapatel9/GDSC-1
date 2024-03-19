import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    <div className="flex flex-col border-2 p-10 border-sky-700 bg-">
      <h1 className="text-5xl font-semibold ">Login</h1>
      <p className="my-5">Enter your details</p>
      <input className="border-2 rounded-md bg-zinc-800 border-gray-600 txel-xl p-2 mt-2" type="email" placeholder="Email" />
      <input className="border-2 rounded-md  bg-zinc-800 border-gray-600 txel-xl p-2 mt-2 "type="password" placeholder="Password" />
      <button className='bg-black my-2 text-white rounded-lg py-2'>Login</button>
    
    </div>
    </div>
  
  );
}

export default Login;
