<template>
    <section>
    <section>
        <h1>{{ message }} {{name}}</h1>
        <div v-bind:id="message">
            <h2>08 | 理解单文件组件</h2>
        </div>
        <todo-list>
            <todo-item @delete="handlerDelete" v-for="item in list" v-bind:key="item.title" :title="item.title" :del="item.del">
                <!-- v2.5 and before -->
                <span slot="pre-icon">pre-icon</span>
                <!-- since v2.6-->
                <template v-slot:suf-icon="{value}">
                    <span>suf-icon {{value}}</span>
                    <span v-if="value > 0.5">Big</span>
                    <span v-else>Small</span>
                </template>
            </todo-item>
        </todo-list>
    </section>
    <section>
        <h2>09 | 双向绑定和单向数据流不冲突</h2>
        <div>
            <span>使用v-model</span>
            <input type="text" v-model="message">
        </div>
        <div>
            <span>使用v-bind和v-on</span>
            <input type="text" :value="message" @input="handleChange">
        </div>
    </section>
    </section>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
    TodoList
  },
  data() {
    return {
      message: 'Hello-World!',
      name : "Vue",
      list: [{
          title: 'クラス１',
          del: false
      },
      {
          title: 'クラス２',
          del: true
      },
      {
          title: 'クラス３',
          del: false
      },
      {
          title: 'クラス４',
          del: true
      },
      {
          title: 'クラス５',
          del: false
      }]
    }
  },
  methods: {
    handleChange(e) {
        this.message = e.target.value;
    },  
      handlerDelete(val1, val2) {
          console.log('app:handlerDelete:', val1, val2);
          this.list.forEach(element => {
              if (element.title == val1) {
                  element.del = !val2;
              }
          });
      }
  }
}
</script>

<style>
    body {
        background-color: bisque;
    }
</style>
