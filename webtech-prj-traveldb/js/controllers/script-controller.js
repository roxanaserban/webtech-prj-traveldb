//let controller=angular.module('script-controller',

//['ui.router']) //lista de dependente:
//definire controller(al doilea parametru e un scope-altfel nu trasnmite nimic view-ului)
//let ctrl = angular.module('script-controller',['ui.router']);

/*
let SERVER = 'https://proiect-roxanaioana.c9users.io/'ctrl.controller
('script-controller',function($scope, $http, $state{$scope.constructor = () => {
   $http.get(SERVER + '/messages') //daca intru in starea x, o sa am view-ul si controller-ul asociat=>vezi app.jd
      .then((response) => {
      
  $scope.messages = response.data
      })
      .catch((error) => {
 
       console.log(error)
        $scope.message = 'problem occured'
      })	
	  
  }
  
  $scope.addMessage = (message) => {
   
 $http.post(SERVER + '/messages', message)
      .then((response) => {
  
      $state.go($state.current, {}, {reload: true})
      })
      .catch((error) => 
{
        console.log(error)
        $state.go($state.current, {}, {reload: true})
      })
  }

  
  $scope.constructor()
})

//tb sa se faca request pe http
*/

'use strict'
let scriptController = angular.module('scriptController', [])

scriptController.controller('scriptController', ['$scope', function($scope) {
    $scope.poze = [{
        id_poza: '00',
        denumire_poza: 'Elvetia'
    }, {
        id_poza: '01',
        denumire_poza: 'Elvetia1'
    }]
}])


/*
let scriptController = angular.module('scriptController', ['ui.router']) //lista de dependente
//definire controller(al doilea parametru e un scope-altfel nu trasnmite nimic view-ului)
const SERVER = 'https://proiect-roxanaioana.c9users.io/'

scriptController.controller('scriptController', ['$scope', '$http', '$state', function($scope) {
     $scope.denumire_poza = [{
    
    let $constructor = () => {
        $http.get(SERVER + '/regiuni')
            .then((response) => {
                $scope.authors = response.data
            })
            .catch((error) => console.log(error))
    }

    $scope.addAuthor = (author) => {
        $http.post(SERVER + '/authors', author)
            .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                })
            })
            .catch((error) => console.log(error))
    }

    $scope.deleteAuthor = (author) => {
        $http.delete(SERVER + '/authors/' + author.id)
            .then((response) => {
                $state.go($state.current, {}, {
                    reload: true
                })
            })
            .catch((error) => console.log(error))
    }

    $scope.selected = {}

    $scope.getTemplate = (author) => {
        if (author.id == $scope.selected.id) {
            return 'edit'
        }
        return 'display'
    }

    $scope.editAuthor = (author) => {
        $scope.selected = angular.copy(author)
    }

    $scope.cancelEditing = () => {
        $scope.selected = {}
    }

    $scope.saveAuthor = (author) => {
        $http.put(SERVER + '/authors/' + author.id, author)
            .then(() => {
                $state.go($state.current, {}, {
                    reload: true
                })
            })
            .catch((error) => console.log(error))
    }

    $constructor()

}])

*/