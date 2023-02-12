/* بسم الله الرحمن الرحيم */

import express from "express";
import index from "./../index";
import devBundle from "./devBundle";
import path from 'path'

const app = express();
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

devBundle.compile(app);


app.get('/', (req, res) => {
    res.status(200).send(index());
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})
/* الحمد لله رب العالمين */