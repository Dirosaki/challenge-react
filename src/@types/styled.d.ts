import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string
			white: string
			text: string
			blue: string
			gray: string
		}
		borderRadius: string
	}
}
