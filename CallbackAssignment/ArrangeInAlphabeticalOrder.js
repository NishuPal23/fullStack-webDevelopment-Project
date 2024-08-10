const books = [
    {
        title : "The Great Gatsby",
        author :"F. Scott Fitzerald",
        year : 1925
    },
    {
        title : "To Kill a Mokingbird",
        author :"Harper Lee",
        year : 1960
    },
    {
        title : "Who are you ?",
        author :"George Orwell",
        year : 1949
    },
    {
        title : "Pride and Prejudice",
        author :"Jane Austen",
        year : 1813
    },
];

function containTitle(books,callback){
    const title = [];
    for(let i =0;i<books.length;i++){
        title.push(books[i].title);

    }
    title.sort();
    return callback(title);
}
function callback(title){
    for(let i of title){
        console.log(i)
    }
};
containTitle(books,callback);

