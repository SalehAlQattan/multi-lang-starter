// react
import { useEffect, useState } from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// mui
import {
	Button,
	Box,
	Container,
	IconButton,
	Typography,
	AppBar,
	Toolbar,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
} from '@mui/material'

// icons
import MenuIcon from '@mui/icons-material/Menu'

// lngs
const lngs = {
	en: { nativeName: 'English', dir: 'ltr' },
	ar: { nativeName: 'Arabic', dir: 'rtl' },
}

// drawer width
const drawerWidth = 240

const Header = () => {
	// i18n
	const { t, i18n } = useTranslation()

	// current language states
	const [currentLng, setCurrentLng] = useState(i18n.language)

	// app bar drawer states
	const [mobileOpen, setMobileOpen] = useState(false)

	// handle drawer toggle
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	// handle language change
	const handleLanguageChange = (lng) => {
		i18n.changeLanguage(lng)
		setCurrentLng(lng)
	}

	// set document direction and language
	useEffect(() => {
		document.documentElement.dir = lngs[currentLng].dir
		document.documentElement.lang = currentLng
	}, [currentLng])

	const drawer = (
		<Container onClick={handleDrawerToggle}>
			<ListItem>
				<ListItemText>
					<Typography variant='h6'>{t('brand')}</Typography>
				</ListItemText>
			</ListItem>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton
						onClick={() => handleLanguageChange(currentLng === 'en' ? 'ar' : 'en')}
					>
						<ListItemText
							primary={
								<Typography variant='h6'>
									{currentLng === 'en' ? 'العربية' : 'English'}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</Container>
	)

	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							flexGrow: 1,
							color: 'inherit',
						}}
					>
						{t('brand')}
					</Typography>
					<Typography
						variant='h5'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							color: 'inherit',
						}}
					>
						{t('brand')}
					</Typography>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleDrawerToggle}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Button
							onClick={() => handleLanguageChange(currentLng === 'en' ? 'ar' : 'en')}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							{currentLng === 'en' ? 'العربية' : 'English'}
						</Button>
					</Box>
				</Toolbar>
			</Container>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					anchor='right'
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</AppBar>
	)
}

export default Header
