const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-meredith/events`;

const state = {
    parties: []
};

const getParties = async () =>{
    try {
      const response = await fetch(API_URL);

      const json = await response.json();
      state.parties = json.data;
      console.log(state);
    } catch (error) {
        console.log(error);
    }
}
async function first(){
    await getParties();
    displayParties();
}

function displayParties() {
    const body = document.querySelector("body");
    console.log(state);
    state.parties.map((event) => {console.log(event);
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = event.name
    div.appendChild(h2)
    
    body.appendChild(div)
    });
}
first();