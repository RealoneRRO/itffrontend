<template>
  <div class="mt-5">
    <b-form @submit="onSubmit">
      <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="email"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          type="password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(this.form.username);
    }
  }
};
</script>
