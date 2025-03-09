module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "post.gres",
  DB: "full_stack_vue",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
};