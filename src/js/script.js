function collatz() {

  // get integer, absolute value it so you dont do a recursive memleak
  var n = Math.abs(parseInt(document.getElementById("szam").value));
  let k = ""; // write the results all at once (set later)
  
  // crash prevention hhhh
  if (isNaN(n) || n == 0) {
    document.getElementById("result").innerHTML = "Adjon meg egy nem-nulla értéket!";
    return;
  }

  // runs
  var i = 0;

  // actual func
  while (n != 1) {
    if ((n % 2) == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    if (n != 1) {
    k = k + n.toString() + ", ";
    } else {
      k = k + n.toString();
    }
    // "i swear i debugged for more than 4 tests" with clear syntax errors in debug prints
    // console.debug(k);
    // console.debug(n);
    i++;
  }

  document.getElementById("result").innerHTML = i + " eséllyel futódott le, értékek:";
  document.getElementById("results").innerHTML = k;
}