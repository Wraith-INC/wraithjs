const Express = require('express')
const app = Express();

app.get('', (req,res) => {
  res.sendFile('public/index.html', {root: __dirname});
})

app.listen(3000)
