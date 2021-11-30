const sentence = "hello there from lighthouse labs";
let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout(() => {
  console.log("\n");
}, 2000);