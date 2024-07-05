<template>
    <div>
  <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/add">Add a project</RouterLink>
          <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.nav{
    text-align: center;
    margin:40px auto
}
.nav a{
display: inline-block;
text-decoration: none;
margin:0 10px;
color:#999;
font-size:18px
}
a.router-link-active{
    border-bottom: 2px solid #00ce89;
    padding-bottom:4px;
}
</style>