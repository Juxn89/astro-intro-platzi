import React, { type FC } from 'react'

interface HeaderProps {
	title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
	return(
		<>
			<header className='container mx-auto p4'>
				<h1 className='text-4xl text-sky-800'>{ title }</h1>
			</header>
		</>
	)
}

export default Header