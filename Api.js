// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।

const loadData = (click) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${click}`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => displayId(data));
};
// loadData();

// ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।

const displayUi = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((Response) => Response.json())
    .then((db) => {
      db.forEach((data) => {
        const displayContainer = document.getElementById("container");
        const cardUi = document.createElement("div");
        cardUi.classList.add("col-md-3");
        cardUi.innerHTML = `       
        <div class="card w-full">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.email}</h6>            
            <button class="btn btn-primary" onclick=loadData(${data.postId})>details</button>
          </div>
        </div>      
        `;
        displayContainer.appendChild(cardUi);
      });
    });
};
displayUi();
// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।

// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।

const displayId = (db) => {
  const displayContainer = document.getElementById("container");
  displayContainer.innerText = ``;
  db.forEach((data) => {
    console.log(data);
    const cardUi = document.createElement("div");
    cardUi.classList.add("col-md-3");
    cardUi.innerHTML = `       
        <div class="card w-full">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.email}</h6>            
            <button class="btn btn-primary")>details</button>
          </div>
        </div>      
        `;
    displayContainer.appendChild(cardUi);
  });
};
