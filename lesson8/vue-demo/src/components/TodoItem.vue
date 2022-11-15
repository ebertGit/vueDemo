<template>
    <li>
        <slot name="pre-icon"></slot>
        <span v-if="!del" class="red">{{title}}</span>
        <span v-else style="text-decoration: line-through;">{{title}}</span>
        <slot name="suf-icon" :value="val"></slot>
        <slot name="slot-no-template">default</slot>
        <button v-show="!del" v-on:click="handlerClick">delete</button>
    </li>
</template>

<script>
export default {
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            val: Math.random()
        }
    },
    methods: {
        handlerClick() {
            console.log('todo-item:handlerClick.', this);
            // emit function [delete] witch is defined in parent.
            this.$emit('delete', this.title, this.del);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
    color: red;
}
</style>