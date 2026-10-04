const cards = [
  { title: "Crystal Tide #0101", description: "A crystal that glows above a calm, deep ocean.", price: "0.041 ETH", daysLeft: "3 days left", image: "images/nft-1.jpg", author: "Jules Wyvern" },
  { title: "Neon Tiger #0214", description: "A geometric tiger made of pure violet light.", price: "0.085 ETH", daysLeft: "5 days left", image: "images/nft-2.jpg", author: "Mara Quill" },
  { title: "Gold Orbit #0332", description: "An astronaut helmet that reflects a whole galaxy.", price: "0.120 ETH", daysLeft: "1 day left", image: "images/nft-3.jpg", author: "Theo Marsh" },
  { title: "Cyber Owl #0456", description: "A robot owl watching the city with cyan eyes.", price: "0.067 ETH", daysLeft: "7 days left", image: "images/nft-4.jpg", author: "Ana Reyes" },
  { title: "Liquid Chrome #0578", description: "A chrome sphere with waves of pink and blue.", price: "0.093 ETH", daysLeft: "2 days left", image: "images/nft-5.jpg", author: "Leo Fontaine" },
  { title: "Sky Island #0690", description: "A floating island with a neon waterfall.", price: "0.150 ETH", daysLeft: "4 days left", image: "images/nft-6.jpg", author: "Iris Chen" }
];

const eyeIcon = `<svg width="48" height="32" viewBox="0 0 24 16" fill="#fff"><path d="M12 0C6.5 0 2 3.6 0 8c2 4.4 6.5 8 12 8s10-3.6 12-8c-2-4.4-6.5-8-12-8Zm0 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>`;
const ethIcon = `<svg width="10" height="16" viewBox="0 0 10 16" fill="#00ffff" aria-hidden="true"><path d="M5 0 0 8l5 3 5-3L5 0Zm0 12.2L0 9.2 5 16l5-6.8-5 3Z"/></svg>`;
const clockIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#8bacd9" aria-hidden="true"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Zm.75-10.5h-1.5v4.5l3.6 2.2.75-1.2-2.85-1.7V4Z"/></svg>`;

function createCard(data, index) {
  const wrap = document.createElement("div");
  wrap.className = "card-wrap animate__animated animate__fadeInUp";
  wrap.style.animationDelay = `${index * 0.15}s`;

  wrap.innerHTML = `
    <article class="card">
      <a class="card__media" href="#" aria-label="View ${data.title}">
        <img src="${data.image}" alt="${data.title} artwork">
        <span class="card__overlay" aria-hidden="true">${eyeIcon}</span>
      </a>
      <h2 class="card__title"><a href="#">${data.title}</a></h2>
      <p class="card__text">${data.description}</p>
      <div class="card__stats">
        <p class="price">${ethIcon} ${data.price}</p>
        <p class="time">${clockIcon} ${data.daysLeft}</p>
      </div>
      <footer class="card__author">
        <img src="images/image-avatar.png" alt="" width="32" height="32">
        <p>Creation of <a href="#">${data.author}</a></p>
      </footer>
    </article>`;
  return wrap;
}

const list = document.getElementById("cardList");
cards.forEach((data, index) => list.appendChild(createCard(data, index)));