const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://user:${process.env.DB_PASSWORD}@softuni-bhvuj.mongodb.net/recipes?retryWrites=true&w=majority`,
        authCookieName: 'auth-token'
    },
    production: {}
};

module.exports = config[env];