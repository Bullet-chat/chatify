export function typeText(element: any, text: any) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}
