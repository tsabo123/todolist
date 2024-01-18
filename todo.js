window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value.trim();

       if (task !== '') {
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        let task_input_el1 = document.createElement("input");
        task_input_el1.type = "checkbox";
        task_el.appendChild(task_input_el1);

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_save_el = document.createElement('button');
        task_save_el.classList.add('save');
        task_save_el.innerText = 'Save';
        task_save_el.style.display = 'none'; 

        const task_remove_el = document.createElement('button');
        task_remove_el.classList.add('remove');
        task_remove_el.innerText = 'Remove';
       

        task_actions_el.appendChild(task_save_el);
        task_actions_el.appendChild(task_remove_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_input_el.addEventListener('click', () => {
            task_input_el.removeAttribute("readonly");
            task_save_el.style.display = 'inline-block'
            task_input_el.focus();
        });

        task_save_el.addEventListener('click', (e) => {
            task_input_el.setAttribute("readonly", "readonly");
            task_save_el.style.display = 'none';
        });

        task_remove_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });}
        else {
            
            window.alert("Please type some task");
        }
    });
});
