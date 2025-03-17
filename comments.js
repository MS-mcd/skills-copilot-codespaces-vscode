// Create web server
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Create a route for comments/:id/like
// Create a route for comments/:id/dislike

const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

router.get('/', (req, res) => {
  res.json(comments);
});

router.get('/:id', (req, res) => {
  const comment = comments.find((comment) => comment._id === parseInt(req.params.id));
  res.json(comment);
});

router.get('/:id/edit', (req, res) => {
  const comment = comments.find((comment) => comment._id === parseInt(req.params.id));
  res.json(comment);
});

router.get('/:id/delete', (req, res) => {
  const comment = comments.find((comment) => comment._id === parseInt(req.params.id));
  res.json(comment);
});

router.get('/:id/like', (req, res) => {
  const comment = comments.find((comment) => comment._id === parseInt(req.params.id));
  comment.likes++;
  res.json(comment);
});

router.get('/:id/dislike', (req, res) => {
  const comment = comments.find((comment) => comment._id === parseInt(req.params.id));
  comment.dislikes++;
  res.json(comment);
});

module.exports = router;
