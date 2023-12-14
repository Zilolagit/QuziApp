<template>
    <div>
        <div class="card">
            <div class="card__flex">
                <h3 class="text-center card__text">Sign Up</h3>
                <form @submit.prevent="submitProfile">
                    <span class="p-float-label">
                        <InputText id="username" :required="true" v-model="username" />
                        <label for="username">Username</label>
                    </span>
                    <span class="p-float-label">
                        <Password v-model="password" :required="true">
                            <template #header>
                                <h6>Pick a password</h6>
                            </template>
                            <template #footer>
                                <Divider />
                                <p class="mt-2">Suggestions</p>
                                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                    <li>At least one lowercase</li>
                                    <li>At least one uppercase</li>
                                    <li>At least one numeric</li>
                                    <li>Minimum 8 characters</li>
                                </ul>
                            </template>
                        </Password>
                        <label for="password">Password</label>
                    </span>

                    <MultiSelect v-model="selectedCities" required filter :options="cities" optionLabel="name"
                        placeholder="Select Your Country" :maxSelectedLabels="6" class="w-full md:w-20rem">
                        <template #option="slotProps">
                            <div class="flex align-items-center">
                                <img alt="imageOfCountries"
                                    :src="`https://flagsapi.com/${slotProps.option.code}/flat/64.png`"
                                    :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </MultiSelect>
                    <span class="p-float-label">
                        <InputMask id="tel" v-model="t_number" required mask="99-999-99-99" placeholder="99-999-99-99" />
                        <label for="tel">Telephone Number</label>
                    </span>
                    <Button label="Submit" type="submit" />
                </form>
                <p class="card__link">Have an account ? <RouterLink to="/login">Login</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup >

// PrimeVue Components
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';

// Router & Ref
import router from '@/router';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

// Pinia
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from 'pinia';
const useAuth = useAuthStore()
let { username, password, country, t_number } = storeToRefs(useAuth)

// My Variables
const selectedCities = ref(country);

const cities = ref([
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'India', code: 'IN' },
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

// My Functions
function submitProfile() {
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
    localStorage.setItem("country", JSON.stringify(country.value))
    localStorage.setItem("tel_number", t_number.value)
    router.replace("/")
}

</script>

<!-- Global Style -->

<style>
a {
    text-decoration: none;
}

.p-input-icon-right .p-inputtext {
    width: 100%;
}

.p-inputtext {
    width: 100%;
}

.md\:w-20rem {
    width: 100% !important;
    margin-bottom: 30px;
}
</style>

<!-- Local Style -->

<style lang="scss" scoped>
.p-password {
    width: 100%;
}

.card {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &__link {
        padding-top: 20px;
        margin: 0;

        a {
            color: #7e89ec;
        }
    }

    &__text {
        color: #7e89ec;
        padding: 0;
        margin: 0px;
        font-size: 35px;
        margin-bottom: 25px;
    }

    &__flex {
        padding: 20px;
        border: 1px solid #7e89ec;
        border-radius: 5px;
        min-width: 340px;
    }

    input {
        width: 100%;
    }

    span {
        margin-bottom: 35px;
    }

    button {
        width: 100%;
    }
}

@media screen and (min-width: 500px) {
    .card {
        &__flex {
            min-width: 450px;
        }
    }
}
</style>