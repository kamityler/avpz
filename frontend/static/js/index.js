const navigateTo = url =>{
    history.pushState(null,null,url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: 'main' },
        { path: "/posts", view: 'posts' },        
        { path: "/settings", view: 'settings' }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches=>potentialMatches.isMatch);

    if(!match)
    {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    console.log(match.route.view);

};


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e=>{
        if (e.target.matches("[data-link")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    
    router();

});

