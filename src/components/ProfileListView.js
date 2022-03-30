import React, { useEffect } from 'react';
import MaterialCard from './MaterialCard';
import userData from '../data/userdata'
import {useState} from 'react'


export default function ProfileListView() {

    const [userDataState, setUserData] = useState([]);


    const imageAshwani = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
    const imageArshad = "https://images.unsplash.com/photo-1640622302588-aefc0da2b58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    const imagePooja = "https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"


    // useEffect(()=>{
    //     fetch('https://templates.buildwoofunnels.com/users.json')
    //     .then(response => response.json())
    //     .then(json => setUserData(json))
    // })

    // setUserData(userData)

    console.log(userData);

    const imageUrlPrefix = "https://avatars.dicebear.com/v2/avataaars/"

    const profileList = userData.map(user => {
        const imageUrl = imageUrlPrefix + user.username + ".svg";

        return(
            <MaterialCard name={user.name} email={user.email} phone={user.phone} website={user.website} imageUrl={imageUrl}/>
        )
    })


    return (
      <div className="App">

          {profileList}


          {/* {userData.map(user => {
              const imageUrl = imageUrlPrefix + user.username + ".svg";
              <MaterialCard name={user.name} email={user.email} phone={user.phone} website={user.website} imageUrl={imageUrl}/>
          })} */}


        {/* <MaterialCard name="Ashwani" email="ashwanijha@gmail.com" phone="9999999999" website="ashwanijha@" imageUrl={imageAshwani}/>
        <MaterialCard name="Arshad" email="arshad@gmail.com" phone="982233112" website="arsh@" imageUrl={imageArshad}/>
        <MaterialCard name="Abhishek" email="ashwanijha@gmail.com" phone="9999999999" website="ashwanijha@" imageUrl={imageAshwani}/>      
        <MaterialCard name="Danish" email="danish56@gmail.com" phone="7865463465" website="danishr.com" imageUrl={imageArshad}/>
        <MaterialCard name="Shubham " email="shubhamgupta @gmail.com" phone="9630866606" website="gupta@" imageUrl={imageAshwani}/>
        <MaterialCard name="Uber" email="ashwanijha@gmail.com" phone="9999999999" website="ashwanijha@" imageUrl={imageArshad}/>      
        <MaterialCard name="Swiggy" email="ashwanijha@gmail.com" phone="9999999999" website="ashwanijha@" imageUrl={imagePooja}/>
        <MaterialCard name="Ashwani" email="ashwanijha@gmail.com" phone="9999999999" website="ashwanijha@" imageUrl={imageArshad}/>
        <MaterialCard name="Ashwani" email="ashwanijha@gmail.com" phone="9999999999" website="ashwanijha@" imageUrl={imageAshwani}/>
        <MaterialCard name="Pooja" email="Pooja@gmail.com" phone="9999956999" website="Poojaambi@" imageUrl={imagePooja}/> */}
        </div>
    );
}