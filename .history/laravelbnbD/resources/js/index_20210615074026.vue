<template>
    <div>
      <nav class="navbar bg-white border-bottom navbar-light">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'second'}">Second</router-link>
      </nav>
      <router-view></router-view>
    </div>
</template>