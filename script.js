const reelsData = [
  {
    username: "thecoder",
    profilePic: "https://i.pravatar.cc/150?img=1",
    description: "Building cool stuff with HTML, CSS & JavaScript 🚀",
    video:"./insta/video1.mp4",
    likeCount: "12k",
    CommentCount: 342,
    ShareCount: 891,
    isliked: true
  },
  {
    username: "codewithsam",
    profilePic: "https://i.pravatar.cc/150?img=2",
    description: "Just another developer trying to make the web beautiful 💻",
    video:"./insta/video2.mp4",
    likeCount: "8k",
    CommentCount: 215,
    ShareCount: 456,
    isliked: false
  },
  {
    username: "devvibes",
    profilePic: "https://i.pravatar.cc/150?img=3",
    description: "CSS animations hit different 😮‍💨🔥",
     video:"./insta/video3.mp4",
    likeCount: "23k",
    CommentCount: 678,
    ShareCount: 1200,
    isliked: true
  },
  {
    username: "frontendboy",
    profilePic: "https://i.pravatar.cc/150?img=4",
    description: "Turning ideas into interactive websites ✨",
     video:"./insta/video4.mp4",
    likeCount: "6.9k",
    CommentCount: 189,
    ShareCount: 321,
    isliked: false
  },
  {
    username: "javascriptdaily",
    profilePic: "https://i.pravatar.cc/150?img=5",
    description: "JavaScript tips you actually need to know ⚡",
     video:"./insta/video5.mp4",
    likeCount: "18.75k",
    CommentCount: 523,
    ShareCount: 934,
    isliked: false
  },
  {
    username: "webwizard",
    profilePic: "https://i.pravatar.cc/150?img=6",
    description: "Making websites that don't look boring 😎",
     video:"./insta/video6.mp4",
    likeCount: "31.2k",
    CommentCount: 845,
    ShareCount: 1560,
    isliked: true
  }
];
    let clutter = '';
    let allReels = document.querySelector('.all-reels')
reelsData.forEach(function(reel){
    clutter += ` <div class="reel">
            <video autoplay muted loop src="${reel.video}"></video>
              <div class="bottom">
                <div class="info"> 
                 <img src="${reel.profilePic}" alt="">
                    <h4>${reel.username}</h4>
                    <button>Follow</button>
                    </div>
                    <h3>${reel.description}</h3>
                </div>
                <div class="icons">
                    ${reel.isliked?`'<i class="ri-heart-fill">${reel.likeCount}</i>`:'<i class="ri-heart-line">'}
                <i class="ri-message-2-line">${reel.CommentCount}</i>
            <i class="ri-share-forward-line">${reel.ShareCount}</i>
        <i class="ri-more-2-line"></i></div>
            </div>`
             allReels.innerHTML = clutter;
})
console.log(allReels);
