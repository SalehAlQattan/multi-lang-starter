import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// mui
// mui
import {
	Box,
	createTheme,
	CssBaseline,
	CircularProgress,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material'

// i18n
import './i18n'

// theme
let theme = createTheme({
	palette: {
		primary: {
			main: '#1e88e5',
		},
		secondary: {
			main: '#f50057',
		},
	},
	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
	},
})

theme = responsiveFontSizes(theme)

const fallbackBox = (
	<Box
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		}}
	>
		<CircularProgress />
	</Box>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Suspense fallback={fallbackBox}>
				<App />
			</Suspense>
		</ThemeProvider>
	</React.StrictMode>
)
