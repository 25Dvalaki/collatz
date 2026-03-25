// appends the value of n (as string) to k
// felt like making stuff more readable so this exists
function strmrgls(a, b) {
  // C gave me sleep paralysis demons, toString() go
  a = a + b.toString() + (b != 1 ? ", " : "");
  return a;
}

function collatz() {

  // get input as integer, absolute value in case negative
  var n = Math.abs(parseInt(document.getElementById("szam").value));
  let k = ""; // listing
  
  // crash prevention
  if (isNaN(n) || n == 0) {
    document.getElementById("result").innerHTML = "Adjon meg egy nem-nulla értéket!";
    return;
  }

  // amount of times ran
  var i = 0;

  while (n != 1) {
    // do theory or something idk
    n = (n % 2 == 0 ? n/2 : 3*n+1);

    k = strmrgls(k, n);

    // +1 run
    i++;
  }

  // output result
  document.getElementById("result").innerHTML = i + " eséllyel futódott le, értékek:";
  document.getElementById("results").innerHTML = k;
}