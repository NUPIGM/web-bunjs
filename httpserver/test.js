let url = new URL("http://example.com/?name=John&age=30");

url.searchParams.forEach((value, key) => {
  console.log(key, value);
  console.log(key);
});
// 输出:
// name John
// age 30大qss
