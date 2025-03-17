

let arr=[

    {
        dp:"https://media.istockphoto.com/id/1310539882/photo/surprised-women-gesturing-with-arms-having-wide-open-eyes-mouth-isolated-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlF3SYmuZJ44SdwSONZPFCU9we82-v0RDZNAobFY8HQ=",story:"https://media.istockphoto.com/id/1310539882/photo/surprised-women-gesturing-with-arms-having-wide-open-eyes-mouth-isolated-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IlF3SYmuZJ44SdwSONZPFCU9we82-v0RDZNAobFY8HQ="
    },
    {
        dp:"https://media.istockphoto.com/id/2148826378/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=OdjCqwwb1kYFstr94Onq0qmgZXXbmBuCfozoxtbHK7Y=",story:"https://media.istockphoto.com/id/2148826378/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=OdjCqwwb1kYFstr94Onq0qmgZXXbmBuCfozoxtbHK7Y="
    },
    {
        dp:"https://media.istockphoto.com/id/930163774/photo/portrait-of-young-man-posing-with-beard-in-suit.webp?a=1&b=1&s=612x612&w=0&k=20&c=ryuSBHet4xCtt5uJRQETzDNeVzdc89RW3K2MrJz4_ck=",story:"https://media.istockphoto.com/id/930163774/photo/portrait-of-young-man-posing-with-beard-in-suit.webp?a=1&b=1&s=612x612&w=0&k=20&c=ryuSBHet4xCtt5uJRQETzDNeVzdc89RW3K2MrJz4_ck="
    },
    {
        dp:"https://media.istockphoto.com/id/2027086219/photo/building-construction-blueprint-building-with-crane.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdLTjRoCZiWrSk1rb3J2VD69fdPV5_uERTTNnXEI1ZA=",story:"https://media.istockphoto.com/id/2027086219/photo/building-construction-blueprint-building-with-crane.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdLTjRoCZiWrSk1rb3J2VD69fdPV5_uERTTNnXEI1ZA="
    },
    {
        dp:"https://images.unsplash.com/photo-1531901390263-0016793c7c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1531901390263-0016793c7c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://media.istockphoto.com/id/2154031451/photo/confident-young-indian-woman-with-beautiful-smile-posing-against-beige-studio-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OTryrP7Pjuc700jXxUwQWY_zpeQRCalBpyZ0ZSfvNJc=",story:"https://media.istockphoto.com/id/2154031451/photo/confident-young-indian-woman-with-beautiful-smile-posing-against-beige-studio-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OTryrP7Pjuc700jXxUwQWY_zpeQRCalBpyZ0ZSfvNJc="
    }
] 

var story1=document.querySelector(".storys");
let clutter=""
arr.forEach(function(elem,idx){
 clutter +=`<div class="story">
         <img id="${idx}" src="${elem.dp}" alt="img">
        </div>`
})


story1.innerHTML=clutter;
story1.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none";
    },3000)
})

/*


const arr = [
    {
        dp: "https://media.istockphoto.com/id/1310539882/photo/surprised-women-gesturing-with-arms-having-wide-open-eyes-mouth-isolated-on-blue-background.webp",
        story: "https://media.istockphoto.com/id/1310539882/photo/surprised-women-gesturing-with-arms-having-wide-open-eyes-mouth-isolated-on-blue-background.webp"
    },
    {
        dp: "https://media.istockphoto.com/id/2148826378/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.webp",
        story: "https://media.istockphoto.com/id/2148826378/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.webp"
    },
    {
        dp: "https://media.istockphoto.com/id/930163774/photo/portrait-of-young-man-posing-with-beard-in-suit.webp",
        story: "https://media.istockphoto.com/id/930163774/photo/portrait-of-young-man-posing-with-beard-in-suit.webp"
    },
    {
        dp: "https://media.istockphoto.com/id/2027086219/photo/building-construction-blueprint-building-with-crane.webp",
        story: "https://media.istockphoto.com/id/2027086219/photo/building-construction-blueprint-building-with-crane.webp"
    },
    {
        dp: "https://images.unsplash.com/photo-1531901390263-0016793c7c7d?w=500&auto=format&fit=crop&q=60",
        story: "https://images.unsplash.com/photo-1531901390263-0016793c7c7d?w=500&auto=format&fit=crop&q=60"
    },
    {
        dp: "https://media.istockphoto.com/id/2154031451/photo/confident-young-indian-woman-with-beautiful-smile-posing-against-beige-studio-background.webp",
        story: "https://media.istockphoto.com/id/2154031451/photo/confident-young-indian-woman-with-beautiful-smile-posing-against-beige-studio-background.webp"
    }
];
/*
const storyContainer = document.querySelector(".storys");
const fullScreenDiv = document.querySelector("#full-screen");

// Populate stories
arr.forEach((elem, idx) => {
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("story");
    storyDiv.innerHTML = `<img id="${idx}" src="${elem.dp}" alt="story">`;
    storyContainer.appendChild(storyDiv);
});

// Add click event to show story in fullscreen
storyContainer.addEventListener("click", (event) => {
    const clickedImg = event.target;
    if (clickedImg.tagName === 'IMG') {
        const storyId = clickedImg.id;
        fullScreenDiv.style.backgroundImage = `url(${arr[storyId].story})`;
        fullScreenDiv.style.display = "block";

        // Hide the full-screen after 3 seconds
        setTimeout(() => {
            fullScreenDiv.style.display = "none";
        }, 3000);
    }
});
*/

