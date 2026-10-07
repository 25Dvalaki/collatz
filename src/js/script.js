// this is just an alias for getElementById
function byID(a) {
  return document.getElementById(a);
}

// just change the result jargon
// laziness
function output(a, b) {
    byID("result").innerHTML = a;
    byID("results").innerHTML = (b ? b : "Az értékek itt lesznek kilistázva.");
}

// appends b (as string) to a
// "string merge listing"
function strmrgls(a, b) {
  // C gave me sleep paralysis demons, toString() go
  a = a + b.toString() + (b != 1 ? ", " : "");
  return a;
}

// the actual thing
function collatz() {
  var n = Math.abs(parseInt(byID("szam").value));

  if (isNaN(n) || n <= 2) {
    output("Adjon meg egy nem-nulla értéket, amely nagyobb mint 2!");
    return;
  }

  let k = ""; // list
  var runs = 0;
  while (n != 1) {
    n = (!(n%2) ? n/2 : 3*n+1); // theory
    k = strmrgls(k, n);
    runs++;
  }
  output((runs + " eséllyel futódott le, értékek:"), k);
}
