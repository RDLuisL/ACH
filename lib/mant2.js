/*
 * An experimental mini library that I authored, called KICSS, is used
 * for communicating a few dynamic variables to CSS using custom properties.
 *
 * For more info, check:
 * - https://github.com/scriptype/kicss
 * - https://enes.in/kicss/
 *
 * Note that it's very premature and probably buggy at the moment.
*/
import { reportGlobals, reportVariable } from "https://enes.in/kicss/kicss.js"

reportGlobals({
  scroll: true
})

const { min } = Math
const innerWidth = () => window.innerWidth

reportVariable('--car-width', () => min(innerWidth() / 3, 600))
reportVariable('--vw', innerWidth)

/*
 * Debug controls
 */
const debugToggle = document.querySelector('#debug-toggle')
debugToggle.addEventListener('click', () => {
  document.body.classList.toggle('debug')
})