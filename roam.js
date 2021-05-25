let sidebar = document.getElementsByClassName("log-button");
let allPages = document.getElementsByClassName("flex-h-box");
let switcher = document.getElementsByClassName("rm-db-title");
let quickPages = document.getElementsByClassName("page");

function deleteText(nodeWithText) {
  let child = nodeWithText.firstChild, nextSibling;
  while (child) {
    nextSibling = child.nextSibling;
    if (child.nodeType == 3) {
      child.parentNode.removeChild(child);
    }
    child = nextSibling;
  }
}

function changeText(nodeWithOldText, newText) {
  nodeWithOldText.innerText = newText;
}


function changeSidebar(){
    setTimeout(() => {
      deleteText(sidebar[0]);
      deleteText(sidebar[1]);
      deleteText(allPages[2]);
      deleteText(switcher[0]);
      changeText(quickPages[0], "☑️");
      changeText(quickPages[1], "🎯");
      changeText(quickPages[2], "📚");
      changeText(quickPages[3], "🎧");
      changeText(quickPages[4], "📺");
    }, 1000);
}

changeSidebar()
