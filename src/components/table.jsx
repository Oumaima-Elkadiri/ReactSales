
export default function Tableau({produits, SupprimerProduit, ModifierProduit, vendreProduit}) {
    const handleEdite = (id) =>{
        const newNom = prompt("Modifier le nom du produit :");
        const newPrix = prompt("Modifier le prix du produit :");
        const newMarque = prompt("Modifier la marque du produit :");
        const newQuantite = prompt("Modifier la quantité du produit :");
        if(newNom && newPrix && newMarque && newQuantite){
            ModifierProduit(id, {
                nom: newNom,
                prix: newPrix,
                marque: newMarque,
                quantite: newQuantite
            })
        }
    }
    const handleVendre =(id)=>{
        const newQtite = prompt("Le nombre de produit à vendre :");
        if(newQtite){
            vendreProduit(id,newQtite)
        }
    }
    
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Marque</th>
                <th>Quantité</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                produits.map((produit)=>(
                    <tr key={produit.id}>
                        <td>{produit.id}</td>
                        <td>{produit.nom}</td>
                        <td>{produit.prix}</td>
                        <td>{produit.marque}</td>
                        <td>{produit.quantite}</td>
                        <td>
                            <button onClick={()=>SupprimerProduit(produit.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                            </button>
                            <button onClick={()=>handleEdite(produit.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                            </button>
                            <button onClick={()=>handleVendre(produit.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                            </svg>
                            </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

