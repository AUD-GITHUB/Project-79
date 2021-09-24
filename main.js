var menu_list_array = ["Veg Margherita Pizza", "Deluxe Veggie Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza", "American Cheese Corn Pizza"];
menu_list_array.sort()
function getmenu(){
var i = 0;
menu_list_array = menu_list_array.sort();
var menuListDisplay=menu_list_array[i]+'<br>';
        for(i=1;i<menu_list_array.length;i++){
           menuListDisplay =menuListDisplay +   menu_list_array[i] + '<br>'
        }
        console.log(menuListDisplay);
        document.getElementById("display_menu").innerHTML = menuListDisplay;
        //give the appropriate id name as display_menu  
}

function add_item(){
    var i=0;
    menu_list_array = menu_list_array.sort();
    var menuListDisplay=menu_list_array[i]+'<br>';
    console.log(menu_list_array);
            for(i=1;i<menu_list_array.length;i++){
               menuListDisplay =menuListDisplay + menu_list_array[i] + '<br>'
            }
            console.log(menuListDisplay);
            document.getElementById("display_addedmenu").innerHTML = menuListDisplay;
      
        }
function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort()
	add_item();
}
