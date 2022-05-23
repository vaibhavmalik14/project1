import { Icon } from 'semantic-ui-react';
import Link from 'next/link';
import React from 'react';

export default () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				backgroundColor: '#363537',
				paddingBottom: 20,
				marginBottom: 10,
				borderBottomLeftRadius: '10px',
				borderBottomRightRadius: '10px',
				border: '1px solid #3f3f3f',
			}}>
			<h2
				style={{
					padding: '10px 20px',
					marginTop: 10,
					borderRadius: '8px',
				}}>
				<Link href='/'>
					<a className='item'>
						Investor Protector{' '}
						<span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>{' '}
						<Icon name='home' />
					</a>
				</Link>
			</h2>
		</div>
	);
};
