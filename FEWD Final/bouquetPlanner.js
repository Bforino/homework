


//Pink Beauty Toggle

let pinkBeautyFlowerToggle = document.querySelector("#pinkBeautySelect > div");
let pinkBeautyFlowerToggleP = document.querySelector("#pinkBeautySelect > p");

document.querySelector("#pinkBeautySelect").addEventListener("click", function() {
    pinkBeautyFlowerToggle.classList.toggle("imageHolderSelected");
    pinkBeautyFlowerToggleP.classList.toggle("flowerNameSelected");
}
);


//Cosmo Toggle

let cosmoFlowerToggle = document.querySelector("#cosmosSelect > div");
let cosmoFlowerToggleP = document.querySelector("#cosmosSelect > p");

document.querySelector("#cosmosSelect").addEventListener("click", function() {
    cosmoFlowerToggle.classList.toggle("imageHolderSelected");
    cosmoFlowerToggleP.classList.toggle("flowerNameSelected");
}
);


//Autumn Beauty Toggle

let autumnBeautyFlowerToggle = document.querySelector("#autumnBeautySelect > div");
let autumnBeautyToggleP = document.querySelector("#autumnBeautySelect > p");

document.querySelector("#autumnBeautySelect").addEventListener("click", function() {
    autumnBeautyFlowerToggle.classList.toggle("imageHolderSelected");
    autumnBeautyToggleP.classList.toggle("flowerNameSelected");
}
);

//Zinnia Toggle

let zinniaFlowerToggle = document.querySelector("#zinniaOklahomaMixSelect > div");
let zinniaFlowerToggleP = document.querySelector("#zinniaOklahomaMixSelect > p");

document.querySelector("#zinniaOklahomaMixSelect").addEventListener("click", function() {
    zinniaFlowerToggle.classList.toggle("imageHolderSelected");
    zinniaFlowerToggleP.classList.toggle("flowerNameSelected");
}
);

//Summer Provence Toggle

let summerProvenceFlowerToggle = document.querySelector("#summerProvenceSelect > div");
let summerProvenceFlowerToggleP = document.querySelector("#summerProvenceSelect > p");

document.querySelector("#summerProvenceSelect").addEventListener("click", function() {
    summerProvenceFlowerToggle.classList.toggle("imageHolderSelected");
    summerProvenceFlowerToggleP.classList.toggle("flowerNameSelected");
}
);

//Persian Cress Toggle

let persianCressFlowerToggle = document.querySelector("#persianCressSelect > div");
let persianCressFlowerToggleP = document.querySelector("#persianCressSelect > p");

document.querySelector("#persianCressSelect").addEventListener("click", function() {
    persianCressFlowerToggle.classList.toggle("imageHolderSelected");
    persianCressFlowerToggleP.classList.toggle("flowerNameSelected");
}
);

//White Nite Toggle

let whiteNiteFlowerToggle = document.querySelector("#whiteNiteSelect > div");
let whiteNiteFlowerToggleP = document.querySelector("#whiteNiteSelect > p");

document.querySelector("#whiteNiteSelect").addEventListener("click", function() {
    whiteNiteFlowerToggle.classList.toggle("imageHolderSelected");
    whiteNiteFlowerToggleP.classList.toggle("flowerNameSelected");
}
);

//Audray Pink Toggle

let audrayPinkFlowerToggle = document.querySelector("#audrayPinkSelect > div");
let audrayPinkFlowerToggleP = document.querySelector("#audrayPinkSelect > p");

document.querySelector("#audrayPinkSelect").addEventListener("click", function() {
    audrayPinkFlowerToggle.classList.toggle("imageHolderSelected");
    audrayPinkFlowerToggleP.classList.toggle("flowerNameSelected");
}
);



//Creating the selected flower Array 

var selectedFlowers = []


