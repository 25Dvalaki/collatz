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

function output(a, b) {
    byID("result").innerHTML = a;
    if (b.length >= 1) {
      byID("results").innerHTML = b;
    }
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
  // DON'T output to results if nothing would be. it looks ugly.
  if ((k.length >= 1) && (i >= 1)) {
    output((i + " eséllyel futódott le, értékek:"), k);
  } else {
    output("Nem futódott le, mivel azonnal 1-re esett.", "Az értékek itt lesznek kilistázva.");
  }
}