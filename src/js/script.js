// appends the value of n (as string) to k
// "string merge listing"
function strmrgls(a, b) {
  // C gave me sleep paralysis demons, toString() go
  a = a + b.toString() + (b != 1 ? ", " : "");
  return a;
}

// extra shorter
function byID(a) {
  return document.getElementById(a);
}

function collatz() {

  // get input as integer, absolute value in case negative
  var n = Math.abs(parseInt(byID("szam").value));
  let k = ""; // listing
  var i = 0; // amount of times ran
  
  // crash prevention (0 & no input)
  if (isNaN(n) || n == 0) {
    byID("result").innerHTML = "Adjon meg egy nem-nulla értéket!";
    return;
  }

  while (n != 1) {
    n = (n % 2 == 0 ? n/2 : 3*n+1); // the theory

    k = strmrgls(k, n); // merge

    i++;
  }

  // output result
  byID("result").innerHTML = i + " eséllyel futódott le, értékek:";
  byID("results").innerHTML = k;
}