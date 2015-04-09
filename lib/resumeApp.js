//binding data

angular.module('headerApp',[])
    .controller('headerController', function ($scope) {
        $scope.name = resume.name;
        $scope.email = resume.email;
        $scope.city = resume.city;
    });

angular.module('workExApp',[])
    .controller('workExController', function ($scope) {
        $scope.workExs = resume.workExperience;
    });

angular.module('eduApp',[])
    .controller('eduController', function ($scope) {
        $scope.educations = resume.education;
    });

angular.module('skillsApp',[])
    .controller('skillsController', function ($scope) {
        $scope.areas = resume.skills.areas;
        $scope.langs = resume.skills.programmingLanguages;
        $scope.editors = resume.skills.tools.ideEditor;
        $scope.frameworks = resume.skills.tools.framework;
        $scope.vcss = resume.skills.tools.versionControl;
        $scope.dbmss = resume.skills.tools.dbms;
    });

angular.module('projectsApp',[])
    .controller('projectsController', function ($scope) {
       $scope.projects = resume.projects; 
    });

angular.module('hobbiesApp',[])
    .controller('hobbiesController', function ($scope) {
        $scope.hobbies = resume.hobbies;
    });

//ng-apps bootstrapping

angular.bootstrap(document.getElementById("headerDiv"),['headerApp']);
angular.bootstrap(document.getElementById("workExperienceDiv"),['workExApp']);
angular.bootstrap(document.getElementById("educationDiv"),['eduApp']);
angular.bootstrap(document.getElementById("skillsDiv"),['skillsApp']);
angular.bootstrap(document.getElementById("projectsDiv"),['projectsApp']);
angular.bootstrap(document.getElementById("hobbiesDiv"),['hobbiesApp']);

