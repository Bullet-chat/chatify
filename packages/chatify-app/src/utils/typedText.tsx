export const typeText = (element: any, text: any) => {
  return new Promise((resolve, reject) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text[index];
        index++;
      } else {
        resolve("Done");
        clearInterval(interval);
      }
    }, 20);
  });
};
