import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';

createConnection().then((connection) => {

    const app = express();

    app.listen(3000, () => console.log('Server listening on port 3000!'));

    app.get('/', async (req: Request, res: Response) => {
        res.send(200, { response: 'My first response!' })
    });
})