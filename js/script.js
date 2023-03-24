// window.onload = function () {
// const form = document.getElementById("inputs");
// }

function triangleType() {
  let sides = ["", "", ""]
  sides.push(parseInt(document.getElementById("A").value));
  sides.push(parseInt(document.getElementById("B").value));
  sides.push(parseInt(document.getElementById("C").value));

  let one = sides[0]
  let two = sides[1]
  let three = sides[2]

  if (one >= two + three || two >= one + three || three >= two + one) {
    output.innerHTML = ("not a Triangle");
  } else if(one === two && one !== three || one !== two && one === three || one && two === three ) {
    output.innerHTML = ("this is an isocseles triangle" )
  }

}