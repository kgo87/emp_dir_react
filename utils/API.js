import axios from "axios";
// Limiting search results to 30 people, and nationalities to US, Canada, Great Britain and Germany
const BASEURL = "https://randomuser.me/api/?results=30&nat=us,ca,gb,de";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
