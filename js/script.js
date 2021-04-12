var app = new Vue ({
 el: "#app",
 data: {
 baseUrl: 'https://api.themoviedb.org/3/search/',
 api_key: "feaf6db23feb7f3f96d8b38aa0e56ba0",
 searchInput: '',
 resultsMovie: [],
 resultsTv: [],
 indexMovie: null,
 indexLanguage: 0,
 language: [
   'it-IT',
   'en-EN',
   'fr-FR',
   'es-ES'
 ]
 },

 methods: {

 searchFilm: function() {
 axios.get(this.baseUrl + 'movie', {
   params: {
     api_key: this.api_key,
     query: this.searchInput,
     language: this.language[this.indexLanguage]
    }
   })
   .then( (risposta) => {
    this.resultsMovie = risposta.data.results;
    console.log(this.resultsMovie);
   });

   axios.get(this.baseUrl + 'tv', {
     params: {
       api_key: this.api_key,
       query: this.searchInput,
       language: this.language[this.indexLanguage]
      }
     })
     .then( (risposta) => {
      this.resultsTv = risposta.data.results;
      console.log(this.resultsTv);
     });
  },

 },

});
