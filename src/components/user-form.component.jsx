import React, { useState, useEffect } from "react";

// On récupère les différentes variables qui nous intéressent en destructurant l'objet props
const UserForm = ({users, setUsers, allRights, user, setIsFormDisplay, setActiveIndex}) => {

  // On initialise un state vide pour le champ controlé name
  const [name, setName] = useState('');
      
  useEffect(() => {
    // On hydrate le state du champ name avec le nom du user
    // une fois le DOM chargé
    setName(user.name)
  }, [user.name]);

  const handleSubmit = event => {
      
    // On annule le comportement par défaut de l'événement submit
    // pour éviter le rechargement de la page
    event.preventDefault();

    // On récupère le tableau des ids de droits à partir
    // des checkbox cochées
    let rightsArr = [].filter.call(event.target.elements["rights[]"], (c) => c.checked).map(c => parseInt(c.value));

    // On initialise un nouveau state des users en appliquant
    // les modifications du user courant
    const newUserState = users.map(u =>

      // On boucle sur le state des users, quand on détecte l'id
      // du user courant on met à jour l'objet avec les nouvelles valeurs
      u.id === user.id
        ? { ...user, name: name, rights: rightsArr }
        : u
    );
    
    // On met à jour le state des users pour mettre à jour et rafraichir la userList
    setUsers(newUserState)

    // On cache le formulaire
    setIsFormDisplay(false)

    // On désactive les liens actifs de la userList
    setActiveIndex(null)
  }

  return (            
      <>
          { /*
          On récupère le nom du user courant grâce à l'objet user
          passé en props
          */ } 
          <h2>{user.name}</h2>
          <hr />
          { /*
          On appelle la fonction handleSubmit() à la soumission du formulaire
          */ }
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={name}
                /* On met à jour le state de l'input sur le onChange car c'est un input controlé */
                onChange={e => setName(e.target.value)} 
              />
            </div>      

            <div className="form-group">
              <div className="mb-2">Droits</div>
              { 
                // On boucle sur le state des droits
                allRights.map((right) => {
                  return (
                    <div key={right.id} className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="rights[]"
                        /* On donne comme valeur à chaque checkbox l'id du droit correspondant */ 
                        value={right.id} 
                        id={right.id} 
                        /* Si le user a des droits et qu'il possède dans son tableau des droits l'id
                          du droit correspondant alors on coche la checkbox */
                        defaultChecked={(user.rights && user.rights.includes(right.id))} 
                      />
                      <label className="form-check-label" htmlFor={right.id} >{right.name}</label>
                    </div>
                  )
                }) 
              } 
            </div>
                        
            <hr />
            <button className="btn btn-primary" type="submit">Save</button>
          </form>
      </>
  );    
}

export default UserForm;