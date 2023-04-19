<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script setup>
const getTodoInfo = async() => {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => json)
}

var { title } = await getTodoInfo()

</script>
