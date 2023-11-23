<template>
  <div class="content">
    <div class="Popular1">
      <div class="Popular">Feature Category</div>
      <div class="All">
      <div class="Popular">All</div>
      <div class="Popular">Milke & Dairies</div>
      <div class="Popular">Coffees & Teas</div>
      <div class="Popular">Meats</div>
      <div class="Popular">Vegetable</div>
      <div class="Popular">Fruite</div>
      </div>
      </div>
    <div class="row1">
      <Category
        v-for="category in store.categories"
        :key="category.id"
        :image="category.image"
        :bgColor="category.color"
        :name="category.name"
        :group="category.group"
        :qty="category.item"
      />
    </div>
    <div class="row2">
      <Promotion
        v-for="promotion in store.promotions"
        :key="promotion.id"
        :description="promotion.title"
        :bgColor="promotion.color"
        :image="promotion.image"
      />
    </div>
    <div class="Popular1">
      <div class="Popular">Popular products</div>
      <div class="All">
      <div class="Popular">All</div>
      <div class="Popular">Milke & Dairies</div>
      <div class="Popular">Coffees & Teas</div>
      <div class="Popular">Meats</div>
      <div class="Popular">Vegetable</div>
      <div class="Popular">Fruite</div>
      </div>
      </div>
    <div class="product1">
      <Product v-for="product in store.products" 
      :key="product.id"
      :image="product.image" 
      :bgcolor="product.color" 
      :title="product.title" 
      :number="product.number"
      :title1="product.title1"
      :image1="product.image1"
      :total="product.total"
      :total1="product.total1"
      :order:="product.order"
      :bgB="product.bg"/>
    </div>
    
    <div class="product2">
      <Product1 v-for="product1 in store.Products1" 
      :key="product1.id"
      :image="product1.image"
      :bgcolor="product1.color" 
      :title="product1.title" 
      :number="product1.number"
      :title1="product1.title1"
      :image1="product1.image1"
      :total="product1.total"
      :total1="product1.total1"
      :order:="product1.order"
      :image2="product1.imagebutton"/>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Category from "./components/Category.vue";
import Product from './components/Product.vue';
import Promotion from "./components/Promotion.vue";
import Product1 from "./components/Product1.vue";

import { useStore } from "./stores/store";
export default {
  name: "App",
  components: {
    Button,
    Category,
    Promotion,
    Product,
    Product1,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
body {
 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
 
  
}
.All{
  
  width: 800px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-left: 700px;
  justify-content: space-between;
}
.Popular1{
  display: flex;
  flex-direction: row;

  width: 1730px;
  height: 40px;
  margin-left: 35px;
  background-color: rgb(255, 255, 255);
}
.Popular{
  font-size: 180%;
  color: #253D4E;
  font-family: Quicksand ;
 
  
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  
}
.row1 {
  display: flex;
  gap: 40px;
}
.row2 {
  display: flex;
  align-items: center;
  gap: 80px;
  justify-items: center;
}
.product1{
  display: flex;
  gap: 50px;
  margin-top: 10px;
  margin-left: 5px;
  border: 1px;
  
}
.product2{
  display: flex;
  gap: 50px;
  margin-top: 10px;
  margin-left: 5px;
  border: 1px;
}
</style>