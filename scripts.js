//Linking an input's elementId to a css variable
function linkInput(elementId, cssVar) {
  const input = document.getElementById(elementId);

  input.addEventListener('input', e => {
    document.documentElement.style.setProperty(cssVar, e.target.value);
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

//Font Scale is a bit more complicated, but there's probably a way to make it better.
const scaleInput = document.getElementById('scale')
const h1Variable = '--h1'
const h2Variable = '--h2'
const h3Variable = '--h3'
const h4Variable = '--h4'
const h5Variable = '--h5'

scaleInput.addEventListener('input', e => {
    document.documentElement.style.setProperty(h1Variable, Math.pow(e.target.value, 5) + 'rem');
    document.documentElement.style.setProperty(h2Variable, Math.pow(e.target.value, 4) + 'rem');
    document.documentElement.style.setProperty(h3Variable, Math.pow(e.target.value, 3) + 'rem');
    document.documentElement.style.setProperty(h4Variable, Math.pow(e.target.value, 2) + 'rem');
    document.documentElement.style.setProperty(h5Variable, Math.pow(e.target.value, 1) + 'rem');
})

//Buttons and inputs
linkInput('border-color','--border-color');

//Corner Radius is also slightly more involved; TODO abstract 
const radiusInput = document.getElementById('radius')
const radiusVariable = '--radius'

radiusInput.addEventListener('input', e => {
    document.documentElement.style.setProperty(radiusVariable, e.target.value + 'rem');
})