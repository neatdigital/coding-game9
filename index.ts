// Import stylesheets
import './style.css';

// Write TypeScript code!
/*
MODE REVERSE
Pas d’énoncé fourni. Vous devez trouver quoi faire en observant les jeux de tests.

Test 1

Entrée
3

Sortie attendue
+++
+++
+++

Test 1

1

+

Test 3
18

++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++
++++++++++++++++++


*/

//const s = 3;
//const s = 1;
const s = 18;

let line = '';
for (let i = 0; i < s * s; i++) {
  line += '+';
  if ((i + 1) % s === 0) {
    console.log(line);
    line = '';
  }
}
