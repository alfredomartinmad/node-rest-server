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
    urlDb = 'mongodb+srv://usercafe:cfuXZLcRl12xl9vR@cluster0-tbjrs.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDb;