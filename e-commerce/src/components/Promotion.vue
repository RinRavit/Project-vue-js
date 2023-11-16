<template>
    <div :style="{ background: bgColor }" class="promotion">
      <div class="bor-box">
        <p>{{ description }}</p>
        <Button text="Shop now" color="#3BB77E" bgColor="#fff" />
      </div>
      <div class="bor-I">
        <img :src="image" />
      </div>
    </div>
  </template>
  <script>
  
  import Button from "../components/Button.vue";
  export default {
  
    name: "Promotion",
    components: {
      Button,
    },
    props: ["description", "buttonComponent", "bgColor", "image"],
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
  .promotion {
    width: auto;
    flex-shrink: 0;
    border-radius: 10px;
    display: flex;
    position: relative; 
  }
  
  .bor-box {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50px;
    top: 80px;
    gap: 10px;
  }
  .bor-box p {
    font-size: 20px;
    font-weight: bolder;
    font-family: "Quicksand", sans-serif;
    color: #253D4E;
  }
  .bor-I {
    width: 510px;
    height: 249px;
    margin-top: 40px;
    
   
  }
  </style>