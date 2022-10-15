import { useState } from "react";
// yha state krne ke liye react krna hi pdega ya sidhe react ke jagah ham useState bhi kr sakte hai
function Profile() {
  // yha hamne by default true and false man liya hai to jab true hoga to vo react bhi vesa hi karega
  let [loggedIn, setLoggedIn] = useState(1);

  return (
    <div>
      {/* ye wali react me "if else condition" hai  pehle ye if check karega then else*/}
      {loggedIn ? <h3>welcome to Mp</h3> : <h3>welcome</h3>}
    </div>
  );
}

export default Profile;
