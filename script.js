const detailsButtons = document.querySelectorAll('.details-btn');
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalImg = document.getElementById('modalImg');
const modalText = document.getElementById('modalText');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.querySelector('.close-modal');

const products = {
  sand1: {
    title: "Quartz Sand 0.1–0.4 mm",
    img: "0.1-0.4.jpg",
    price: "2 200 UAH / t",
    text: `
      This premium quartz sand fraction 0.1–0.4 mm is perfect for glass production.
      <ul>
        <li>Purity: ≥ 99%</li>
        <li>Moisture: ≤ 0.2%</li>
        <li>Application: Glass industry, high-quality casting</li>
        <li>Features: Fine uniform grains, optimal for high transparency glass</li>
      </ul>
      Our company guarantees consistent supply and quality control for every batch.
    `
  },
  sand2: {
    title: "Quartz Sand 0.4–0.8 mm",
    img: "0.4-0.8.jpg",
    price: "1 900 UAH / t",
    text: `
      Quartz sand fraction 0.4–0.8 mm is widely used in construction.
      <ul>
        <li>Purity: ≥ 98%</li>
        <li>Moisture: ≤ 0.3%</li>
        <li>Application: Concrete, mortar, building materials</li>
        <li>Features: Medium grain size, ideal for mixing and compaction</li>
      </ul>
      Quality and uniformity ensure strong and durable construction results.
    `
  },
  sand3: {
    title: "Quartz Sand 0.8–1.2 mm",
    img: "0.8-1.2.jpg",
    price: "1 700 UAH / t",
    text: `
      Fraction 0.8–1.2 mm is suitable for heavy construction and industrial use.
      <ul>
        <li>Purity: ≥ 97%</li>
        <li>Moisture: ≤ 0.3%</li>
        <li>Application: Road construction, concrete blocks, industrial projects</li>
        <li>Features: Coarse grains, excellent compaction properties</li>
      </ul>
      Ensures high-quality, consistent material supply for large-scale projects.
    `
  },
  sand4: {
    title: "Quartz Sand 1.2–1.6 mm",
    img: "1.2-1.6.jpg",
    price: "1 500 UAH / t",
    text: `
      Large fraction 1.2–1.6 mm for industrial and specialty applications.
      <ul>
        <li>Purity: ≥ 96%</li>
        <li>Moisture: ≤ 0.3%</li>
        <li>Application: Foundry, filtration, decorative landscaping</li>
        <li>Features: Coarse and uniform grains, high resistance to abrasion</li>
      </ul>
      Perfect for specialized industrial requirements and long-term reliability.
    `
  }
};

detailsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const productKey = btn.dataset.product;
    const product = products[productKey];

    modalTitle.innerHTML = product.title;
    modalImg.src = product.img;
    modalText.innerHTML = product.text;
    modalPrice.innerHTML = product.price;

    modal.classList.add('show');
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 400);
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 400);
  }
});
