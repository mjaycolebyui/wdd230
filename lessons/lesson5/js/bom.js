

function addChapter() {
    var input = document.getElementById("favchap").value;
    const list = document.getElementsByClassName("list")[0];

    let myChapter = input;
    if (myChapter == "")
    {
        return;
    }

    var li = document.createElement("li");
    var del = document.createElement("button");
    del.appendChild(document.createTextNode("Delete"));
    del.onclick = function(){
        list.removeChild(li);
    }


    li.appendChild(document.createTextNode(myChapter));
    li.appendChild(del);
    list.appendChild(li);

    
}
