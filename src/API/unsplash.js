import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 1EvrwDwn8cy11LYlTrFV2T4X-1mFVBhpC1fHEv_3Aps",
  },
});
