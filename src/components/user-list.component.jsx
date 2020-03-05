import React from "react";

// On récupère les différentes variables qui nous intéressent en destructurant l'objet props
const UserList = ({ users, allRights, setUser, setIsFormDisplay, setActiveIndex, activeIndex }) => {    
  return (            
    <>
      <h2>UserList</h2>
      <div className="list-group">
        {
          // On boucle sur les users pour générer les différents liens de la userList
          users.map((user, index) => {
              
            // On boucle sur le tableau des ids des droits d'un user
            // pour récupérer dans le tableau rightsNames les noms des droits associés à ces ids
            const rightsNames = user.rights.map( rightId => {

              // Si un id correspond à l'id d'un objet trouvé dans le state global des droits allRights
              // alors, on retourne le nom du droit associé à cette id pour l'ajouter dans le tableau
              let obj = allRights.find(o => o.id === rightId);
              return obj.name    
            })

            return (
              <a                                 
                href="/#" key={user.id}
                /* 
                Si l'index stocké dans activeIndex correspond à l'index du lien cliqué
                on ajoute la classe active pour le mettre en surbrillance
                */
                className={`list-group-item list-group-item-action ${index === activeIndex ? 'active': ''}`} 
                onClick={(event) => {
                  // Au click :
                  // On met à jour le state du user courant qui correpond au user du lien
                  // sur lequel on a cliqué
                  setUser(user);

                  // On affiche le formulaire de modification 
                  setIsFormDisplay(true);

                  // On stocke dans le state l'index du lien cliqué
                  setActiveIndex(index)                           
                  }}
              >
                { /*
                    On affiche le nom du user et les noms des droits qui lui sont associés
                    en les séparant par une virgule.
                */ } 
                {user.name} ({rightsNames.join(', ')})
              </a>
            )
          })
        }
      </div>
    </>
  )
}

export default UserList;



