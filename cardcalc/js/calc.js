function pointCeil(inMoney) {
  return Math.ceil(inMoney * 100) / 100
}

function pointFloor(inMoney) {
  return Math.floor(inMoney * 100) / 100
}

function autoExc() {
  $.ajax({
    type: "get",
    async: false,
    url: 'https://sapi.k780.com/?app=finance.rate&scur=USD&tcur=CNY&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=data=?',
    dataType: "jsonp",
    success: function(data) {
      $("#excRate").val(data.result.rate)
    },
    error: function() {
      alert('汇率请求失败');
    }
  });
}

function calcLoop(rmbGot, excRate) {
  var dollarGot = rmbGot / excRate;
  var dollarGot = pointCeil(dollarGot);

  var taxCamp = dollarGot * 0.1;
  var taxValve = dollarGot * 0.05;
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
  var dollarSell = dollarGot + taxCamp + taxValve;
  var initdollar = dollarSell;
  while (initdollar === dollarSell) {
    rmbGot = Number(rmbGot) + 0.01;

    var dollarGot = rmbGot / excRate;
    var dollarGot = pointCeil(dollarGot);
    var taxCamp = dollarGot * 0.1;
    var taxValve = dollarGot * 0.05;
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
    var dollarSell = Number(dollarGot) + Number(taxCamp) + Number(taxValve);
  }
  rmbGot = Number(rmbGot) - 0.01;
  return rmbGot;
}

function main(){
  var rmbGot = document.getElementById("rmbGot").value;
  var excRate = document.getElementById("excRate").value;
  maxRmb = calcLoop(rmbGot, excRate);
  document.getElementById("maxRmb").value = maxRmb;
  var discountRmb = maxRmb - 0.01;
  while(maxRmb - calcLoop(discountRmb, excRate) < 0.01){
    discountRmb -= 0.01;
  }
  document.getElementById("discountRmb").value = discountRmb;
}

autoExc()
