const loadData = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data);
    });
};

const setButtonActive = (clickedButton) => {
  const allButtons = document.querySelectorAll(
    "#categoryButtonContainer button",
  );
  allButtons.forEach((btn) => btn.classList.remove("btn-active"));
  clickedButton.classList.add("btn-active");
};

const displayCategories = (data) => {
  const categoryButtonContainer = document.getElementById(
    "categoryButtonContainer",
  );
  categoryButtonContainer.innerHTML = "";

  const allDiv = document.createElement("div");
  const button = document.createElement("button");
  button.className = "btn btn-outline btn-active text-indigo-600 rounded-full";
  button.innerText = "All";

  button.addEventListener("click", (e) => {
    loadCategoryData("all");
    setButtonActive(e.target);
  });

  allDiv.appendChild(button);
  categoryButtonContainer.appendChild(allDiv);
  for (let category of data) {
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
        <button class="btn btn-outline text-indigo-600 rounded-full">
            ${category[0].toUpperCase()}${category.slice(1)}
        </button>
    `;
    const button = btnDiv.querySelector("button");

    button.addEventListener("click", (e) => {
      loadCategoryData(category);
      setButtonActive(e.target);
    });

    categoryButtonContainer.appendChild(btnDiv);
  }
};

const loadCategoryData = (category) => {
  const encodedCategory = encodeURIComponent(category);
  let url;
  if (category === "all") {
    url = "https://fakestoreapi.com/products";
  } else {
    url = `https://fakestoreapi.com/products/category/${encodedCategory}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((categoryData) => showCategoryData(categoryData));
};

const loadProductDetails = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayProductDetails(details);
};

const displayProductDetails = (details) => {
  const detailsContainer = document.getElementById("detailsContainer");
  detailsContainer.innerHTML = `
    <div class="card card-side bg-base-100 shadow-sm">
            <div class= "w-full">
                <figure>
                <img
                    src="${details.image}"
                    alt="Movie"
                    class=""
                />
            </figure>
            </div>
            <div class="card-body">
              <h2 class="card-title">${details.title}</h2>
              <h3 class="font-semibold">$ ${details.price}</h3>
              <p>${details.description}</p>
              <div class="font-semibold">
                <div class="flex">
                  <p>Category : <span class="text-indigo-600">${details.category}</span></p>
                </div>
                <p class="py-2">Rating : ${details.rating.rate}<i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i></p>
                <p>Available stock : ${details.rating.count}</p>
              </div>
            </div>
          </div>
    `;
  document.getElementById("my_modal").showModal();
};

const showCategoryData = (categoryData) => {
  const categoryDataContainer = document.getElementById("productContainer");
  categoryDataContainer.innerHTML = "";
  if (categoryData == null) {
  }
  categoryData.forEach((element) => {
    const product = document.createElement("div");
    product.innerHTML = `
        <div class="shadow-sm">
            <div class="bg-gray-300 flex justify-center items-center m-auto py-4">
              <figure>
                <img
                  src="${element.image}"
                  alt="Shoes"
                  class="w-[100px] h-[150px]"
                />
              </figure>
            </div>
            <div class="p-5 flex flex-col gap-5">
              <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
                <p class="text-purple-700 bg-sky-200 border-blue-500 px-2 py-1 rounded-full">${element.category}</p>
                <p><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i>  ${element.rating.rate} (${element.rating.count})</p>
              </div>
              <p class="font-semibold truncate">
                ${element.title}
              </p>
              <h2 class="text-lg lg:text-xl font-bold py-6">${"$" + element.price}</h2>
              <div class="card-actions">
                <div
                  class="flex flex-col lg:flex-row gap-5 lg:justify-around w-full"
                >
                  <button onclick="loadProductDetails(${element.id})" class="btn btn-neutral btn-outline lg:w-2/5">
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
    categoryDataContainer.appendChild(product);
  });
};

loadCategoryData("all");

loadData();
