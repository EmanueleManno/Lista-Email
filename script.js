//VEDO SE FUNZIONA VUE:
console.log("VUE OK", Vue);

//ESTRAPOLO IL METODO PER CREARE L'APP:
const { createApp } = Vue;

//CREO L'APPLICAZIONE:
const app = createApp({
  data() {
    return {
      //CREO UN ARRAY DI MAIL INIZIALE VUOTO:
      emails: [],
      //SETTO IL NUMERO DI MAIL DA GENERARE:
      items: 10,
    };
  },

  methods: {
    //GENERA UNA MAIL CASUALE:
    getRandomEmails() {
      for (let i = 0; i < this.items; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((output) => {
            const emailOutput = output.data.response;
            //PUSHA IL RISULTATO:
            this.emails.push(emailOutput);
          });
      }
    },
  },

  created() {
    this.getRandomEmails();
  },
});

//MONTO IN PAGINA:
app.mount("#root");
