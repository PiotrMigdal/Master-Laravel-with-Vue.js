<template>
    <div>
      <nav class="navbar bg-white border-bottom navbar-light">
        <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Home</router-link>
        <router-link class="btn nav-btn" :to="{name: 'second'}">Second</router-link>
      </nav>
      <router-view></router-view>
    </div>
</template>