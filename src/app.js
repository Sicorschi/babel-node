import express from 'express';
import indexRoutes from './routes/index.route';
import morgan from 'morgan';
import cors from 'cors';
import db from './db/db';

// Init the app object:
const app = express();

// Set up server settings:
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.disable('x-powered-by');

// Set up server routes:
app.use('/', indexRoutes);

// Server up:
app.listen(app.get('port'), () => {
    console.log(`Server is up listening at localhost:${app.get('port')}`);
});