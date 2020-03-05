import React, { useState } from 'react';

import UserList from './components/user-list.component';
import UserForm from './components/user-form.component';

const App = () => {

  // Variables d'initialisation des states
  let usersInit = [
    {id: 1, name: 'joe', rights: [1, 2]},
    {id: 2, name: 'garcia', rights: [3]}
    //,{id: 3, name: 'johan', rights: [2, 4]}
  ];
  
  let rightsInit = [
    {id: 1, name: 'video'},
    {id: 2, name: 'audio'},
    {id: 3, name: 'text'}
    //,{id: 4, name: 'picture'}
  ];

  // On initialise nos différents states pour communiquer entre 
  // nos deux composants UserList et UserForm
  const [users, setUsers] = useState(usersInit);

  const [rights] = useState(rightsInit);

  // State de l'utilisateur courant sélectionné dans la UserList
  const [user, setUser] = useState({});

  // State qui permet d'afficher ou non le composant userForm
  const [isFormDisplay, setIsFormDisplay] = useState(false);

  // State qui stocke l'index du lien actif de la userList
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container">
      <div className="row  mt-5">

        <div className="col-4 offset-2">
          { /*
          On passe les différents setters et states en props dont on a besoin à la UserList
          */ } 
          <UserList users={users} allRights={rights} setUser={setUser} setIsFormDisplay={setIsFormDisplay} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
        </div>

        <div className="col-4">
          { /*
          On affiche ou pas le composant UserForm selon la valeur du state isFormDisplay
          */ } 
          { isFormDisplay &&
            <UserForm users={users} setUsers={setUsers} allRights={rights} user={user}  setIsFormDisplay={setIsFormDisplay} setActiveIndex={setActiveIndex} />
          }
        </div>

      </div>
    </div>
  );
}

export default App;
