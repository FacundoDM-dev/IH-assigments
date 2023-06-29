<template>
  <div class="container">
    <div class="row">
      <div
        class="d-flex justify-content-center flex-column align-items-center mt-5 mb-5"
      >
        <h1 class="mb-4">IronContacts</h1>
        <div class="d-flex justify-content-center gap-4">
          <button class="btn btn-primary" @click="addRandomContact">
            Add Random Contact
          </button>
          <button class="btn btn-primary" @click="sortScore">
            Sort by popularity
          </button>
          <button class="btn btn-primary" @click="sortContact">
            Sort by name
          </button>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr class="text-center">
            <th>Piture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading == true">
            Loading...
          </tr>
          <tr v-else
            class="text-center"
            v-for="contact in contactsArray"
            :key="contact.id"
          >
            <td>
              <img
                class="rounded-4"
                style="width: 15vh"
                :src="contact.pictureUrl"
                :alt="contact.name"
              />
            </td>
            <td class=" align-middle" v-text="contact.name"></td>
            <td class=" align-middle" v-text="contact.popularity.toFixed(2)"></td>
            <td class=" align-middle">
              <span v-if="contact.wonOscar"
                ><i class="fa-solid fa-award fa-beat-fade fa-2xl"></i
              ></span>
              <span v-else>-----</span>
            </td>
            <td class=" align-middle">
              <span v-if="contact.wonEmmy"
                ><i class="fa-solid fa-trophy fa-2xl"></i
              ></span>
              <span v-else>-----</span>
            </td>
            <td class=" align-middle">
              <button class="btn btn-danger" @click="deleteContact(contact.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";

// Importar directamente un archivo JSON
// ----------------------------------------

// import ContactData from "./contacts.json";
// const contacts = ref(ContactData);

// ----------------------------------------


// MirageJs localserver de un archivo JSON
// ----------------------------------------

const contacts = ref([]);
const contactsArray = ref([]);
const loading = ref(true)

const computedContacts = computed(() => {
  const contactIds = contactsArray.value.map((contact) => contact.id);
  const remaining = contacts.value.filter((contact) => !contactIds.includes(contact.id));
  return remaining;
});



const fetchData = async () => {
  try {
    const response = await fetch("/api/contacts");
    const data = await response.json();
    loading.value = false
    contacts.value = data.contactsServer;
    // console.log(contacts.value);
  } catch (error) {
    console.log("error request: ", error);
  }
};


onMounted(async () => {
  await fetchData();
  contactsArray.value = contacts.value.slice(0, 5);
  console.log(contactsArray.value);
});




const addRandomContact = () => {
  if(computedContacts.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * computedContacts.value.length);
    const randomContact = computedContacts.value[randomIndex];
    contactsArray.value = [randomContact, ...contactsArray.value];
  } else {
    alert("Sorry, no more contacts available!")
  }
  
};

const sortContact = () => {
  contactsArray.value.sort((a, b) => a.name.localeCompare(b.name));
};

const sortScore = () => {
  contactsArray.value.sort((a, b) => b.popularity - a.popularity);
};

const deleteContact = (id) => {
  contactsArray.value = contactsArray.value.filter((contact) => contact.id !== id);
};



// ----------------------------------------
</script>

<style></style>
