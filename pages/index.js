import { Button, Card, Icon } from 'semantic-ui-react';
import React, { Component } from 'react';

import Layout from '../components/Layout';
import Link from 'next/link';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		return { campaigns };
	}

	renderCampaigns() {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}

		const items = this.props.campaigns.map((campaign) => {
			const colors = [
				'red',
				'orange',
				'yellow',
				'olive',
				'green',
				'teal',
				'blue',
				'violet',
				'purple',
				'pink',
				'brown',
				'grey',
			];

			return (
				<div className='campaignItem'>
					<a href={`/campaigns/${campaign}`}>
						<h3>{campaign}</h3>
						<span>
							View Startup <Icon name='chevron right' />
						</span>
					</a>
				</div>
			);
		});

		return items;
	}

	render() {
		return (
			<Layout>
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
							paddingBottom: 10,
						}}>
						<h3
							style={{
								margin: 0,
								padding: 0,
							}}>
							Open Startups
						</h3>
						<Link href='/campaigns/new'>
							<Button
								floated='right'
								content='Create Startup'
								icon='add circle'
								primary
							/>
						</Link>
					</div>
					<div className='campaignGrid'>{this.renderCampaigns()}</div>
				</div>
			</Layout>
		);
	}
}

export default CampaignIndex;
