window.addEventListener('scroll', function() {
    const scrollActions = document.getElementsByClassName('scroll-action'); 
    const scrollSearch = document.querySelector('.search-action'); 

    
    for (let i = 0; i < scrollActions.length; i++) {
        const action = scrollActions[i]; 

        if (window.scrollY > 15) {
            
            action.classList.add('scroll');
            scrollSearch.classList.remove('scroll'); 
        } else {
            
            action.classList.remove('scroll');
            scrollSearch.classList.add('scroll');
        }
    }
});

