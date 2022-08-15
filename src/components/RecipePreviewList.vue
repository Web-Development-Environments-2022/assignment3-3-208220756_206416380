<template>
  <b-container v-if="renderComponent">
    <b-alert id = "alert" :show="dismissCountDown" dismissible variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        Recipe was added to favorite list successfully
    </b-alert>
    <b-row v-if="renderComponent" >
      <b-col v-for="r in recipes" :key="r.id" class="card"  >
      
        <RecipePreview class="recipePreview" :recipe="r" :title="title" />
        <div v-if="title == 'Random Recipes' || title=='Search Result'  || title=='Last Watched Recipes' " style="text-align:right;">
          <a href="!#" @click=" showAlert();">
             <b-icon  class="addFav" icon="heart-fill"  @click="postFavoriteRecipes(r.id);"></b-icon>
          </a>
        </div >
        <div v-else @click='setDelete(r.id)'  style="text-align:left;"> 
            <img v-b-modal.modal-1 src="../assets/garbage.png" style="width:20px;" />
        </div>
      </b-col>
      <b-col>
        <div>
          <b-modal id="modal-1" title="BootstrapVue" @ok = "handleOk">
            <p class="my-4">Are you sure you want to remove this Recipe from favorite?</p>
          </b-modal>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="title=='Random Recipes'"  @click="getRandomRecipes" >
    <button style="background-color:#66a992; border:none; color:white;border-radius:10px;margin-top: 10px;margin-left: 2px;letter-spacing: 0.2em;">Randomize</button>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    vertical:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      recipes: [],
      dismissSecs: 2,
      dismissCountDown: 0,
      toDelete:'',
      renderComponent : true,
     
    };
  },
  mounted() {
    if (this.title == 'Random Recipes'){
      this.getRandomRecipes();
    }
    if (this.title == 'Last Watched Recipes'){
      this.getLastWatchedRecipes();
    }
    if (this.title == 'Favorite Recipes'){
      this.getFavoriteRecipes();
    }
    if (this.title == 'Private Recipes'){
      this.getPrivateRecipes();
    }
    if (this.title == 'Family Recipes'){
      this.getFamilyRecipes();
      
    }
  },
  methods: {
    fill(id)
    {
        console.log(id)
    }
    ,
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
    async handleOk(){
        if (this.title == 'Random Recipes'){
          this.deleteFavoriteRecipes(this.toDelete)
          this.getFavoriteRecipes()
        }
        if (this.title == 'Private Recipes'){
          await this.deletePrivateRecipes(this.toDelete)
          await this.getPrivateRecipes()
        }
        if (this.title == 'Favorite Recipes'){
          await this.deleteFavoriteRecipes(this.toDelete)
          await this.getFavoriteRecipes()
        }
        if (this.title == 'Family Recipes'){
          await this.deleteFamilyRecipes(this.toDelete)
          await this.getFamilyRecipes()
        }
       
        await this.forceRerender()
        
    },
    setDelete( recipe_id){
        this.toDelete = recipe_id
    },
    async forceRerender() {
        this.renderComponent = false;
        
        this.$nextTick(() => {
          this.renderComponent = true;
          
        }); 
    },
     async postFavoriteRecipes(Id) {
      
      
 
      try { 
        const response = await this.axios.post(
          "http://localhost:3000/users/favorites",
          {
            recipeId: Id
          }
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
      } catch (error) {
        console.log(error);
      }
    },
    async getRandomRecipes() {
     this.recipes = [];
      try {
        const response = await this.axios.get(
          "http://localhost:3000/recipes/threeRandom",
          /*this.$root.store.server_domain + "/recipes/threeRandom",*/
        );
        //const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        
      } catch (error) {
        console.log(error);
      }
    },
    async getFavoriteRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favorites",
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
        //const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async getPrivateRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/privates",
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
        //const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        //console.log(recipes)
      } catch (error) {
        console.log(error);
      }
    },
    async getFamilyRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/familyrecipes",
          /*this.$root.store.server_domain + "/users/familyrecipes",*/
        );
        //const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        
      } catch (error) {
        console.log(error);
      }
    },
    async getLastWatchedRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/watched",
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
        //const recipes = response.data.recipes;
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        
      } catch (error) {
      }
    },
    async deleteFavoriteRecipes(Id){
      try {
        const response = await this.axios.delete(
          "http://localhost:3000/users/favorite",
          {
            data:{ recipeId: Id }
            
          }
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
      } catch (error) {
        console.log(error);
      }
    },
    async deletePrivateRecipes(Id){
      console.log("Hola")
      try {
        const response = await this.axios.delete(
          "http://localhost:3000/users/private",
          {
            data:{ recipeId: Id }
            
          }
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
      } catch (error) {
        console.log(error);
      }
    },
    async deleteFamilyRecipes(Id){
      try {
        const response = await this.axios.delete(
          "http://localhost:3000/users/family",
          {
            data:{ recipeId: Id }
            
          }
          /*this.$root.store.server_domain + "/users/favorites",*/
        );
      } catch (error) {
        console.log(error);
      }
    },
    async searchQuery(query,cusine,diet,intol,num,sortFilter)
    {
      this.recipes=[]
      let res=[]
      console.log(query,cusine,diet,intol)
      if(cusine=="ALL")
      {
       cusine=undefined
      }
       if(diet=="None")
       {
       diet=undefined
      }
       if(intol=="None")
       {
       intol=undefined
       }
      
      try {
        const response = await this.axios.get(
          "http://localhost:3000" + "/recipes/search/",
          {params:{query:query,cusine:cusine,intolerance:intol,diet:diet,number:num}},
        );

      if(response.data.length!=0)
      {
        for(let i=0;i<response.data.length;i++)
        {
          res.push(response.data[i])

        }
      }
      else{
        

      }



      if(sortFilter=="Default"){
        
      }
      else if(sortFilter=="Prepare Time"){
      res.sort((a, b) => parseInt(a.readyInMinutes) - parseInt(b.readyInMinutes));
      }
      else // Stars
      {
      res.sort((a, b) => parseFloat(a.popularity) - parseFloat(b.popularity));
      }

      
      this.recipes=res
      return
  
       
      } catch (error) {
        console.log(error);
      }

    },
   
    
    
  }
};
</script>

<style lang="scss" scoped>
.alert{
    position:fixed; 
    top: 0px; 
    left: 0px; 
    width: 100%;
    z-index:9999; 
    border-radius:0px
}

.card{
  
  
  min-height: 380px;
  margin: 5px;
  background-color: rgb(255, 255, 255);
  padding-left: 0;
  padding-right: 0;
  border: none;
  max-width: 28%; 
  min-width:28%;
}

col{

  background-color: red;
}

.addFav{

    position: absolute;
        float:right;
        font-size: 28px;
        padding: 5px;
        top: 0;
        right:0;
        color:rgb(209, 20, 20);
}

[class*="card"] {
  min-width: 60%;
}

@media only screen 
and (min-device-width : 720px) 
 {
  .card{
    min-width: 27%;
    max-width: 27%;
   
  }
  
/* Styles */
}



</style>
