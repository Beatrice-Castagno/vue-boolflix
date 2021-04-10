var app = new Vue ({
 el: "#app",
 data: {
 searchInput: '',
 resultsSearch: [],
 },

 methods: {

 searchFilm: function() {
 axios.get('https://api.themoviedb.org/3/search/movie', {
   params: {
     api_key: "feaf6db23feb7f3f96d8b38aa0e56ba0",
     query: this.searchInput,
     language: "it-IT"
    }
   })
   .then( (risposta) => {
    this.resultsSearch = risposta.data.results;
    console.log(this.resultsSearch);
   });
  }
 },

});
