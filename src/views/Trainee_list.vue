<template>
  <div>
    <div class="top">
      <span class="dropdown">
        <b-dropdown
          text="Year"
          variant="outline-danger"
          class="m-2"
          @select="resultQuery" 
        >
          <b-dropdown-item @click="selectAll" >ALL</b-dropdown-item>
          <b-dropdown-item @click="pickedYear" v-for="year in avaYear" :key="year">{{year}}</b-dropdown-item>
        </b-dropdown>
      </span>
      <!-- Search -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       
       <input  v-model="searchQuery" type="text" name="search" placeholder="Search..">
       
      
    </div>
    
    <!-- Table -->

    <div class="table">
      <b-table :items="resultQuery"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,
      YearFilter: null,
      items: [
        {
          first_name: "abiodun",
          last_name: "",
          Other_name: "",
          State: "",
          Gender: "",
          Email_Address: "",
          Date_of_Birth: "",
          Phone_No: "",
          Year: "2019",
          Form_No: "",
          Date: "",
        },
        {
          first_name: "victor",
          last_name: "",
          Other_name: "",
          State: "",
          Gender: "",
          Email_Address: "",
          Date_of_Birth: "",
          Phone_No: "",
          Year: "2020",
          Form_No: "",
          Date: "",
        },
        {
          first_name: "ridwan",
          last_name: "",
          Other_name: "",
          State: "",
          Gender: "",
          Email_Address: "",
          Date_of_Birth: "",
          Phone_No: "",
          Year: "2017",
          Form_No: "",
          Date: "",
        },
        {
          first_name: "david",
          last_name: "",
          Other_name: "",
          State: "",
          Gender: "",
          Email_Address: "",
          Date_of_Birth: "",
          Phone_No: "",
          Year: "2016",
          Form_No: "",
          Date: "",
        },
      ],
    
    };
    
  },
  watcher: {
    // eslint-disable no-unused-vars
    searchQuery() {
      this.YearFilter = null;
    },
    // eslint-disable no-unused-vars
    YearFilter() {
      this.searchQuery = null;
    },
  },
  computed: {
    resultQuery() {
      console.log("Filter " + this.YearFilter );
      if (this.YearFilter) {
        return this.filteredYears();
      } else if (this.searchQuery) {
        return this.items.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.first_name.toLowerCase().includes(v));
        });
      } else {
        return this.items;
      }

      },
      avaYear(){
        return this.items.map(item => item.Year)
      }
    },
  
  methods: {
    filteredYears() {
      if (!this.YearFilter) return this.items;

      return this.items.filter((item) => {
        return item.Year === this.YearFilter;
      });
    },
    pickedYear(e) {
      this.YearFilter = e.target.innerText;
    },
    selectAll(e){
       this.YearFilter = e.target.allinnerText


    }
    
  },
  

};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  background-image: url(../assets/pattern.jpg);
}
.top {
  margin-top: 30px;
}
.dropdown {
  margin-right: 750px;
}
.table {
  margin-top: 50px;
}

input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid rgb(212, 45, 73);
  background: #f1f1f1;
  border-color: rgb(212, 45, 73);
  box-sizing: border-box;
  border-radius: 10px;
  
}
input:hover {
  background:white;
}

button {
  width: 5%;
  padding: 10px;
  background: rgb(212, 45, 73);
  color:  rgb(212, 45, 73);
  border: 1px solid rgb(212, 45, 73);
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 50px;
}

button:hover {
  background: rgb(212, 45, 73);
}

</style>
