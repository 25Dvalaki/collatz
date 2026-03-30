// appends the value of n (as string) to k
// "string merge listing"
function strmrgls(a, b) {
  // C gave me sleep paralysis demons, toString() go
  a = a + b.toString() + (b != 1 ? ", " : "");
  return a;
}

// the next two functions are just here for the laziness factor and can be ignored
// this is basically just an alias for getElementById
function byID(a) {
  return document.getElementById(a);
}

// just change the result jargon
// as mentioned earlier this is just for laziness
function output(a, b) {
    byID("result").innerHTML = a;
    // !b is true when b is not given a value
    // (glad this is a universal thing and not just in C)
    byID("results").innerHTML = (b ? b : "Az értékek itt lesznek kilistázva.");
}

// the actual thing
function collatz() {

  // get input as integer, absolute value in case negative
  var n = Math.abs(parseInt(byID("szam").value));
  let k = ""; // listing
  var i = 0; // amount of times ran
  
  // crash prevention (0 & no input) + just dont run if its less than 2
  if (isNaN(n) || n == 0 || n <= 2) {
    output("Adjon meg egy nem-nulla értéket, amely nagyobb mint 2!")
    return;
  }

  while (n != 1) {
    n = (n % 2 == 0 ? n/2 : 3*n+1); // the theory

    k = strmrgls(k, n); // merge

    i++;
  }

  // output result
  output((i + " eséllyel futódott le, értékek:"), k);
}