//Linking an input's elementId to a css variable
function linkInput(elementId, cssVar){
  linkInputHelper(elementId, cssVar, 'e.target.value')
}

//A helper that accepts an arbitrary value as a string to allow for calculations and units
function linkInputHelper(elementId, cssVar, cssFunction) {
  const input = document.getElementById(elementId);

  input.addEventListener('input', e => {
    document.documentElement.style.setProperty(cssVar, eval(cssFunction));
})}

//Brand basics
linkInput('primary', '--primary');
linkInput('bkg', '--background');

//Body text
linkInput('body-font','--body-font');
linkInput('rem','--rem');
linkInput('body-color','--body-color');
linkInput('body-weight','--body-weight');

//Header text
linkInput('header-font','--header-font');
linkInputHelper('scale','--h1',`Math.pow(e.target.value, 5) + 'rem'`);
linkInputHelper('scale','--h2',`Math.pow(e.target.value, 4) + 'rem'`);
linkInputHelper('scale','--h3',`Math.pow(e.target.value, 3) + 'rem'`);
linkInputHelper('scale','--h4',`Math.pow(e.target.value, 2) + 'rem'`);
linkInputHelper('scale','--h5',`e.target.value + 'rem'`);

//Buttons and inputs
linkInput('border-color','--border-color');
linkInputHelper('radius','--radius',`e.target.value + 'rem'`);