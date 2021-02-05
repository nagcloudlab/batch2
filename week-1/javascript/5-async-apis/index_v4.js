



//----------------------------------------------------------------
// Service module ==> no ui logic i.e any async computation , async n/w calls
//----------------------------------------------------------------

const service = {
    getGithubUserProfile(user) {
        // N/W call
        let githubUserProfileApi = `https://api.github.com/users/${user}`
        const promise = fetch(githubUserProfileApi)
        return promise;
    }
}


//----------------------------------------------------------------
// UI module  ==> complete rendering logic
//----------------------------------------------------------------

const ProfileUIComponent = {
    render() {
        //..
        const promise = service.getGithubUserProfile('nagabhushanamn')
        console.log("loading user profile..")
        promise
            .then(response => {
                return response.json();
            })
            .then(user => {
                console.log(user)
            })
    }
}

ProfileUIComponent.render();