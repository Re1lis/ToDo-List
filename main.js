
import '/style.scss'

const addButtonToDo = document.querySelector('.add_new_todo')
const toDoList = document.querySelector('.todo_list')
const deleteButton = document.querySelector('.delete-todo')

addButtonToDo.addEventListener('click', () => {
    const newElement = document.createElement('div')
    newElement.className = 'li_item_todo'
    newElement.innerHTML = '<input contenteditable="true" type="text" class = "input_todo"><div class="button_del_select"><select name="" id="" class="state-todo"><option class="option_state_dis"  disabled selected>Состояние</option><option class="option_state" value="">В процессе</option><option class="option_state" value="">Сделано</option></select><button class="delete-todo">Удалить</button></div>'
    toDoList.append(newElement)
})


document.querySelector('.todo_list').onclick = function (e){
    if(e.target.className != 'delete-todo') return
    const item = e.target.closest('.li_item_todo')
    item.remove()
}