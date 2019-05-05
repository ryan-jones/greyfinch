export const ANIMALS = ["cat", "dog", "elephant", "lion", "monkey"];

export const LANGUAGES = [
  {
    lang: "en",
    text: "Or choose your own!",
    name: "English",
    cta: "Click to see a new animal!",
    placeholder: "TIger, snake, dinosaur...",
    error: "No images could be found for your search!"
  },
  {
    lang: "es",
    text: "O elige el tuyo!",
    name: "Español",
    cta: "Haga clic para ver un nuevo animal!",
    placeholder: "Tigre, serpiente, dinosaurio ...",
    error: "No se pueden encontrar imágenes para su búsqueda!"
  },
  {
    lang: "zh-TW",
    text: "或選自己的！",
    name: "中文（繁體",
    cta: "點擊查看新動物!",
    placeholder: "老虎，蛇，恐龍...",
    error: "找不到適合的圖片!"
  }
];

export const randomAnimal = () => {
  return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
};
