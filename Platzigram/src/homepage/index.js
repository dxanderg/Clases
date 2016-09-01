var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'dxanderg',
        avatar: 'https://lh3.googleusercontent.com/2ZxNNt51Eaizw_tmrDT-Tp9hJ1lLBwbcRGhB4_ynb_hcAOm1xBVTFCC7pq9kKUT6fma503V9AA=w1440-h900-rw-no'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username: 'dxanderg',
        avatar: 'https://lh3.googleusercontent.com/2ZxNNt51Eaizw_tmrDT-Tp9hJ1lLBwbcRGhB4_ynb_hcAOm1xBVTFCC7pq9kKUT6fma503V9AA=w1440-h900-rw-no'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  empty(main).appendChild(template(pictures));
})