document.querySelector("#cosmosSelect").addEventListener("click", function() {
    add_flower("cosmos")
    console.log(selectedFlowers)     
}
    );

    document.querySelector("#pinkBeautySelect").addEventListener("click", function() {
        add_flower("pinkBeauty")
        console.log(selectedFlowers)     
    }
        );

    document.querySelector("#autumnBeautySelect").addEventListener("click", function() {
        add_flower("autumnBeauty")
        console.log(selectedFlowers)     
    }
        );

    document.querySelector("#zinniaOklahomaMixSelect").addEventListener("click", function() {
        add_flower("zinnia")
        console.log(selectedFlowers)     
    }
        );

    document.querySelector("#summerProvenceSelect").addEventListener("click", function() {
        add_flower("summerProvence")
        console.log(selectedFlowers)     
    }
        );
    
    document.querySelector("#persianCressSelect").addEventListener("click", function() {
        add_flower("persianCress")
        console.log(selectedFlowers)     
    }
        );

    document.querySelector("#whiteNiteSelect").addEventListener("click", function() {
        add_flower("whiteNite")
        console.log(selectedFlowers)     
    }
        );

    document.querySelector("#audrayPinkSelect").addEventListener("click", function() {
        add_flower("audrayPink")
        console.log(selectedFlowers)     
    }
        );
    


        function add_flower (flowerString) {
            if (selectedFlowers.length < 1){
                selectedFlowers.push(flowerString)
            }
            else {
                if (selectedFlowers.includes(flowerString)){
                    for (var i=0; i < selectedFlowers.length; i++){
                        if (flowerString === selectedFlowers[i]){
                            console.log('removing flower')
                            selectedFlowers.splice(i,1)
                            console.log(selectedFlowers)
                            break
                        }
                    }
                } else (
                    selectedFlowers.push(flowerString)
                )
            }
        }



    //Creating maturity date array:

    var selectedFlowersDates = []

    document.querySelector("#cosmosSelect").addEventListener("click", function() {
        add_date(110)    
    }
        );
    
        document.querySelector("#pinkBeautySelect").addEventListener("click", function() {
            add_date(65)    
        }
            );
    
        document.querySelector("#autumnBeautySelect").addEventListener("click", function() {
            add_date(85)
            
        }
            );
    
        document.querySelector("#zinniaOklahomaMixSelect").addEventListener("click", function() {
            add_date(90)
     
        }
            );
    
        document.querySelector("#summerProvenceSelect").addEventListener("click", function() {
            add_date(65)
  
        }
            );
        
        document.querySelector("#persianCressSelect").addEventListener("click", function() {
            add_date(75)
  
        }
            );
    
        document.querySelector("#whiteNiteSelect").addEventListener("click", function() {
            add_date(60) 
        }
            );
    
        document.querySelector("#audrayPinkSelect").addEventListener("click", function() {
            add_date(110) 
        }
            );



        function add_date (flowerDateString) {
            if (selectedFlowersDates.length < 1){
                selectedFlowersDates.push(flowerDateString)
            }
            else {
                if (selectedFlowersDates.includes(flowerDateString)){
                    for (var i=0; i < selectedFlowersDates.length; i++){
                        if (flowerDateString === selectedFlowersDates[i]){
                            console.log('removing flower date')
                            selectedFlowersDates.splice(i,1)
                            console.log(selectedFlowersDates)
                            break
                        }
                    }
                } else (
                    selectedFlowersDates.push(flowerDateString)
                )
            }
        }

