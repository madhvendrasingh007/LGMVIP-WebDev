import React, {
  useState
} from 'react';

import './App.css';


const App = () => {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const loadUsers = async () => {
    setisBtnClick(true);
    const response = await fetch(' https://reqres.in/api/users?page=2');
    const res = await response.json();
    // console.log(res)
    setUsers(res.data);
    setInterval(() => {
      setisDataFetch(true);
    }, 1500);
  }
  return ( 
    <>

    <navbar className = 'navbar' >
    <ul className = 'nav-list' >

    <li > <a className="title" href = "index.html" > GreenZip</a></li >
    <button onClick = {loadUsers} class = "btn" > Get Users </button> 
    </ul> 
    </navbar>

    

    {
      isBtnClick ? (
        isDataFetch ? ( 
        
        <div className = 'box' > 
        
        {users.map(({id,first_name,last_name,avatar,email}) => {
              return ( 
              <>
                <div className = 'card'key = {id} >
                <img src = {avatar} alt = '' className = 'avatar' />
                <div className = 'card-description' >
                <h2 > {first_name} {last_name} </h2>
                <p > { email} </p>         
                <a className = 'btn-contact' href = {"mailto:" + email} > 
                </a>
                </div> 
                </div>

                </>
              )
            })
          } 
          </div>
        ) : (

          <div className = 'loader' > </div>

        )
      ) : ( 
        <section className = "home">
        <div className = "content">
        <h3 > Welcome To GreenZip </h3> 
        <p > Click on get users button to fetch users </p> 
        </div> 
        </section>
      )
    } 
    </>
  );
}
export default App;