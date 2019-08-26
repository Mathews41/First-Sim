
module.exports = {
     getProducts: (req,res) => {
    const db = req.app.get('db')
    db.get_products().then(product => res.status(200).send(product)).catch(err => { res.status(500).send({errorMessage:AARON})
    console.log(err)
    })
},
createProduct: (req, res)=>{
    const db =req.app.get('db')
    const {name, price, image_url} =req.body
    db.create_product([name, price, image_url])
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(error =>{
        if(error) throw error;
    })


},
updateProduct: (req,res) => {
    const {price, image_url} =req.body
    const {id} = req.params;
    const {name} = req.body;
    const db = req.app.get('db')
    db.update_product([name,price,image_url,id]).then(() => {
        res.status(200).send('these are fresh')
    })
},
deleteProduct: (req,res) => {
    const{id} = req.params
    const db = req.app.get('db')
    db.delete_product([id]).then(() => {
        res.status(200).send('theyre gone')
    })
}


}
