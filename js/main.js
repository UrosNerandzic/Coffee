/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
                // Create object coffeeMaschine below

    let coffeeMaschine = {
                //ATRIBUTI OBJEKTA
                water: 400, 
                coffee: 200, 
                milk: 100,
                credit:100, //din
                
                //METODE OBJEKTA
    waterStatus: function () {
                  return   getData('water-status', this.water);
                },
                
                
    addWater: function (addW) {
                addW = prompt("enter the amount of water");
                addW = Number(addW);
                
                if (addW && !isNaN(addW) && parseInt(addW) > 0) {
                    totalWater = parseInt(addW) + this.water;
                
                if (totalWater <= 400) {
                    this.water = totalWater;
                    this.waterStatus();
                } else {
                    alert("Water tank capacity exceeded!");
                }
                } else {
                    alert("Invalid input!");
                }
                },
                
                
    coffeeStatus: function () {
                  return   getData('coffee-status', this.coffee);
                },
                
                
    addCoffee: function (addCoffee) {
                addCoffee = prompt("enter the amount of coffee");
                
                if (addCoffee && !isNaN(addCoffee) && parseInt(addCoffee) > 0) {
                    totalCoffee = parseInt(addCoffee) + this.coffee;
                
                if (totalCoffee <= 200) {
                    this.coffee = totalCoffee;
                    this.coffeeStatus();
                } else {
                    alert("Coffee tank capacity exceeded!");
                }
                } else {
                    alert("Invalid input!");
                };
                },
                
                
    milkStatus: function () {
                return    getData('milk-status', this.milk);
                },
                
                
    addMilk: function () {       
                let addMilk = prompt("enter the amount of mleka");
                
                if (addMilk && !isNaN(addMilk) && parseInt(addMilk) > 0) {
                    totalMilk = parseInt(addMilk) + this.milk;
               
                if (totalMilk <= 100) {
                    this.milk = totalMilk;
                    this.milkStatus();
                } else {
                    alert("Milk tank capacity exceeded!");
                }
                } else {
                    alert("Invalid input!");
                };
                },
                
                
    creditStatus: function () {
                return   getData('credit', this.credit);
                },
                
                
    addCredit: function () {
                let addCredit = prompt("enter the amount of credit");
                
                if (addCredit && !isNaN(addCredit) && parseInt(addCredit) > 0) {
                    let totalCredit = parseInt(addCredit) + this.credit;
                
                if (totalCredit <=100) {
                    this.credit = totalCredit;
                    this.creditStatus();
                } else {
                    alert("Credit tank capacity exceeded!");
                }
                } else {
                    alert("Invalid input!");
                };
                },
                
                
    emptyWater: function (water) {
                
                if (this.water >= water) {
                    this.water -= water;
                    textData("Pouring water");
                    this.waterStatus();
                }else{
                    textData("Machine is out of water\n");
                };         
                },
                
                
    emptyCoffee: function (coffee) {   
                if (this.coffee >= coffee) {
                    textData("Pouring coffie");
                    this.coffee -= coffee;
                    this.coffeeStatus();
                } else {
                    textData("Machine is out of coffie\n");
                };
                },
                
                
    emptyCredit: function (credit) {
                if (this.credit >= credit) {
                    this.credit -= credit;
                    this.creditStatus();
                } else {
                    textData("No enough credit\n");
                };
                },
                
                
    emptyMilk: function (milk) {
                if (this.milk >= milk) {
                    this.milk -= milk;
                    this.milkStatus();
                    textData("Pouring milk");
                } else {
                    textData("Machine is out of milk\n");
                };
                },


    makeShortEspresso: function (credit, water, coffee) {    
                if(this.credit >= credit && this.water >= water && this.coffee >= coffee){     
                    this.emptyCredit(credit);     
                    setTimeout(this.emptyWater.bind(this), 1000 , water);
                    setTimeout(this.emptyCoffee.bind(this), 2000, coffee);
                    document.getElementById('message').innerText = 'Preparing short esspresso';
                    setTimeout(function () {
                    textData('Short espresso finished');
                }, 3000);
                
                } else {
                    if(this.credit <= credit){ 
                        textData("No enough credit\n");
                    };
                    
                    if(this.coffee <= coffee){ 
                        textData("Machine is out of coffee\n");
                };
                    if(this.water <= water){ 
                        textData("Machine is out of milk\n");           
                }; 
                };
                },
                
                
    makeLongEspresso : function(credit, water, coffee){
                if(this.credit >= credit && this.water >= water && this.coffee >= coffee){     
                    this.emptyCredit(credit);               
                    setTimeout(this.emptyWater.bind(this), 1000 , water);
                    setTimeout(this.emptyCoffee.bind(this), 2000, coffee);
                    document.getElementById('message').innerText = 'Preparing short long esspresso';
                    setTimeout(function () {
                    textData('Short long espresso finished');
                }, 3000);
                
                } else { 
                    if(this.credit < credit){ 
                        textData("No enough credit\n");
                    };
                
                    if(this.coffee < coffee){ 
                        textData("Machine is out of coffee\n");
                    };
                    if(this.water < water){ 
                        textData("Machine is out of water\n");           
                    };  
                };
             },
             
             
    makeCapuchino : function(credit,water, coffee, milk) {
                if (this.credit >= credit && this.water >= water && this.coffee >= coffee && this.milk >= milk) {
                    this.emptyCredit(credit);
                    setTimeout(this.emptyWater.bind(this), 1000, water);
                    setTimeout(this.emptyCoffee.bind(this), 2000, coffee);
                    setTimeout(this.emptyMilk.bind(this), 3000, milk);
                    document.getElementById('message').innerText = 'Preparing capuchino';
                    setTimeout(function () {
                        textData('Capuchino finished');
                    }, 4000);
                    
                } else {
                    if (this.milk < milk) {
                        textData("Machine is out of milk\n");
                    };
                    
                    if (this.coffee < coffee) { 
                        textData("Machine is out of coffee\n");
                    };
                    
                    if (this.water < water) { 
                        textData("Machine is out of water\n");
                    };
                    
                    if (this.credit < credit) { 
                        textData("No enough credit\n");
                    };
                };
                }
             
            };
                coffeeMaschine.coffeeStatus();
                coffeeMaschine.waterStatus();
                coffeeMaschine.milkStatus();
                coffeeMaschine.creditStatus();
                
                // HELPER FUNCTION
    function getData(elementID, objectName) {
            return   document.getElementById(elementID).innerText = objectName;
                };
    
    function textData(messageText) {
            document.getElementById('message').innerText = messageText;
                };