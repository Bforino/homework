function selectPet(petType){

    console.log(petType);
    
    // Get the specific pet data set

    const thisPetData = petData[petType]; console.log(thisPetData);

    // Set the title

    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;


    // Empty the specification data

    let petSpecs = "";

    // Add the space required, size, weight

    petSpecs += `<dt>Size</dt>
    <dd>${thisPetData.size}</dd>`;
    petSpecs +=  `<dt>Space Required</dt>
    <dd>${thisPetData.spaceRequired}</dd>`;
    petSpecs += `<dt>Weight</dt>
    <dd>${thisPetData.weight}</dd>`;

    // Add logic to add the trainability and lap size images

    petSpecs += '<dt>Trainable</dt>'
    if(thisPetData.trainability == true){
        petSpecs += 'img/200px-Gnome-emblem-unreadable.svg.png" alt="Trainable"></dd>`;
    }else{
        petSpecs += '<dd><img src="img/200ox-Gnome-emblem-unreadable.svg.png" alt="Not Trainable"></dd>';
    }    

    }

    // Add the foods (may require loop)

    document.querySelector(".petsDataSpecs").innerHTML = petSpecs;
   

    // Update the images

        // Set the big image to the first imagein the images 

             // Set the src
            document.querySelector(".photoLarge").setAttribute('src', thisPetData.images[0]['img']);


            // Set the alt
            document.querySelector(".photoLarge").setAttribute('src', thisPetData.images[0]['alt']);

        //Create the gallery

            let thumbSet = '';

            //for each image

            for(i=0; i < thisPetData.images.length; i++){

                    // Create the HTML (a + img)

                    thumbSet += `<a href="$`{thisPetData.images[i]['img']}
            

            }

            document.querySelector('.thumbHaus').innerHTML = thumbSet;    

  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        //Select the thumbnails

        const thumbElements = document.querySelectorAll('.thumbHaus a');

        //Loop through the thumbnails

        for(i=0; i< thumbElements.length; i++){

            //add click event

            thumbElements[0].addEventListener('click', function(e){

                //Prevent the link from executing

            e.preventDefault();

                //get the href that was clicked on
            const targetLink = this.getAttribute('href');
            
                //get alt of the image inside the link clicked on
            
            const targetAlt = this.querySelector('img').getAttribute('alt');

                //update big img src
            
            
                //update big image alt

            });
        }



    // Empty the ideal for
    const elementList = document.querySelector(".idealFor");
    
    document.querySelector(".idealfor").innerHTML = "";

    // Insert the ideal for
    let newEle = document.createElement('li');


    // Empty the Adoption Groups

    newEle.innerText = thisPetData.idealOwner[i];

    // Add the adoption groups

    document.querySelector('.idealFor').append(newEle);



}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
console.log("hello")

          // Get the selected animal 
          const thePetType = document.querySelector("#petType").value; 

          // Call the select pet
         selectPet(thePetType)
          
    });
});






