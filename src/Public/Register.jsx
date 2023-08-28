import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth , firestore } from '../firebase';
import { setDoc , doc } from '@firebase/firestore'; // Importation pour la base de données

// redirection
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    
    event.preventDefault(); // Empêche le rechargement de la page
    console.log('event' , event.target) ;

    const {nom, email , password } = event.target ; // Récupération des données du formulaire
    console.log('email :' , email.value , 'password :' , password.value) ; 

    // Création d'un utilisateur sur firebase
    createUserWithEmailAndPassword(auth , email.value , password.value).then(
      async userCredential =>{
        console.log("userCredential" , userCredential)

        // Formatage des données de l'utilisateur
        const userInfo = {

          userNom : nom.value ,
          userEmail : email.value ,
          userPassword : password.value ,

        } 

        // Enregistrement en base
        await setDoc(doc(firestore , "user" , userCredential.user.uid), userInfo) ;

        // Redirection vers home
        navigate("/");

      }).catch(err =>{
      console.log("error :" ,err) ;
    })
   }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">S'inscrire maintenant !</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom</span>
                </label>
                <input type="text" name="nom" placeholder="nom" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mot de passe</span>
                </label>
                <input type="password" name="password" placeholder="mot de passe" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">S'inscrire</button>
              </div>
              <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Connexion</a>
                </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register