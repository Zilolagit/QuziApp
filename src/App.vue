<template>
  <div>
    <div v-if="$route.path != '/login' && $route.path != '/signup'" class="card flex justify-content-start">
      <Menu :model="items" class="w-full md:w-20rem ">
        <template #start>
          <button v-ripple
            class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-column">
              <span class="font-bold">{{ username }}</span>
              <span class="text-sm">User</span>
            </span>
          </button>
        </template>
        <template #submenuheader="{ item }">
          <span class="text-primary font-bold">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
              <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
              <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                item.shortcut }}</span>
            </a>
          </router-link>
          <a v-else v-ripple class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" />

            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
              item.shortcut }}</span>
          </a>
        </template>
      </Menu>


    </div>
    <div class="view">
      <RouterView />
    </div>
    <ScrollTop />

  </div>
</template>

<script setup>

// PrimeVue Components


// Router & Ref & onMounted
import { ref } from "vue";
import { onMounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import router from './router';

// Pinia
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth"
const useAuth = useAuthStore()
let { username, password } = storeToRefs(useAuth)

// My Variables

const items = ref([
  {
    separator: true
  },
  {
    label: 'Documents',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus',
        shortcut: '⌘+N',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S',
      },
      {
        label: 'Ranking',
        icon: 'pi pi-chart-bar',
        shortcut: 'Ctrl+R',
        route: "/ranking"
      },
      {
        label: 'History',
        icon: 'pi pi-clock',
        shortcut: 'Ctrl + H',
      },
      {
        label: 'Testimonials',
        icon: 'pi pi-heart',
      },
    ]
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        shortcut: '⌘+O',
      },
      {
        label: 'Contact',
        icon: 'pi pi-question',
        route: '/contact'
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        shortcut: 'Ctrl+Q',
        route: "/login",
      }
    ]
  },
  {
    separator: true
  }
]);

const CtrlPress = ref(false)

// My Functions

onMounted(() => {
  username.value = localStorage.getItem("username") || ""
  password.value = localStorage.getItem("password") || ""
  if (!(username.value && password.value)) {
    router.replace("/login")
  }
});

window.onkeydown = (event) => {
  if (event.key == "Control" ){
    CtrlPress.value = true
    console.log(CtrlPress.value);
    return
  }
  if (CtrlPress && event.key == "q" || event.key == "Q"){
    router.replace("/login")
    return
  }
}

</script>

<!-- Global Style -->

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  height: 700px;
}

.view {
  position: fixed;
  right: 0;
  top: 0;
  padding: 0 10px;
  width: 79%;
  height: 100%;
  overflow: auto;
}

.card {
  width: 21%;
  height: 100%;
  position: fixed;
  overflow: auto;
  top: 0px;
  left: 0;
}

.card::-webkit-scrollbar {
  width: 5px;
}

.card::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}

.card::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 25px;
}

.p-menu {
  border-radius: 0;
}



</style>