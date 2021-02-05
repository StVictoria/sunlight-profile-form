const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', (request, response) => {
    // response.redirect('http://jsonplaceholder.typicode.com/posts')
  console.log('url', request.url)
  console.log('headers', request.headers)
  console.log('body', request.body)
    response.end()
    
})

app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err)
    response.status(500).send('Something broke!')
})
app.listen(3005)