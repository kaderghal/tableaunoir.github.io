var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.init = function () {
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    };
    Menu.openPage = function (pageName, elmnt) {
        // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("selected");
        }
        // Show the specific tab content
        document.getElementById(pageName).style.display = "block";
        // Add the specific color to the button used to open the tab content
        elmnt.classList.add("selected");
    };
    /**
     * @description if the menu is shown, hide it. If it is invisible, show it!
     */
    Menu.toggle = function () {
        if (Menu.isShown()) {
            Menu.hide();
        }
        else {
            Menu.show();
        }
    };
    Menu.getMenu = function () {
        return document.getElementById("menu");
    };
    Menu.hide = function () {
        Menu.getMenu().classList.remove("menuShow");
        Menu.getMenu().classList.add("menuHide");
    };
    Menu.show = function () {
        Menu.getMenu().classList.add("menuShow");
        Menu.getMenu().classList.remove("menuHide");
    };
    Menu.isShown = function () { return Menu.getMenu().classList.contains("menuShow"); };
    return Menu;
}());
//# sourceMappingURL=Menu.js.map