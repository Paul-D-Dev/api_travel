import express from 'express';
import loaders from './loaders';

async function startServer() {
    const app = express();
    await loaders(app);

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is runnig at http://localhost:${PORT}`);
    })
}

startServer();