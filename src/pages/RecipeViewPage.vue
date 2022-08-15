<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img v-if = "this.$route.params.title === 'Private Recipes' || this.$route.params.title === 'Family Recipes'" :src="this.image_src" class="center" />
        <img v-else  :src="this.recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div v-if = "title == 'Family Recipes'"> Owner: {{ recipe.owner }} </div>
              <div v-if = "title == 'Family Recipes'"> Custom time: {{ recipe.custom_time }} </div>
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div v-if = "title == 'Random Recipes'">Likes: {{recipe.aggregateLikes }} likes</div>
              <div >vegan: {{ recipe.vegan }}</div>
              <div >vegetarian: {{ recipe.vegetarian }}</div>
              <div >glutenFree: {{ recipe.glutenFree }}</div>
            </div>
            Ingrediants:
            <ul v-if="this.$route.params.title === 'Private Recipes' || this.$route.params.title === 'Family Recipes'">
              <li
                v-for="(r, index) in recipe.ingrediants"
                :key="index + '_' "
              >
               {{ r.ingrediant }}
                  
              </li>
            </ul>
           <ul v-else>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
        
          </div>
          <div class="wrapped">
            Instructions:
            <ol v-if="this.$route.params.title === 'Private Recipes' || this.$route.params.title === 'Family Recipes'" >
              <li v-for="s in recipe.instructions" :key="s.instruction">
              {{ s.instruction }} 
              </li>
            </ol>
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      recipe: null,
      image_src:'',
      title :null
    };
  },
  async created() {
    this.title = this.$route.params.title
    let response;
    if (this.$route.params.title == "Private Recipes"){
      try{
        response = await this.axios.get("http://localhost:3000/users/private_recipe_info/" + this.$route.params.recipeId)
        let {
            title,
            image,
            readyInMinutes,
            aggregateLikes,
            vegan,
            vegetarian,
            glutenFree,
            instructions,
            ingrediants, 
          } = response.data
          
          this.recipe = {
            title,
            image,
            readyInMinutes,
            aggregateLikes,
            vegan,
            vegetarian,
            glutenFree,
            instructions,
            ingrediants, 
          };
          this.image_src = 'data:image/png;base64,'+this.recipe.image;
          //console.log(this.recipe)
          
        }
        catch (error) {
            //console.log("error.response.status", error.response.status);
            console.log("error")
            this.$router.replace("/NotFound");
            return;
          }   
      }
    else if (this.$route.params.title == "Family Recipes"){
      try{
        response = await this.axios.get("http://localhost:3000/users/family_recipe_info/" + this.$route.params.recipeId)
        
        let {
            title,
            image,
            owner,
            custom_time,
            readyInMinutes,
            aggregateLikes,
            vegan,
            vegetarian,
            glutenFree,
            instructions,
            ingrediants, 
          } = response.data
          
          this.recipe = {
            title,
            image,
            owner,
            custom_time,
            readyInMinutes,
            aggregateLikes,
            vegan,
            vegetarian,
            glutenFree,
            instructions,
            ingrediants, 
          };
          this.image_src = 'data:image/png;base64,'+this.recipe.image;
        }
        catch (error) {
            console.log("error")
            this.$router.replace("/NotFound");
            return;
          }   
      }
    else  {    
        try {
          let response;
          try {
            response = await this.axios.get("http://localhost:3000/recipes/fullinfo/" + this.$route.params.recipeId );
            if (response.status !== 200) this.$router.replace("/NotFound");
          } catch (error) {
            console.log("error.response.status", error.response.status);
            this.$router.replace("/NotFound");
            return;
          }
          
          let {
            analyzedInstructions,
            instructions,
            extendedIngredients,
            aggregateLikes,
            readyInMinutes,
            image,
            title,
            vegan,
            vegetarian,
            glutenFree,
          } = response.data;
          let _instructions = analyzedInstructions
            .map((fstep) => {
              fstep.steps[0].step = fstep.name + fstep.steps[0].step;
              return fstep.steps;
            })
            .reduce((a, b) => [...a, ...b], []);

          let _recipe = {
            instructions,
            _instructions,
            analyzedInstructions,
            extendedIngredients,
            aggregateLikes,
            readyInMinutes,
            image,
            title,
            vegan,
            vegetarian,
            glutenFree,
          };
          this.recipe = _recipe;
        } catch (error) {
          console.log(error);
        }
      }
  }
};
</script>

<style scoped>
image{
  width:  100px;
  height: 100px;
}
.wrapper {
  display: block;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
