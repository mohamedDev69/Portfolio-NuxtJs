// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
import { faPalette, faPenToSquare,faComments, faDesktop, faMobileScreen,faTachometerAlt,faPuzzlePiece,faSearch,faTools,faSyncAlt,faServer   } from '@fortawesome/free-solid-svg-icons';
library.add(faPalette,faPenToSquare, faComments, faDesktop, faMobileScreen,faTachometerAlt,faPuzzlePiece,faSearch,faTools,faSyncAlt,faServer );

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
