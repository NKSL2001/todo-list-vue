import { type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/interfaces/ITodo'
import { useStorage } from '@vueuse/core'

export const useTodoStore = defineStore('todo', () => {
    const todoList: Ref<Array<Todo>> = useStorage('todoList', [], localStorage)

    function addTodo(todo: Todo) {
        todoList.value.push(todo)
    }

    function deleteTodo(index: number) {
        todoList.value.splice(index, 1)
    }

    return { todoList, addTodo, deleteTodo }
})
