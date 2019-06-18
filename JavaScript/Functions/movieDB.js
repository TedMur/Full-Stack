console.log('Connected')

var movies = [{
    title: "Frozen",
    rating: "NA",
    watched: false
}, {
    title: "Zootopia",
    rating: 5,
    watched: true
}, {
    title: "Coco",
    rating: 5,
    watched: true
}, {
    title: "X-Men",
    rating: 3,
    watched: true
}]

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.watched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" -";
    result += movie.rating + " stars;"
    console.log(result)
})