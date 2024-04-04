const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;


router.use((req, res, next) => {
  console.log('MiddleWare');
  next();
})

router.get('/get/:start/:end', (req, res) => {
  console.log(req.params)
  res.send({
    params: req.params,
    getParams: req.query,
    headers: req.headers
  });
})

router.post('/post', (req, res) => {

  res.send(req);
})

app.use(router);
app.listen(port, () => {
  console.log('ServerStart on port ' + port);
})