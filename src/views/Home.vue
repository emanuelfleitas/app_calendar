<template>

    
    <!-- <calendar/>
    <hr>
    <v-date-picker v-model="date" @click="show()"/>
    <v-date-picker
      :value="null"
      color="red"
      is-red
      is-range
    />
 -->
    <p>Numero del dia <input type="text" v-model="numero"></p>
    <p>Descripcion <input type="text" v-model="tarea"></p>

    
    <v-calendar :attributes='attributes'  />
   <!--  <v-date-picker
    
      v-model="range"
      is-range
    /> -->
    <button @click="show()">mostrar rango</button>

    <!-- <v-calendar title-position="left" /> -->
    <!-- <v-calendar title-position="right" /> -->
</template>

<script>

import VCalendar from 'v-calendar';
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';

export default {
  components: { Calendar },
  name: 'Home',
  component:{
    VCalendar ,
    SetupCalendar,
    Calendar,
    DatePicker ,
  },
  data(){
    const todos = [{
      description:'',
      isComplete:false,
      dates:{days:'1'},
      color:'red'
    }]
    return{ 
      numero:'',
      incId:todos.length,
      todos,
      tarea:'',
      date:new Date(),
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5)
      },

      attrs:[
        {
          key:'today',
          highlight: true,  
          dates:new Date()      
        }
      ],

      atributes: [
      {
        // and will most likely be derived from your data object
       /*  key: 1, */
        // Attribute type definitions
        highlight: true,  // Boolean, String, Object
        dot: true,        // Boolean, String, Object
        bar: true,        // Boolean, String, Object
        content: 'red',   // Boolean, String, Object
        /* popover: { ... }, */ // Only objects allowed
        // Your custom data object for later access, if needed
        /* customData: { ... }, */
        // We also need some dates to know where to display the attribute
        // We use a single date here, but it could also be an array of dates,
        //  a date range or a complex date pattern.
       /*  dates: new Date(), */
        // You can optionally provide dates to exclude
        excludeDates: null,
        // Think of `order` like `z-index`
        order: 1
      }
    ]
    }
  },
  computed:{ 
    attributes(){
      this.todos.description = this.tarea
      this.todos.dates = {
        days:this.numero
      }
      console.log(this.todos)
      return[
        ...this.todos.map(todo => (
          {
            dates: todo.dates,
            dot:{
              color:todo.color,
              class:todo.isComplete ? 'opacity-75' : ''
            },
            popover:{
              label:this.tarea,
              visibility: 'click',
              /* visibility: 'focus', */
            },
            customData:todo,
          }
        ))
      ]
    }

  },
  methods:{ 
    
    
    show(){
      console.log(this.range);
    }
  }
}
</script>
