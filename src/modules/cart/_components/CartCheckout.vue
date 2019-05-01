<template>
  <div class="form">
    <div class="title">Shipping Address</div>
    <div class="field">
      <label class="label">Country</label>
      <div class="control">
        <div class="select">
          <select v-model="formCart.country">
            <option selected>Select dropdown</option>
            <option v-for="country in countries" :key="country.code" :value="country">{{country.name}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Ex: John" v-model="formCart.firstName">
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Ex: Doe" v-model="formCart.lastName">
      </div>
    </div>

    <div class="field">
      <label class="label">Street Address</label>
      <div class="control">
        <input class="input" type="text" placeholder="Street Address" v-model="formCart.StreetAddress">
      </div>
    </div>

    <div class="field">
      <label class="label">Apt/Suite (optional)</label>
      <div class="control">
        <input class="input" type="text" placeholder="Apt/Suite (optional)" v-model="formCart.appSuite">
      </div>
    </div>

    <div class="field">
      <label class="label">City</label>
      <div class="control">
        <input class="input" type="text" placeholder="City" v-model="formCart.city">
      </div>
    </div>

    <div class="field">
      <label class="label">State</label>
      <div class="control">
        <input class="input" type="text" placeholder="State" v-model="formCart.state">
      </div>
    </div>

    <div class="field">
      <label class="label">Zip Code</label>
      <div class="control">
        <input class="input" type="text" placeholder="Zip Code" v-model="formCart.zip">
      </div>
    </div>

    <div class="field">
      <label class="label">Phone Number</label>
      <div class="control">
        <input class="input" type="number" placeholder="Phone Number" v-model="formCart.phone">
      </div>
    </div>

    <div class="field">
      <label class="label">Company Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Company Name (Optional)" v-model="formCart.company">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="checkout()">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text" @click="goBack()">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
import countryList from 'country-list';

export default {
  data() {
    return {
      formCart: {}
    };
  },
  computed: {
    countries() {
      return countryList.getData();
    }
  },
  methods: {
    checkout() {
        console.log(this.formCart)
      this.$store.dispatch('$_cart/checkout', this.formCart);
      this.formCart = {};
    },
    goBack() {
        this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
    margin: 10px;
}
</style>
