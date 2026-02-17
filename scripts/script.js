const loadData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      trendingProduct(data);
    });
};
const trendingProduct = (data) => {
  const trendingProductContainer = document.getElementById("trendingProduct");
  trendingProductContainer.innerHTML = "";
  data.forEach((element) => {
    if (element.price >= 599) {
      const productSection = document.createElement("div");
      productSection.innerHTML = `
        <div class="shadow-sm">
            <div class="bg-gray-300 flex justify-center items-center m-auto py-4 w-[30%]">
              <figure class="w-1/3">
                <img
                  src="${element.image}"
                  alt="Shoes"
                />
              </figure>
            </div>
            <div class="p-5 flex flex-col gap-5">
              <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
                <p class="text-purple-700 bg-sky-200 border-blue-500 px-2 py-1 rounded-full">${element.category}</p>
                <p><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i>  ${element.rating.rate} (${element.rating.count})</p>
              </div>
              <p class="font-semibold">
                ${element.title}
              </p>
              <h2 class="text-lg lg:text-xl font-bold py-6">${"$" + element.price}</h2>
              <div class="card-actions">
                <div
                  class="flex flex-col lg:flex-row gap-5 lg:justify-around w-full"
                >
                  <button class="btn btn-neutral btn-outline lg:w-2/5">
                    <i class="fa-regular fa-eye"></i>Details
                  </button>
                  <button class="btn btn-soft btn-primary lg:w-2/5">
                    <i class="fa-solid fa-cart-shopping"></i>Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      trendingProductContainer.appendChild(productSection);
    }
  });
};
loadData();
