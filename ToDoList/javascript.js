var domBuilderModule = (function () {
	var addTaskBtn, deleteTaskBtn, checkAllBtn;
	var newTask;
	var taskListHTML;
	var tasks;
	var checkboxes;

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
		tasks.push(newTask.value);
		repaint();
	}

	function deleteTask(){
		var bufArray = [];
		var size = tasks.length;
		for(var i = 0; i < size; i++){
			var checkbox = document.getElementById(i);
			if(checkbox.checked == false){
				bufArray.push(tasks[i]);
			}
		}
		tasks = bufArray;
		repaint();
	}

	function repaint(){
		taskListHTML.innerHTML = '';
			for(var i = 0; i < tasks.length; i++){
				taskListHTML.innerHTML += '<p>' + '<input type = "checkbox" ' + 'id="' + i +'">' + tasks[i] + '</p>' ;
			}
	}

	function checkAll(){
		var checkCounter = 0;
		for(var i = 0; i < tasks.length; i++){
			if(document.getElementById(i).checked == true){
				checkCounter++;
			}
		}
		if(checkCounter == tasks.length){
			for(var i = 0; i < tasks.length; i++){
			document.getElementById(i).checked = false;
			}
		}
		else{
			for(var i = 0; i < tasks.length; i++){
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

