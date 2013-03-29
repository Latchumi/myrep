<!--Added newly second time-->
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
chromeMenu.prototype.submenu=function()
{
 
  	var id=document.getElementById("menurow");
	var id2=document.createElement("td");
	id2.className="id2";
	var id1=document.createElement("table");
  	id1.className="subtab";
  	id1.id="subtab";
  	id2.appendChild(id1);
	id.appendChild(id2);
  

}


chromeMenu.prototype.addSubmenu = function() {

	
	var id1=document.getElementById("subtab");
	var tr1=document.createElement("tr");
	tr1.id="menurow2";
	var td1=document.createElement("td");
	td1.className="menuItems";
	var item=document.createTextNode("SubItem");
	td1.appendChild(item);
	tr1.appendChild(td1);
	id1.appendChild(tr1);

	
	


};
chromeMenu.prototype.deletemenu=function()
{
	//var del=document.getElementById("menudiv");
	var del1=document.getElementById("menus");
	del1.parentNode.removeChild(del1);
	
	 
};
