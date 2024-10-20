import React, { useEffect, useState } from 'react'

const Formdata = () => { 
  const [credentials, setcredentials] = useState({name:'',password:'',cpassword:''});

  const win  = window.localStorage;
//   const win  = window.sessionStorage;

  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    win.clear();
    setcredentials({name:'',password:'',cpassword:''});
  }
// eslint-disable-next-line
  useEffect(()=>{  
    if(win.getItem('name'))
      setcredentials(win.getItem('name'));
    if(win.getItem('password'))
      setcredentials(win.getItem('password'));
    if(win.getItem('cpassword'))
      setcredentials(win.getItem('cpassword'));
  },[win])
  useEffect(()=>{
    win.setItem('name',credentials.name);
    win.setItem('password',credentials.password);
    win.setItem('cpassword',credentials.cpassword);
  },[win,credentials.name,credentials.password,credentials.cpassword])
 

 
  return (
    <div>
       <form onSubmit={handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="text" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange}   />
  </div>
  
  <button   type="submit" className="btn btn-primary"  >Add Note</button>
</form> 
 
    </div>
  )
}

export default Formdata


// import React, { useEffect, useState } from 'react'

// const Formdata = () => {
//     const [name, setname] = useState('');
//     const [password, setpassword] = useState('')
//     const [cpassword, setcpassword] = useState('')

//     const win = window.localStorage;
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         win.clear();
//        setname('');
//        setpassword('');
//        setcpassword('');
//       }
    
//       useEffect(()=>{
//         if(win.getItem('name'))
//             setname(win.getItem('name'))
//         if(win.getItem('password'))
//             setpassword(win.getItem('password'))
//         if(win.getItem('cpassword'))
//             setcpassword(win.getItem('cpassword'))
//         // eslint-disable-next-line  
//       },[]);

//       useEffect(()=>{
//         win.setItem('name',name);
//         win.setItem('password',password);
//         win.setItem('cpassword',cpassword); 
//         // eslint-disable-next-line
//       },[name,password,cpassword])

     
//   return (
//     <div>
//         <form onSubmit={handleSubmit}> 
//   <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e)=>{setname(e.target.value)}} aria-describedby="emailHelp"/>
//      </div>
//    <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="text" className="form-control" id="password" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//     <input type="text" className="form-control" id="cpassword" name='cpassword' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}   />
//   </div>
  
//   <button   type="submit" className="btn btn-primary"  >Add Note</button>
// </form> 
//     </div>
//   )
// }

// export default Formdata