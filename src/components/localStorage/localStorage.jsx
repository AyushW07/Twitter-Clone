import { atom } from "recoil";

let localData = "";

if (localStorage.getItem("user")) {
  localData = JSON.parse(localStorage.getItem("user"));
}

export const localDataStorage = atom({
  key: "localDataStorage",
  default: [
    {
      name: "ayush",
      email: "ayush7@gmail.com",
      phone: 9876543210,
      password: "ayush111",
    },
    ...localData,
  ],
});

export const emailShowHome = atom({
  key: "emailShowHome",
  default: "",
});
