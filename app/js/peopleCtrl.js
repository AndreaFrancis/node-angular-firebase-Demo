peopleRegister
  .controller('PeopleCtrl', ['$scope', '$firebaseArray', 'FBURL', function($scope, $firebaseArray, FBURL) {
    $scope.person = {};
    var url = FBURL + "/people";
    var fireRef = new Firebase(url);
    $scope.people = $firebaseArray(fireRef);
    $scope.isEditing = false;
    $scope.editedPerson = null;
    $scope.newPerson = {};
    $scope.createNewPerson = function() {
      $scope.people.$add({
        name: $scope.person.name,
        lastName: $scope.person.lastName,
        email: $scope.person.email,
        phone: $scope.person.phone
      });
      $scope.person = {};
    }

    $scope.deletePerson = function(person) {
      $scope.people.$remove(person);
    }

    $scope.editPerson = function(person) {
      $scope.editedPerson = person
      $scope.originalPerson = angular.extend({}, $scope.editedPerson);
    }


    $scope.saveEditing = function(person) {
      $scope.editedPerson = null;
      $scope.people.$save(person);
    };

    $scope.cancelEditing = function(person) {
      person.name = $scope.originalPerson.name;
      person.lastName = $scope.originalPerson.lastName;
      person.email = $scope.originalPerson.email;
      person.phone = $scope.originalPerson.phone;
      $scope.saveEditing(person);
    };

  }]);
