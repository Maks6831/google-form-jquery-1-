const textBox = $(".txtb");
let notComp = $(".notcomp");
const comp = $("comp");



textBox.on("keyup", function(event){
    event.preventDefault();
    if (event.keyCode == 13 &&textBox.val() != ""){
        let task = $("<div class='task'></div>");
        let trash = $("<i class='fas fa-trash-alt'></i>")
        let checked = $("<i class='fas fa-check'></i>")
        task.text(textBox.val());
        task.append(trash);
        task.append(checked);
        notComp.append(task);
        trash.on("click", function(event){
            console.log("working");
            event.preventDefault();
            task.remove();
        })
        checked.on("click", function(event){
            checked = event.target
            event.preventDefault();
            comp.append(task);
            task.remove();
        })
        textBox.text().remove()
       

        
    }


})