const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const Article = require('./models/Article');

mongoose.connect('mongodb://localhost:27017/Students', {})
  .then(() => console.log('Connected to MongoDB reda'))
  .catch(err => console.error('Could not connect to MongoDB', err));




app.get('/hello', (req, res) => {
  res.send('Hello!');
});


app.get('/reda', (req, res) => {
  res.send('hi ggg!');
});


app.post('/postt', (req, res) => {
  res.send('hi Reda!');
});

//====================== Endpoints article ======================

app.post('/articles', async (req, res) => {
    const article = new Article();

    const title1 = req.body.title;
    const content1 = req.body.content;

      article.title = title1;
      article.content = content1;
      article.numberoflikes = 3;
      await article.save();
      res.json(article);
       

  });

app.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

app.get('/articles/:idArticle', async (req, res) => {
    const id = req.params.idArticle;
    const articles = await Article.findById(id);
    res.json(articles);
});

app.delete('/articles/:idArticle', async (req, res) => {
    const id = req.params.idArticle;
    await Article.findByIdAndDelete(id);
    res.json({message: 'Article deleted successfully'});
    
});

app.get('/ShowArticles', async (req, res) => {
  const articles = await Article.find();
  res.render("articles.ejs", { articles });
   

});

listener = app.listen(3001, () => {
  console.log('Server is running on port 3001');
});


