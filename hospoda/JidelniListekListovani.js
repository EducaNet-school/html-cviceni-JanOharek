//ahoj ahoj test1
const meals = [
  {
    name: "Rizek",
    image: "images/rizek.jpg",
    description: "Vyborny kureci rizek s bramborovou kasi a zeleninovou oblohou",
  },
  {
    name: "Svickova",
    image: "images/svickova.jpg",
    description: "Svickova s knedliky a brusinkami",
  },
  {
    name: "Kure na paprice",
    image: "images/kurenapaprice.jpg",
    description: "Kureci prsa s paprikovou omackou a testovinami.",
  },
];

const mealImage = document.getElementById("meal-image");
const mealName = document.getElementById("meal-name");
const mealDescription = document.getElementById("meal-description");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentMealIndex = 0;

displayMeal(currentMealIndex);

prevBtn.addEventListener("click", () => {
  currentMealIndex--;
  if (currentMealIndex < 0) {
    currentMealIndex = meals.length - 1;
  }
  displayMeal(currentMealIndex);
});

nextBtn.addEventListener("click", () => {
  currentMealIndex++;
  if (currentMealIndex >= meals.length) {
    currentMealIndex = 0;
  }
  displayMeal(currentMealIndex);
});

function displayMeal(index) {
  const meal = meals[index];
  mealImage.src = meal.image;
  mealName.textContent = meal.name;
  mealDescription.textContent = meal.description;
}
