<template>
    <div>
        <div class="card">
            <div class="card__flex">
                <h3 class="text-center card__text">Login</h3>
                <form @submit.prevent="login">
                    <span class="p-float-label">
                        <InputText id="username" v-model="loginUserName" />
                        <label for="username">Username</label>
                    </span>
                    <span class="p-float-label">
                        <Password id="password" v-model="loginPassword" :feedback="false" toggleMask />
                        <label for="password">Password</label>
                    </span>
                    <Button label="Submit" type="submit" />
                </form>
                <p class="card__link">Yet don't have account ? <RouterLink to="/signup">Sign Up</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup >

// Router
import router from '@/router';
import { RouterLink } from 'vue-router';

// Toastify & Ref
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Pinia
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from 'pinia';
const useAuth = useAuthStore()
let { username, password, country } = storeToRefs(useAuth)

// Declaring a variable
let loginUserName = ref("");
let loginPassword = ref("");

// My Functions
function login() {
    username.value = localStorage.getItem("username") || ""
    password.value = localStorage.getItem("password") || ""
    country.value = JSON.parse(localStorage.getItem("country")) || []
    console.log(country.value);
    if (username.value == loginUserName.value && password.value == loginPassword.value) {
        router.replace("/")
    } else {
        if (username.value != loginUserName.value) {
            toast.error("Username is wrong! Please, check your username again", {
                autoClose: 2000,
                theme: "colored"
            });
        }
        if (password.value != loginPassword.value) {
            toast.error("Password is wrong! Please, check your password again", {
                autoClose: 2000,
                theme: "colored"
            });
        }
    }
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
        padding-top: 15px;
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