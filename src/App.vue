<template>
  <div id="app">
    <div class="flex bg-dark-blue-main h-screen">
      <div
        class="p-6 rounded-xl m-auto max-w-sm bg-dark-blue-card box-shadow"
      >
        <img
          class="mx-auto rounded-xl"
          src="@/assets/image-equilibrium.jpg"
          alt="equlibrium"
        />
        <div class="pt-6">
          <div class="text-white text-2xl font-semibold">Equilibrium #3429</div>
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
              Creation of <span class="text-white">Jules Wyvern</span>
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

export default defineComponent({
  name: "App",
  components: {
    IconEthereum,
    IconClock,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Outfit:300,400,600");

#app {
  font-family: "Outfit", sans-serif;
}

.box-shadow {
  -webkit-box-shadow: 0px 30px 0px 15px rgb(12,23,41), 0px 12px 0px 46px rgb(12,25,44);
  box-shadow: 0px 30px 0px 15px rgb(12,23,41), 0px 12px 0px 46px rgb(12,25,44);
}
</style>
