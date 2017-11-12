var Tasks = [];

function add(){
	var addTask = document.getElementById("text").value;
	var spaceCounter = 0;
	for(var i = 0; i < addTask.length; i++){
		if(addTask[i] == " "){
			spaceCounter++;
		}
	}
	if(spaceCounter != addTask.length){
		var div = document.getElementById("task");
		var Task = {task: addTask};
		Tasks.push(Task);
		repaint(div);
		document.getElementById("text").value = '';
	}
	else{
		alert("Введите что-нибудь");
	}

}

function deleteTask(){
	var bufArray = [];
	var size = Tasks.length;
	var div = document.getElementById("task");
	for(var i = 0; i < size; i++){
		var checkbox = document.getElementById(i);
		if(checkbox.checked == false){
			bufArray.push(Tasks[i]);
		}
	}
	Tasks = bufArray;
	repaint(div);
}

function repaint(div){
	div.innerHTML = '';
		for(var i = 0; i < Tasks.length; i++){
			div.innerHTML += '<p>' + '<input type = "checkbox" ' + 'id="' + i +'">' + Tasks[i].task + '</p>' ;
		}
}

function checkAll(){
	var checkNum = 0;
	for(var i = 0; i < Tasks.length; i++){
		if(document.getElementById(i).checked == true){
			checkNum++;
		}
	}
	if(checkNum == Tasks.length){
		for(var i = 0; i < Tasks.length; i++){
		document.getElementById(i).checked = false;
		}
	}
	else{
		for(var i = 0; i < Tasks.length; i++){
			document.getElementById(i).checked = true;
		}
	}
}