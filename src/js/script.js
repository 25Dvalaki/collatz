function collatz() {

  // clear console so i can spam it :p
  console.clear();


  // first just get the value
  // integers only since we use modulo anyways!
  // note: use absolute value (im not letting you crash your browsre lmao)
  var n = Math.abs(parseInt(document.getElementById("szam").value));

  // amount of times the loop has ran (its not k because that would represent product here if i recall my math right)
  var i = 0;
  /*
  not the same as the flowgorithm project because i actually like rewriting stuff in other languages for some reason and bloating the hell out of it
  ...i dont know why. i just enjoyed it.
  */

  while (n != 1) {
    if ((n % 2) == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    i++;
    console.log(n)
  }

  document.getElementById("result").innerHTML = i + " eséllyel futódott le.";
}