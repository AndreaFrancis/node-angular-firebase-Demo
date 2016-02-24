peopleRegister
  .controller('PeopleCtrl', ['$scope', '$firebaseArray', 'FBURL', function($scope, $firebaseArray, FBURL) {
    $scope.person = {};
    var url = FBURL + "/people";
    var fireRef = new Firebase(url);
    $scope.people = $firebaseArray(fireRef);

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
  }]);
