<template>
    <div>
      <nav class="navbar bg-white border-bottom navbar-light">
        <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Home</router-link>
        <router-link class="btn nav-btn" :to="{name: 'second'}">Second</router-link>
      </nav>
      <div class="mt-4 md-4 pl-4 pr-4"></div>
      <router-view></router-view>
    </div>
</template>