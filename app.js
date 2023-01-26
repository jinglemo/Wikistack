const express = require('express')
const morgan = require('morgan');
const app = express();
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
// ...
app.use('/wiki', wikiRouter);
db.authenticate()
.then(() => {
    console.log('connected to the database')
})

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res, next) =>{
    res.redirect('/wiki');
  });

const layout = require('./views/layout');
app.get("/", (req, res) => {
    res.send(layout());
})








const PORT = 3000;
const init = async () => {
    await db.sync({force: true});
   
}
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
init()