// mui
import { Box, Container, Stack, Typography } from '@mui/material'

// i18n
import { useTranslation } from 'react-i18next'

const Home = () => {
	// i18n
	const { t } = useTranslation()

	return (
		<Box sx={{ py: 5 }}>
			<Container>
				<Stack spacing={2}>
					<Typography variant='h2' sx={{ fontWeight: '600' }}>
						{t('heading')}
					</Typography>
					<Typography
						variant='h5'
						sx={{ color: 'text.secondary', fontWeight: '200' }}
					>
						{t('subheading')}
					</Typography>
				</Stack>
			</Container>
		</Box>
	)
}

export default Home
