app.factory("user", function($q, $http) {

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.isCommitteeMember = plainUser.isCommitteeMember;
        this.apartment = plainUser.apartment;
         }


         function login(email, pwd) {
            var async = $q.defer();
    
            var loginURL = "https://my-json-server.typicode.com/ofiram1966/Veadit-House-Commitee/users?email=" +
                email + "&pwd=" + pwd;
            $http.get(loginURL).then(function(response) {
                if (response.data.length > 0) {
                    // success login
                    activeUser = new User(response.data[0]);
                    async.resolve(activeUser);
                } else {
                    // invalid email or password
                    async.reject("invalid email or password")
                }
            }, function(error) {
                async.reject(error);
            });
    
            return async.promise;
        }
        function isLoggedIn() {
            return activeUser ? true : false;
        }
        function isAdmin() {
            return activeUser.isCommitteeMember ? true : false;
        }
    
        function logout() {
            activeUser = null;
        }
    
        function getActiveUser() {
            return activeUser;
        }
    
        return {
            login: login,
            isLoggedIn: isLoggedIn,
            logout: logout,
            getActiveUser: getActiveUser
        }
})