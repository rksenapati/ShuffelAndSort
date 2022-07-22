window.onload=function(){
var list = document.getElementById("shuffleAndSort");
var suffleButton = document.getElementById("shuffle_button");
var sortButton = document.getElementById('sort_button')
var ul = document.querySelector('ul')
var listData = document.querySelectorAll('li')
function shuffle(items)
{
    var cachedData = items.slice(0), tempData, i = cachedData.length, randomRes;
	for(let i = cachedData.length;i>0;--i){
		randomRes = Math.floor(i * Math.random());
        tempData = cachedData[randomRes];
        cachedData[randomRes] = cachedData[i];
        cachedData[i] = tempData;		
	}
    
    return cachedData;
}
function shuffleNodes()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
	for(let i=0;i<=nodes.length;i++){
		list.appendChild(nodes[i]);
	}
    
} 
document.getElementById("shuffle_button").onclick = shuffleNodes;
sortButton.onclick = () => {
  var sortedListRecord = [...listData].sort((a, b) => +a.textContent - +b.textContent)
  ul.replaceChildren(...sortedListRecord)
}
} 
