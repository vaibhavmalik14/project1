import { Button, Card, Grid } from 'semantic-ui-react';
import React, { Component } from 'react';

import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import Layout from '../../components/Layout';
import Link from 'next/link';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
	static async getInitialProps(context) {
		const campaign = Campaign(context.query.campaign);
		const summary = await campaign.methods.getSummary().call();

		return {
			address: context.query.campaign,
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4],
		};
	}

	renderCards() {
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount,
		} = this.props;

		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description:
					'The manager created this Startup and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' },
			},
			{
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description:
					'You must contribute at least this much wei to become an approver',
			},
			{
				header: requestsCount,
				meta: 'Number of Requests',
				description:
					'A request tries to withdraw money from the contract. Requests must be approved by approvers',
			},
			{
				header: approversCount,
				meta: 'Number of Contributors',
				description:
					'Number of people who have already donated to this Startup',
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Startup Balance (ether)',
				description:
					'The balance is how much money this Startup has left to spend.',
			},
		];

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<div className='ContributeFormContainer'>
					<ContributeForm address={this.props.address} />
				</div>
				<h2>Startup Info</h2>
				<Grid>
					<Grid.Row>
						<Grid.Column>{this.renderCards()}</Grid.Column>
					</Grid.Row>

					<Link
						href='/campaigns/[campaign]/requests'
						as={`/campaigns/${this.props.address}/requests`}>
						<a>
							<Button primary>View Requests</Button>
						</a>
					</Link>
				</Grid>
			</Layout>
		);
	}
}

export default CampaignShow;
