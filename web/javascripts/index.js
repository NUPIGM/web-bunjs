const urlParams = new URLSearchParams(window.location.search);

// 获取所有参数名和值
let query = "?";
for (const [key, value] of urlParams.entries()) {
  query = query + key + "=" + value + "&";
}
//删除最后一个&
query = query.substring(0, query.length - 1);

// 获取指定参数的所有值
const paramValues = urlParams.getAll("paramName");

// 判断是否登录-隐藏登录按钮
function hiddenDiv() {
  const hiddenDiv = document.getElementById("hidden-login");
  hiddenDiv.classList.toggle("hidden");
}

// 登录按钮点击事件
function login() {
  fetch("http://127.0.0.1:8080/api/data/getdata" + query)
    .then((response) => response.json())
    .then((data) => {
      // 处理返回的数据
      console.log(query);
      alert("登录成功" + JSON.stringify(data));
    })
    .catch((error) => {
      // 处理错误
      console.error(error);
    });
}
