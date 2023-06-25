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
          <tr
            class="text-center"
            v-for="contact in contacts.slice(0, 5)"
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
            <td v-text="contact.name"></td>
            <td v-text="contact.popularity.toFixed(2)"></td>
            <td>
              <span v-if="contact.wonOscar"
                ><i class="fa-solid fa-award fa-beat-fade fa-2xl"></i
              ></span>
              <span v-else>-----</span>
            </td>
            <td>
              <span v-if="contact.wonEmmy"
                ><i class="fa-solid fa-trophy fa-2xl"></i
              ></span>
              <span v-else>-----</span>
            </td>
            <td>
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
import { ref, reactive } from "vue";

// Importar directamente un archivo JSON
// ----------------------------------------

import ContactData from "./contacts.json";

let contacts = ref(ContactData);
console.log(contacts);

// ----------------------------------------

// MirageJs localserver de un archivo JSON
// ----------------------------------------

// let contacts = ref([]);

// console.log(contacts);

// const fetchData = async () => {
//   try {
//     const response = await fetch("/api/contacts");
//     const data = await response.json();
//     contacts.value = data.contactsServer;
//   } catch (error) {
//     console.log("error request: ", error);
//   }
// };
// fetchData();

const addRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.value.length);
  const randomContact = contacts.value[randomIndex];
  contacts.value = [randomContact, ...contacts.value];
};

const sortContact = () => {
  contacts.value.sort((a, b) => a.name.localeCompare(b.name));
};

const sortScore = () => {
  contacts.value.sort((a, b) => b.popularity - a.popularity);
};

const deleteContact = (id) => {
  contacts.value = contacts.value.filter((contact) => contact.id !== id);
};

// ----------------------------------------
</script>

<style></style>
