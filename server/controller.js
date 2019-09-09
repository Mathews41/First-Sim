
module.exports = {
     getProducts: (req,res) => {
    const db = req.app.get('db')
    db.get_products().then(product => res.status(200).send(product)).catch(err => { res.status(500).send({errorMessage:AARON})
    console.log('yo this broken')
    })
},
createProduct: (req, res)=>{
    const db =req.app.get('db')
    const {name, price, img} =req.body
    db.create_product(name, price, img)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(error =>{
        if(error) throw error;
    })


},
updateProduct: (req,res) => {
    const {name, price, img} =req.body
    const {id} = req.params;

    const db = req.app.get('db')
    db.update_product([name,price,img,id]).then(() => {
        res.status(200).send('these are fresh')
    })
},
deleteProduct: (req,res) => {
    const{id} = req.params
    const db = req.app.get('db')
    db.delete_product(id).then(() => {
        res.status(200).send('theyre gone')
    })
},
getOne: (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.get_product(id).then((product) => {
        res.status(200).send(product)
    })
}


}