///Set Min Date



        let flowersquares = document.querySelectorAll(".select > div")
        for (let i=0; i<flowersquares.length; i++){
            flowersquares[i].addEventListener("click", function(){
                let highestMaturityValue = (Math.max(...selectedFlowersDates));
            console.log(highestMaturityValue);
            console.log(typeof highestMaturityValue);
                let date = new Date();
               date.setDate(date.getDate() + highestMaturityValue);
             console.log(date)
             let minHarvestDate = date.toISOString().split("T")[0];
             document.querySelector("#harvestDate").setAttribute("min", minHarvestDate)
             //console.log(date.toISOString())
             //console.log(date.toISOString().split("T"))
                })

        }


    //After click get plan, show card for each flower in the Array:

        
    
    //Show Pink Beauty

        document.querySelector("#submitButton").addEventListener('click',function(e){
            e.preventDefault();
            let showPinkBeauty = document.querySelector("#pinkBeauty");
                if (selectedFlowers.includes("pinkBeauty")){
                    showPinkBeauty.classList.remove("hide");
                };

             //Show Cosmos

                let showCosmos = document.querySelector("#cosmosVersaillesMix");
                if (selectedFlowers.includes("cosmos")){
                    showCosmos.classList.remove("hide");
                };
            
               //Show Autumn Beauty

                let showAutumnBeauty = document.querySelector("#autumnBeauty");
                if (selectedFlowers.includes("autumnBeauty")){
                    showAutumnBeauty.classList.remove("hide");
                };


        //Show Summer Provence

                let showSummerProvence = document.querySelector("#summerProvence");
                if (selectedFlowers.includes("summerProvence")){
                    showSummerProvence.classList.remove("hide");
                };


        //Show Persian Cress

                let showPersianCress = document.querySelector("#persianCress");
                if (selectedFlowers.includes("persianCress")){
                    showPersianCress.classList.remove("hide");
                };

        //Show White Nite

                let showWhiteNite = document.querySelector("#whiteNite");
                if (selectedFlowers.includes("whiteNite")){
                    showWhiteNite.classList.remove("hide");
                };

     //Show Audray Pink

                let showAudrayPink = document.querySelector("#audrayPink");
                if (selectedFlowers.includes("audrayPink")){
                    showAudrayPink.classList.remove("hide");
                };

    //Hide Select Section

                let hideSelect = document.querySelector("#userInput");
                hideSelect.classList.add("hide");

                let hideOutputHeader = document.querySelector("#outputHeader");
                hideOutputHeader.classList.remove("hide");


            }) 


    
 

    ////////Calculating Plant Dates

      


        const cosmoMaturity = 110;
        const zinniaMaturity = 90;
        const pinkBeautyMaturity = 65;
        const whiteNiteMaturity = 60;
        const persianCressMaturity = 75;
        const summerProvenceMaturity = 65;
        const audrayPinkMaturity = 110;
        const autumnBeautyMaturity = 85;


        document.getElementById("harvestDate").addEventListener("change",function () {

        

        input = this.value;
        
        document.querySelector("#outputHeader p").innerText = "Harvest Date: " + (input);

        let cosmod = new Date(input);
        console.log('Today is: ' + cosmod.toLocaleDateString());
        cosmod.setDate(cosmod.getDate() + 1 - cosmoMaturity);
        console.log('3 days ago was: ' + cosmod.toLocaleDateString());
        console.log(cosmod.toLocaleDateString());
        document.getElementById("cosmoSeedDate").innerText = "Plant Date: " + (cosmod.toLocaleDateString());

        let zinniad = new Date(input);
        zinniad.setDate(zinniad.getDate() + 1 - zinniaMaturity);
        document.getElementById("zinniaSeedDate").innerText = "Plant Date: " + (zinniad.toLocaleDateString());

        let pinkBeautyd = new Date(input);
        pinkBeautyd.setDate(pinkBeautyd.getDate() + 1 - pinkBeautyMaturity);
        document.getElementById("pinkBeautySeedDate").innerText = "Plant Date: " + (pinkBeautyd.toLocaleDateString());

        let summerProvenced = new Date(input);
        summerProvenced.setDate(summerProvenced.getDate() + 1 - summerProvenceMaturity);
        document.getElementById("summerProvenceSeedDate").innerText = "Plant Date: " + (summerProvenced.toLocaleDateString());

        let persianCressd = new Date(input);
        persianCressd.setDate(persianCressd.getDate() + 1 - persianCressMaturity);
        document.getElementById("persianCressSeedDate").innerText = "Plant Date: " + (persianCressd.toLocaleDateString());

        let whiteNited = new Date(input);
        whiteNited.setDate(whiteNited.getDate() + 1 - whiteNiteMaturity);
        document.getElementById("whiteNiteSeedDate").innerText = "Plant Date: " + (whiteNited.toLocaleDateString());

        let audrayPinkd = new Date(input);
        audrayPinkd.setDate(audrayPinkd.getDate() + 1 - audrayPinkMaturity);
        document.getElementById("audrayPinkSeedDate").innerText = "Plant Date: " + (audrayPinkd.toLocaleDateString());

        let autumnBeautyd = new Date(input);
        autumnBeautyd.setDate(autumnBeautyd.getDate() + 1 - autumnBeautyMaturity);
        document.getElementById("autumnBeautySeedDate").innerText = "Plant Date: " + (autumnBeautyd.toLocaleDateString());

        })

       






       
       
       







