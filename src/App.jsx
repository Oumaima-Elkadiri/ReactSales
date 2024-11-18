import {useState} from 'react'
import Form from './components/form'
import Tableau from './components/table'
import './App.css'

function App() {
  const [produits, setProduits] = useState([]); 

  const AjouterProduit = (produit) =>{
    setProduits([...produits, {...produit, id:produits.length}])
  }
  const ModifierProduit = (id, produitEdite) =>{
    setProduits(
      produits.map((produit)=>
        produit.id === id ? {...produit, ...produitEdite}:produit
      )
    )
  }
  const vendreProduit = (id, newQtite) => {
    setProduits(
        produits.map((produit) =>
            produit.id === id
                ? { ...produit, quantite: produit.quantite - newQtite }
                : produit
        )
    );
};

  const SupprimerProduit = (id)=>{
    setProduits(
      produits.filter((produit) => produit.id !== id)
    )
  }

  return (
    <>
      <Form AjouterProduit={AjouterProduit} />
      <h3>Liste des produits:</h3>
      <Tableau produits={produits} SupprimerProduit={SupprimerProduit} ModifierProduit={ModifierProduit} vendreProduit={vendreProduit} />
    </>
  )
}

export default App
