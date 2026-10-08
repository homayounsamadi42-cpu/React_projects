import React from 'react'
import List from "./components/list/List"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"

import Button from "./components/Button/Button"


function App() {
  return (
  //   <div className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
  //     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
  //       <List 
  //       name="wireless headphones"
  //       price={59.99}
  //       desc="Eperties the freedom of wireless sound with these high-quality headphones."
  //       image={img1}/>

  //       <List 
  //       name="smartphones"
  //       price={699.99}
  //       desc="Eperties the freedom of wireless smartphone technology and stunning display."
  //       image={img2}/>

  //       <List 
  //       name="wireless"
  //       price={59.99}
  //       desc="Eperties the freedom of wireless headphones and experience the future of technology."
  //       image={img3}/>
  //       <List 
  //       name="wireless headphones"
  //       price={59.99}
  //       desc="Eperties the freedom of wireless sound with these high-quality headphones."
  //       image={img4}/>

  //       <List 
  //       name="smartphones"
  //       price={699.99}
  //       desc="Eperties the freedom of wireless smartphone technology and stunning display."
  //       image={img5}/>
  //       </div>
  //   </div>
  <div>
    <Button
    text="Login"
    bgColor="bg-blue-500"
    textColor="text-white"
    hoverColor="hover:bg-blue-700"
    padding="px-6 py-3"
    rounded="rounded-lg"
    onClick={()=> alert("Login cliked")}/>

    <Button
    text="Register"
    bgColor="bg-green-500"
    textColor="text-white"
    hoverColor="hover:bg-green-700"
    padding="px-6 py-3"
    rounded="rounded-lg"
    onClick={()=> alert("Register cliked")}/>

    <Button
    text="Delete"
    bgColor="bg-red-500"
    textColor="text-white"
    hoverColor="hover:bg-red-700"
    padding="px-6 py-3"
    rounded="rounded-lg"
    onClick={()=> alert("Login cliked")}/>
  </div>
  )
}

export default App
