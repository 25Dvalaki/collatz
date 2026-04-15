// appends b (as string) to a
// "string merge listing"
function strmrgls(a, b) {
  // C gave me sleep paralysis demons, toString() go
  a = a + b.toString() + (b != 1 ? ", " : "");
  return a;
}

// the next two functions are just here for laziness and can be ignored
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
  var runs = 0; // amount of times ran
  
  // crash prevention (0 & no input) + just dont run if its less than 2
  if (isNaN(n) || n <= 2) {
    output("Adjon meg egy nem-nulla értéket, amely nagyobb mint 2!")
    return;
  }

  while (n != 1) {
    n = (!(n % 2) ? n/2 : 3*n+1); // theory

    k = strmrgls(k, n);

    runs++;
  }

  output((runs + " eséllyel futódott le, értékek:"), k);
}