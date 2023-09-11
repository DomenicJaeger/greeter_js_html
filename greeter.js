function main() {
  document.querySelector('#auswerten').addEventListener('click', greeter2);
  
  function greeter2() {
  // let value = getGeschlecht.match("1");
    if ((document.getElementById("alter").checked) == true) {

      if ((document.getElementById("maennl").checked) == true) {
        document.querySelector('output').textContent = 
        `Hallo Herr ${(document.getElementById('nname').value)}`
      }

      else if ((document.getElementById("weibl").checked) == true) {
        document.querySelector('output').textContent =
        `Hallo Frau ${(document.getElementById('nname').value)}`
      }

      else if ((document.getElementById("divers").checked) == true) {
        document.querySelector('output').textContent =
        `Hallo ${(document.getElementById('vname').value)} 
        ${(document.getElementById('nname').value)}`
      }

    }

    else (document.querySelector('output').textContent =
    `Hallo ${(document.getElementById('vname').value)}`)
  };
};
main()