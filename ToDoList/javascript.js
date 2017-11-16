var domBuilderModule = (function () {
	var addTaskBtn, deleteTaskBtn, checkAllBtn;
	var newTask;
	var taskListHTML;
	var tasks;
	var checkboxes;
	var currentTask;

	function init() {
		initControls();
		initListeners();
		initTaskList();
		initCheckboxes();
		initTaskListHTML();
		initNewTask();
	}

	function initControls(){
		addTaskBtn = document.getElementById("add");
		deleteTaskBtn = document.getElementById("delete");
		checkAllBtn = document.getElementById("check");
	}

	function initListeners(){
		addTaskBtn.addEventListener("click", addTask);
		deleteTaskBtn.addEventListener("click", deleteTask);
		checkAllBtn.addEventListener("click", checkAll);
	}

	function initTaskList(){
		tasks = [];
	}

	function initCheckboxes(){
		checkboxes = [];
	}

	function initTaskListHTML(){
		taskListHTML = document.getElementById("taskListParser");
	}

	function initNewTask(){
		newTask = document.getElementById("newTask");
	}

	function addTask(){
		currentTask = {task: newTask.value, check: false};
		tasks.push(currentTask);
		repaint();
	}

	function deleteTask(){
		var size = tasks.length;
		var checkbox; 
		changeTaskStatus();
		tasks = tasks.filter(function(task){
			return task.check == false;
		})
		repaint();
	}

	function repaint(){
		taskListHTML.innerHTML = '';
		var size = tasks.length;
		for(var i = 0; i < size; i++){
			taskListHTML.innerHTML += '<p>' + '<input type = "checkbox" ' + 'id="' + i +'">' + tasks[i].task + '</p>' ;
		}
	}
	function changeTaskStatus(){
		var size = tasks.length;
		for (var i = 0; i < size; i++){
			if(document.getElementById(i).checked == true){
				tasks[i].check = true;
			}
		}
	}
	function checkAll(){
		var checkCounter = 0;
		var size = task.length;
		for(var i = 0; i < size; i++){
			if(document.getElementById(i).checked == true){
				checkCounter++;
			}
		}
		if(checkCounter == size){
			for(var i = 0; i < size; i++){
			document.getElementById(i).checked = false;
			}
		}
		else{
			for(var i = 0; i < size; i++){
				document.getElementById(i).checked = true;
			}
		}
	}

	return {
       init: init
    };
 })(); 

(function () {
    window.onload = initTodoList;
	function initTodoList() {
	  domBuilderModule.init();
	}
}
)();

