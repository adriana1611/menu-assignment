//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
// Use at least two classes.
//Your menu should have the options to create, view, and delete elements.


    //Our class candy will take in a name ,flavor, and size.
class Candy {
    constructor(name, flavor, size){
        this.name = name;
        this.flavor = flavor;
        this.size = size;
    }
}


    // The empty array below this.candies stores the candies. 
class Menu{
    constructor(){
        this.candies =[];
    }

    
    //this will tell the user to add a car and we use prompts to ask the questions. 
    //we use push to push the name, flavor, and size and push it all into the this.candies array above.
    addCandy(){
        let candyName = prompt ("Enter the candy name:");
        let candyFlavor = prompt ("Enter the candy flavor:");
        let candySize = prompt ("Enter the size of the candy:");
        this.candies.push(new Candy(candyName, candyFlavor, candySize));
    }


    //Prompts the index of the candy the user wants to delete. 
    deleteCandy(){
        let candyIndex = prompt("Enter a candy you wish to delete:");
        this.candies.splice(candyIndex, 1);
    }
       

    //this method will show me the candies we picked by alert
    viewCandy(){
        let displayCandies = '';
        for(let i= 0; i < this.candies.length; i++){

            displayCandies += `
           ${i}) ${this.candies[i].name} ${this.candies[i].flavor} ${this.candies[i].size}`
        }

        alert(displayCandies);
    }

    // Displays the menu with options and returns the user's choice
    showCandyMenu(){
        return prompt(`
        Main Menu:    
        ---------------------------- 
        0) Exit Menu
        1) Add Candy
        2) Delete a Candy
        3) View All Your Choices`)
    }

    // This start below will display the main candy menu and processes user input. Exits the loop when the user selects options 0.
    start(){
        let selection = this.showCandyMenu();

    
        while(selection != 0){

            switch(selection){

                case "1": this.addCandy();
                break;

                case "2": this.deleteCandy();
                break;

                case "3": this.viewCandy();
                break;

                default: selection = 0;
            }
            selection = this.showCandyMenu();
        }
        alert("Exiting Candy Menu!");
    }


    
}


let menu = new Menu();

//begins the iteration loop. 
menu.start();

