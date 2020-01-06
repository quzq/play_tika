import app from './app';

const { PORT = 3333 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
