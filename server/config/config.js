// =================
// Puerto
//==================

process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =================
// DB
//==================

let urlDb = 'mongodb://localhost:27017/cafe';

if (process.env.NODE_ENV != 'dev') {
    urlDb = process.env.MONGO_URI;
}

process.env.URLDB = urlDb;

// =================
// Token
//==================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.SEED = process.env.SEED || 'seed desarrollo'