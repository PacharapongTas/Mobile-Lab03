angular.module('starter.services', [])

.factory('Chats', function($http) {

  var chats = [];

  return {
    getUsers : function(){
      return $http.get('https://randomuser.me/api/?results=10').then(function(response){
        chats = response.data.results;
        return response.data.results;
      });
    },
    getUser: function(index){
      return chats[index];
    }
  }
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var chats = [{
  //   id: 0,
  //   name: 'Wichai Vongfu',
  //   lastText: 'wichai@gmail.com',
  //   face: 'img/ben.png'
  // }, {
  //   id: 1,
  //   name: 'Max Lynx',
  //   lastText: 'Hey, it\'s me',
  //   face: 'img/max.png'
  // }, {
  //   id: 2,
  //   name: 'Adam Bradleyson',
  //   lastText: 'I should buy a boat',
  //   face: 'img/adam.jpg'
  // }, {
  //   id: 3,
  //   name: 'Perry Governor',
  //   lastText: 'Look at my mukluks!',
  //   face: 'img/perry.png'
  // }, {
  //   id: 4,
  //   name: 'Mike Harrington',
  //   lastText: 'This is wicked good ice cream.',
  //   face: 'img/mike.png'
  // }];

  // return {
  //   all: function() {
  //     return chats;
  //   },
  //   remove: function(chat) {
  //     chats.splice(chats.indexOf(chat), 1);
  //   },
  //   get: function(chatId) {
  //     for (var i = 0; i < chats.length; i++) {
  //       if (chats[i].id === parseInt(chatId)) {
  //         return chats[i];
  //       }
  //     }
  //     return null;
  //   }
  // };
});
