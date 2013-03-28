chromeMenu.prototype.createmenu = function() {
	var menuDiv =document.createElement("div");
	menuDiv.className="menus";
	menuDiv.id="menus";
	var menuItem=document.createElement("table");
	menuItem.id="menuI";
	menuItem.className="menuLevel1";
	/*var tr1=document.createElement("tr");
	tr1.id="menuRow";
	var td1=document.createElement("td");
	td1.className="menuItems";
   
	tr1.appendChild(td1);
	menuItem.appendChild(tr1);*/
	menuDiv.appendChild(menuItem);
	document.getElementById("menudiv").appendChild(menuDiv);
	

};

chromeMenu.prototype.addItem = function() {
	var id=document.getElementById("menuI");
	var tr1=document.createElement("tr");
	tr1.id="menurow";
	var td1=document.createElement("td");
	td1.className="menuItems";
	td1.id="menuItems";
	var item=document.createTextNode("Item");
	td1.appendChild(item);
	tr1.appendChild(td1);
	id.appendChild(tr1);


};

