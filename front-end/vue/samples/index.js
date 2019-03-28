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

// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

new Vue({
    el: '#app-8',
    data: {
        a: 1
    },
    methods: {

    },
    // YOU CAN ALSO DEFINE LIFECYCLE METHODS ..
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
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
