angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {

  $scope.allNotes = localStorage.getItem("savedNotes");
  console.log($scope.allNotes)
  $scope.allNotes = JSON.parse($scope.allNotes) || {};

  console.log("WHAT IS THIS", this.allNotes);

  this.currentNoteTitle = "";
  this.currentNoteContent = "";

  $scope.storeNewNote = function (){

    var storage = localStorage.getItem("savedNotes");

    storage = JSON.parse(storage) || {};

    storage[this.currentNoteTitle] = this.currentNoteContent;

    localStorage.setItem("savedNotes", JSON.stringify(storage));

    console.log("Before manipulation", storage);

    console.log(this.currentNoteContent);
    console.log(this.currentNoteTitle);

  }.bind(this);

  $scope.saveEditedNote = function (){

    localStorage.setItem("savedNotes", JSON.stringify(this.allNotes));
    console.log(this.allNotes)
    console.log("app.allNotes", this.allNotes);


  }.bind(this);


  $scope.notes = [
    { title: 'Note1', id: 1 },
    { title: 'Note2', id: 2 },
    { title: 'Note3', id: 3 },
    { title: 'Note4', id: 4 },
    { title: ' Note5', id: 5 },
    { title: 'Note6', id: 6 }
  ];


});

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });
