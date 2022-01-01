<template>
  <div id="app">
    <div class="flex bg-dark-blue-main h-screen">
      <div class="p-6 rounded-xl m-auto max-w-sm bg-dark-blue-card box-shadow">
        <div class="cursor-pointer relative container">
          <img
            class="mx-auto rounded-xl opacity-100 block w-full h-auto transition"
            src="@/assets/image-equilibrium.jpg"
            alt="equlibrium"
          />
          <div class="overlay opacity-0 w-full h-full top-1/2 text-center absolute left-1/2 flex rounded-xl transition">
            <IconView class="m-auto" />
          </div>
        </div>
        <div class="pt-6">
          <div
            class="text-white inline-flex text-2xl font-semibold transform duration-300 ease-in-out hover:text-cyan-primary cursor-pointer"
          >
            Equilibrium #3429
          </div>
          <div class="text-soft-blue-primary text-xl py-4 font-thin">
            Our Equilibrium collection promotes balance and calm.
          </div>
          <div class="flex justify-between pb-4">
            <div class="flex text-cyan-primary font-semibold">
              <IconEthereum class="my-auto mr-2" />
              <span>0.041 ETH</span>
            </div>
            <div class="flex text-soft-blue-primary">
              <IconClock class="my-auto mr-2" />
              <span>3 days left</span>
            </div>
          </div>
          <div class="border-t border-soft-blue-primary opacity-20"></div>
          <div class="pb-2 flex font-thin pt-4 text-soft-blue-primary">
            <div class="pr-4">
              <img
                class="h-8 border rounded-full"
                src="@/assets/image-avatar.png"
                alt="avatar"
              />
            </div>
            <div class="my-auto">
              Creation of
              <span class="text-white transform duration-300 ease-in-out hover:text-cyan-primary cursor-pointer">Jules Wyvern</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconEthereum from "@/components/IconEthereum.vue";
import IconClock from "@/components/IconClock.vue";
import IconView from "@/components/IconView.vue";

export default defineComponent({
  name: "App",
  components: {
    IconView,
    IconEthereum,
    IconClock
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Outfit:300,400,600");

#app {
  font-family: "Outfit", sans-serif;
}

.box-shadow {
  -webkit-box-shadow: 0px 30px 0px 15px rgb(12, 23, 41),
  0px 12px 0px 46px rgb(12, 25, 44);
  box-shadow: 0px 30px 0px 15px rgb(12, 23, 41),
  0px 12px 0px 46px rgb(12, 25, 44);
}

.container:hover img {
  opacity: 0.8;
}

.container:hover .overlay {
  opacity: 1;
}

.overlay {
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  --tw-bg-opacity: 0.5;
  background-color: hsla(178, 100%, 50%, var(--tw-bg-opacity));
}
</style>
