const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const commentSchema = new Schema({
  postid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  commentContent: {
    type: String,
    required: true,
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
