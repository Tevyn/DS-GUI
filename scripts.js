
//Background Color
const colorInput = document.getElementById('bkg')
const colorVariable = '--background'

colorInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(colorVariable, e.target.value);
  })


//Font Color
const textcolorInput = document.getElementById('text')
const textcolorVariable = '--text'

textcolorInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(textcolorVariable, e.target.value);
  })


//Primary Color
const primaryInput = document.getElementById('primary')
const primaryVariable = '--primary'

primaryInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(primaryVariable, e.target.value);
})


//Font
const fontInput = document.getElementById('font')
const fontVariable = '--font'

fontInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(fontVariable, e.target.value);
  })


//Rem
const remInput = document.getElementById('rem')
const remVariable = '--rem'

remInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(remVariable, e.target.value + 'px');
  })

//Font Scale
const scaleInput = document.getElementById('scale')
const h1Variable = '--h1'
const h2Variable = '--h2'
const h3Variable = '--h3'
const h4Variable = '--h4'
const h5Variable = '--h5'

scaleInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(h1Variable, Math.pow(e.target.value, 5) + 'rem');
    document.documentElement.style.setProperty(h2Variable, Math.pow(e.target.value, 4) + 'rem');
    document.documentElement.style.setProperty(h3Variable, Math.pow(e.target.value, 3) + 'rem');
    document.documentElement.style.setProperty(h4Variable, Math.pow(e.target.value, 2) + 'rem');
    document.documentElement.style.setProperty(h5Variable, Math.pow(e.target.value, 1) + 'rem');
})

//Corner Radius
const radiusInput = document.getElementById('radius')
const radiusVariable = '--radius'

radiusInput.addEventListener('change', e => {
    document.documentElement.style.setProperty(radiusVariable, e.target.value + 'rem');
})