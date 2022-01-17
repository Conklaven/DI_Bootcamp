const exp = require('express')
const app = exp();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(5000, () => {
    console.log('listening on port 5000')
})

app.get('/aboutMe/:hobby', (req, res) => {
    if (typeof req.params.hobby !== 'string') {
        res.status(404).send('Bad request!') //error handler
    } else {
        res.send(req.params.hobby)
    }
})

app.get('/pic', (req, res) => {
  image.src = "src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big_Red_WKU_Mascot_Image.jpg/1024px-Big_Red_WKU_Mascot_Image.jpg"
    res.send("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big_Red_WKU_Mascot_Image.jpg/1024px-Big_Red_WKU_Mascot_Image.jpg'>")

})

app.use('/', exp.static(__dirname+'/public'))

app.get('/formData', (req, res) => {
    console.log(req.query)
    res.json(`${req.query.email} sent you the message ${req.query.message}`);
})