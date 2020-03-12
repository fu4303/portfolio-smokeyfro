import DefaultLayout from '~/layouts/Default.vue'
import VueStorage from 'vuestorage'
import KonamiCode from 'vue-konami-code'
import VueRouter from 'vue-router'

require('~/css/global.css')

export default function(Vue, { isClient, router }) {

	Vue.component('Layout', DefaultLayout)
	Vue.use(VueRouter)

	// Expanding textareas
	if (process.isClient) {
		const VueExpand = require('vue-expand').default;
		Vue.use(VueExpand);
	}

	// if(process.isClient) {
	// 	const vueCustomScrollbar = require('vue-custom-scrollbar').default
	// 	Vue.use(vueCustomScrollbar)
	// }

	if(process.isClient) {
		const DrawerLayout = require('vue-drawer-layout').default
		Vue.use(DrawerLayout)
	}

	// Confetti
	if(process.isClient) {
		const confetti = require('vue-confetti').default
		Vue.use(confetti)
	}

	// localStorage
	Vue.use(VueStorage)

	// Konami
	if(process.isClient) {
		Vue.use(KonamiCode, {callback: function () {
			router.push({ path: '/easteregg' })
		}})
	}

	// Register a global custom directive called v-focus
	Vue.directive('focus', {
		inserted: function (el) {
			el.focus()
		}
	})

}
