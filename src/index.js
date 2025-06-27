// // import printMe from './print.js';

// async function getComponent() {
//   const element = document.createElement('div');
//   const { default: _ } = await import('lodash');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// //   const btn = document.createElement('button');

  

// //   btn.innerHTML = 'Click me and check the console!';
// //   btn.onclick = printMe;

// //   element.appendChild(btn);

        
//   return element;
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

import { cube } from './math.js';

  function component() {
   const element = document.createElement('pre');

   element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());

