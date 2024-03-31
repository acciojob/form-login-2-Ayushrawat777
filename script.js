//your JS code here. If required.
   document.getElementById("MyForm").onsubmit = volume_sphere;
      function volume_sphere() {
    let a=    document.getElementById("firstname").value;
    let b=    document.getElementById("lastname").value;
    let c=    document.getElementById("number").value;
    let d=    document.getElementById("email").value;
        alert(a+b+c+d)
      }