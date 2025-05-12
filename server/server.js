import express from 'express';
import cors from 'cors';
import connection from './connection.js';
import url from 'url'
import path, { dirname,join } from "path"
import olx_routes from './Router/olx_routes.js';


const app = express();

const port =  4000;

const file_name = url.fileURLToPath(import.meta.url)

const __dirname = dirname(file_name)

const client = join(__dirname, "..", "client")

app.use(express.static(client))

  

app.use(express.json({ limit: '150mb' }));

app.use(cors())

// API routes
app.use('/api', olx_routes);

app.use("/images",express.static(path.join(__dirname,"images")))


connection().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to database:', err);
});





