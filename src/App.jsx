import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const [remContacts, setRemContacts] = useState(contacts.slice(6));

  function getRandomContact() {
    let randomIndex = Math.floor(Math.random() * remContacts.length);
    let randomContact = remContacts[randomIndex];
    setFirstFive([...firstFive, randomContact]);
    let filteredArr = remContacts.filter((oneContact) => {
      if (oneContact.name !== randomContact.name) {
        
      }
      return oneContact;
    })
      setRemContacts(filteredArr)
  }


  function sortByName(){
    let sortedNameArray = [...firstFive].sort((a, b) => {

   if(a.name> b.name){
    return 1
  
    } else if (a.name < b.name){
return -1
    }
    else{
      return 0 
    }
    })
      console.log(sortedNameArray)
       setFirstFive(sortedNameArray)
  }


  function sortByPopularity(){
    let sortedPopArray = [...firstFive].sort((a, b) => {

      if(b.popularity > a.popularity){
       return 1
     
       } else if (b.popularity < a.popularity){
   return -1
       }
       else{
         return 0 
       }
       })
         
       console.log(sortedPopArray)
         setFirstFive(sortedPopArray)
  }


  function deleteName(id){
 let deletedNameArr = firstFive.filter((celeb) => celeb.id !== id)

   console.log(deletedNameArr)
   setFirstFive(deletedNameArr)
  }

  return (
     <div className="App">
      <button  onClick={getRandomContact}>Add Random Contact</button>
      <button  onClick={sortByPopularity}>Sort by popularity</button>
      <button  onClick={sortByName}>Sort by name</button>
      
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {firstFive.map((celeb) => (
            <tr key= {celeb.name}>
              <td>
                <img src={celeb.pictureUrl} alt="celeb" className="image" />
              </td>
              <td>{celeb.name}</td>
              <td>{Math.round(celeb.popularity * 100) / 100}</td>

              <td>{celeb.wonOscar && <p> 🏆 </p>}</td>
              <td>{celeb.wonEmmy && <p> 🏆 </p>}</td>
              <td><button onClick= {() => deleteName(celeb.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
