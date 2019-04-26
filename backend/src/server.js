const app = require('./app');
const PORT = process.env.PORT || 3000;

app.then(resolve => {
  resolve.listen(PORT, () => {
    console.log(`Server is started on ${PORT} port`);
  });
});
