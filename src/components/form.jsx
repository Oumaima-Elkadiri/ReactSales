import {useState} from "react";
export default function Form({AjouterProduit}) {
  const [produit, setProduit] = useState(
    {
        nom:"",
        prix:0,
        marque:"",
        quantite:0
    }
  );
  const handleChange = (e)=>{
    const {id, value} = e.target;
    setProduit({...produit, [id]:value})
  }
  const handleAdd = () =>{
    if(produit.nom && produit.prix>0 && produit.marque && produit.quantite>1){
        AjouterProduit(produit)
        
    }else{
        alert("Veuillez remplir tous les champs correctement!!")
    }
  }
  return (
    <>
      <form>
        <input type="text" id="nom" onChange={handleChange} placeholder="Nom du produit" /> <br />
        <input type="number" id="prix" onChange={handleChange} placeholder="Prix du produit en Dh" min={0} /> <br />
        <input type="text" id="marque" onChange={handleChange} placeholder="Marque du produit" /> <br />
        <input type="number" id="quantite" onChange={handleChange} placeholder="Quantité du produit" min={0} /> <br />
        <input type="button" onClick={handleAdd} id="produit" value="Ajouter Produit" />
      </form>
    </>
  )
}

