<template>
    <div>
      <router-link v-bind:to="{name: 'home'}">Home</router-link>
      <router-link v-bind:to="{name: 'second'}">Second</router-link>
      <router-view></router-view>
    </div>
</template>