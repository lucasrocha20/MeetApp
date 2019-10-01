require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // created_at and updated_at
    underscored: true, // não utiliza o padrão camel case
    underscoredAll: true,
  },
};
