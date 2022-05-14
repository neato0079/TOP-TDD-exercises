const getTheTitles = function(books) {
    let allTitles = [];
    for(i of books){
        allTitles.push(i.title);
    }    
    return allTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
