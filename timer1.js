const args = process.argv;
const array = args.slice(2);
for (let val of array) {
  if (val) {
    setTimeout(() => {
      if (val > 0 || val === Number) {
      console.log(`. -- ${val} seconds`);}}, val * 1000);
  }
}
