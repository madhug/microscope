if (Posts.find().count() === 0){
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });
    Posts.insert({
        title: 'Something interesting',
        url: 'http://something-interesting.com'
    });
    Posts.insert({
        title: 'Tumblords!',
        url: 'http://tumblr.com/'
    });
}