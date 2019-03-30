new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          NOW, WORKING WITH MULTIPLE COMPONENTS FOR THE VUE APPLICATION 


// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    data: function () { // MUST BE A FUNCTION THAT RETURNS OBJECT {}, & NOT AN OBJECT {} DIRECTLY
      return { /* YOU CAN PASS data PROPS */ }
    },
    template: '<li>{{ todo.text }}</li>'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')" >Enlarge text</button>
        <button v-on:click="$emit('enlarge-text-by-value', 0.1)">
            Enlarge text by Value
        </button>
        <button v-on:click="$emit('enlarge-text-by-listener')">
            Enlarge text by Event Listener
        </button>
        <div v-html="post.content"></div>
    </div>
  `
}) // OR YOU CAN PROBABLY USE v-on:click="onEnlargeText" TOO, WITH onEnlargeText() IN methods
// NOT TOO SURE IF THAT'LL WORK THOUGH, COZ EVEN IF postFontSize++, IT MIGHT NOT UPDATE THE
// <blog-post> ELEMENT, COZ postFontSize + 'em' WAS ONLY A 1-TIME USE WITH NO DATA-BINDING ..

Vue.component('custom-input', {
    props: ["value"],
    template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    ` //  OR YOU CAN PASS IN $event JUST LIKE THAT
})

Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    ` // eg. <alert-box> Something bad happened. </alert-box>
}) // THEREFORE, ' Something bad happened. ' IS PASSED INTO THE <slot></slot> ITEM IN THIS COMPONENT ..

new Vue({
    el: '#app-8',
    data: {
        a: 1,
        posts: [/* ... */],
        postFontSize: 1,
        searchText: ""
    },
    methods: {
        onEnlargeText: (enlargeAmount) => { 
            this.postFontSize + enlargeAmount;
            // this.postFontSize++;
        }
    },
    // YOU CAN ALSO DEFINE LIFECYCLE METHODS ..
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
        // 
        // Alias the component instance as `vm`, so that we  
        // can access it inside the promise function
        var vm = this
        // Fetch our array of posts from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                vm.posts = data // THIS WILL ALSO UPDATE this COMPONENT'S .posts PROPERTY
            })
    },
    mounted: function () {
        // RUN STH RIGHT HERE .. 
    }, updated: function () {
        // RUN STH RIGHT HERE .. 
    }, destroyed: function () {
        // RUN STH RIGHT HERE .. 
    },
    /* Don’t use arrow functions on an options property or callback, such as created: () => console.log(this.a) 
    or vm.$watch('a', newValue => this.myMethod()). Since an arrow function doesn’t have a this, 
    this will be treated as any other variable and lexically looked up through parent scopes until found, 
    often resulting in errors such as Uncaught TypeError: Cannot read property of undefined 
    or Uncaught TypeError: this.myMethod is not a function. */
})
