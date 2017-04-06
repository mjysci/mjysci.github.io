// 小数点后两位天花板方法
function pointCeil(qian) {
  var qian100 = qian * 100;
  var qianLittleCeil = Math.ceil(qian100);
  var qianLittleCeil = qianLittleCeil / 100;
  return qianLittleCeil
}

// 小数点后两位地板方法
function pointFloor(qian) {
  var qian100 = qian * 100;
  var qianLittleFloor = Math.floor(qian100);
  var qianLittleFloor = qianLittleFloor / 100;
  return qianLittleFloor
}

function autoExc() {
  $.ajax({
    type: "get",
    async: false,
    url: 'http://api.k780.com:88/?app=finance.rate&scur=USD&tcur=CNY&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=data=?',
    dataType: "jsonp",
    success: function(data) {
      $("#excRate").val(data.result.rate)
      // console.log($("#excRate").value);
      // console.log(data.result.rate)
    },
    error: function() {
      alert('汇率请求失败');
    }
  });
}

// 计算美元区售价，已经写到代码里面了
// function calc() {
//   var daoGot = rmbGot / excRate;
//   var taxCamp = daoGot * 0.1;
//   var taxValve = daoGot * 0.05;
//   if (taxCamp > 0.01) {
//     taxCamp = pointFloor(taxCamp);
//   } else {
//     taxCamp = 0.01;
//   }
//   if (taxValve > 0.01) {
//     taxValve = pointFloor(taxValve);
//   } else {
//     taxValve = 0.01;
//   }
//   var daoSell = daoGot + taxCamp + taxValve;
//   return daoSell
// }

function calcLoop() {
  var rmbGot = document.getElementById("rmbGot").value;
  var excRate = document.getElementById("excRate").value;
  // console.log(rmbGot);
  // console.log(excRate);
  var daoGot = rmbGot / excRate;
  var daoGot = pointCeil(daoGot);
  // console.log(daoGot);
  var taxCamp = daoGot * 0.1;
  var taxValve = daoGot * 0.05;
  if (taxCamp > 0.01) {
    taxCamp = pointFloor(taxCamp);
  } else {
    taxCamp = 0.01;
  }
  if (taxValve > 0.01) {
    taxValve = pointFloor(taxValve);
  } else {
    taxValve = 0.01;
  }
  // console.log(taxCamp);
  // console.log(taxValve);
  var daoSell = daoGot + taxCamp + taxValve;
  console.log(daoSell);
  // console.log(daoSell);
  var initDao = daoSell;
  while (initDao === daoSell) {
    rmbGot = Number(rmbGot) + 0.01;
    // console.log(rmbGot);
    var daoGot = rmbGot / excRate;
    var daoGot = pointCeil(daoGot);
    var taxCamp = daoGot * 0.1;
    var taxValve = daoGot * 0.05;
    if (taxCamp > 0.01) {
      taxCamp = pointFloor(taxCamp);
    } else {
      taxCamp = 0.01;
    }
    if (taxValve > 0.01) {
      taxValve = pointFloor(taxValve);
    } else {
      taxValve = 0.01;
    }
    var daoSell = Number(daoGot) + Number(taxCamp) + Number(taxValve);
    console.log(initDao);
    console.log(daoSell);
  }
  rmbGot = Number(rmbGot) - 0.01;
  // console.log(rmbGot);
  document.getElementById("maxRmb").value = rmbGot
}

autoExc()
