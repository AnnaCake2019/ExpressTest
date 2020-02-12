const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const logRouter = require('./router/log');
const orderRouter = require('./router/order');
const userRouter = require('./router/user');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/ent', logRouter);
app.use('/order', orderRouter);
app.use('/user', userRouter);

async function startServer() {
   try {
      await connectDB();
      app.listen(PORT, () => {
         console.log(`Server start ${PORT}`)
      });
   } catch (e) {
      console.log(e);
      process.exit(1);
   }
}
startServer();