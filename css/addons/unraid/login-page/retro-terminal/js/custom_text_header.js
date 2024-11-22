
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
  __  __ ___ __  __ ___ ____  _ ____   __        _______ _     _     
|  \/  |_ _|  \/  |_ _|  _ \( ) ___|  \ \      / / ____| |   | |    
| |\/| || || |\/| || || |_) |/\___ \   \ \ /\ / /|  _| | |   | |    
| |  | || || |  | || ||  _ <   ___) |   \ V  V / | |___| |___| |___ 
|_|  |_|___|_|  |_|___|_| \_\ |____/     \_/\_/  |_____|_____|_____|
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
