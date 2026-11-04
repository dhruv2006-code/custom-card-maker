const users = [
  {
    name: "Dhruv Narayan",
    pic: "https://i.pravatar.cc/150?img=12",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    bio: "Frontend developer passionate about creating beautiful websites."
  },
  {
    name: "Aarav Sharma",
    pic: "https://i.pravatar.cc/150?img=11",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    bio: "Creative designer who loves UI/UX and exploring new ideas."
  },
  {
    name: "Priya Verma",
    pic: "https://i.pravatar.cc/150?img=47",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    bio: "Full-stack developer | Tech enthusiast | Lifelong learner."
  },
  {
    name: "Rohan Mehta",
    pic: "https://i.pravatar.cc/150?img=13",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    bio: "Building digital products and sharing my coding journey."
  },
  {
    name: "Ananya Singh",
    pic: "https://i.pravatar.cc/150?img=44",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500",
    bio: "Passionate about photography, creativity, and web development."
  }
];
let allCards = document.querySelector(".cards")
function showUsers (){
    let clutter = "";
    users.forEach(function(usr){
        clutter+= `<div class="card">
                <img src="${usr.img}" alt="" class="bg-img">
                <div class="content">
                    <h3>${usr.name}</h3>
                    <p>${usr.bio}</p>
                </div>
            </div>`
        allCards.innerHTML = clutter;
        })
}
showUsers()

