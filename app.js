// document.body.style.backgroundColor = "black";

let cat = {
  name: "Mr. Snibbly",
  petCount: 0,
  moods: [
    {
      status: "Happy",
      img: "https://www.thehappycatsite.com/wp-content/uploads/2018/05/do-cats-smile-header.jpg"
    },
    {
      status: "Irritated",
      img: "http://raisingyourpaws.com/wp-content/uploads/2018/09/shutterstock_667618915.jpg"
    },
    {
      status: "Bitey",
      img: "https://i.ytimg.com/vi/lNZUpbSRna4/hqdefault.jpg"
    },
    {
      status: "Blood Thirsty",
      img: "https://img.memecdn.com/Angry-cat_o_33169.jpg"
    }
  ]
}

function catnip() {
  cat.petCount = 0;
  draw();
}

//increase pet count
//and update
function pet() {
  if (cat.petCount < 20) {
    cat.petCount++;
    draw();
  }
}


//decrease pet count
//and update
function feed() {
  if (cat.petCount > 0) {
    cat.petCount--;
    draw();
  }
}

function draw() {

  let nameElement = document.querySelector("#cat-name");
  let petCountElement = document.querySelector("#cat-pet-count");
  let imageElement = document.querySelector("#cat-image");
  let statusElement = document.querySelector("#cat-status");

  statusElement.classList.remove("text-danger", "text-warning");
  if (cat.petCount >= 10) {
    // statusElement.style.color = "red";
    statusElement.classList.add("text-danger");
  } else if (cat.petCount >= 5) {
    statusElement.classList.add("text-warning");
  };

  let moodIndex = checkMood();

  let moodObj = cat.moods[moodIndex];

  nameElement.textContent = cat.name;
  petCountElement.textContent = cat.petCount.toString();
  imageElement.src = moodObj.img;
  statusElement.textContent = moodObj.status;
};

function checkMood() {
  if (cat.petCount >= 20) {
    return 3
  } else if (cat.petCount >= 10) {
    return 2
  } else if (cat.petCount >= 5) {
    return 1
  }
  return 0
}

draw();

