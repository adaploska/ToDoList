
document.addEventListener("DOMContentLoaded", function() {
    var add = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var taskInput = document.querySelector('#taskInput');

    var licznik = 0;
    var counter = document.querySelector('#counter');


    add.addEventListener('click', function (e) {
        if (taskInput.value.length >4 && taskInput.value.length<100){

            var lista ='<li>\n'+
                '<h1>'+ taskInput.value + '</h1>\n' +
                '<button class="delete">Delete</button>\n'+
                '<button class="complete">Complete</button>'+
                '</li>';


            taskList.innerHTML += lista;
            licznik += 1;
            counter.innerHTML = licznik;

            taskInput.value = '';


        }
        else {
            alert('write task');
        }

        var completeBtn = document.querySelectorAll('.complete');
        for(var i=0; i<completeBtn.length; i++){

            completeBtn[i].addEventListener('click',function (e) {
                var dd = this.parentElement.classList.toggle('complet');
                if ( dd === true){
                    licznik -= 1;
                    counter.innerHTML = licznik;
                }
                else {
                    licznik += 1;
                    counter.innerHTML = licznik;
                }
            });
        }
        var deleteBtn = document.querySelectorAll('.delete');
        for(var i=0; i<deleteBtn.length; i++){
            deleteBtn[i].addEventListener('click',function () {
                this.parentElement.remove();
                licznik -= 1;
                counter.innerHTML = licznik;
            })
        }
        var FinishedTasksButton = document.querySelector('#removeFinishedTasksButton');
        FinishedTasksButton.addEventListener('click', function () {
            var liemements = document.querySelectorAll('li');
            for (var i=0; i<liemements.length; i++){
                liemements[i].remove();
            }
            licznik = 0;
            counter.innerHTML = licznik;
        })
    });
});


