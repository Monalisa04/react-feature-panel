import { CONFIG_TYPE_NUMBER, LAYOUT_3_COL } from "../constants/constants";

export const FEATURES_PANEL_CONFIG = {
	general: {
		title: 'GENERAL',
		layout: LAYOUT_3_COL,
		features: [
			{
				label: 'Case Management',
				code: 'caseMgmt',
				defaultValue: true,
			},
			{
				label: 'Map TimeLine',
				code: 'mapTimeline',
				defaultValue: true,
			},
			{
				label: 'Views & Briefings',
				code: 'views',
				defaultValue: true,
			},
			{
				label: 'Notifications',
				code: 'notifications',
				defaultValue: true,
			},
			{
				label: 'Mass Communications',
				code: 'communications',
				defaultValue: true,
			},
			{
				label: 'Traffic Cameras',
				code: 'cameras',
				defaultValue: true,
			},
		]
	},
	settings: {
		title: 'SETTINGS',
		layout: LAYOUT_3_COL,
		features: [
			{
				label: 'Audit Log',
				code: 'audit',
				defaultValue: true,
				group: 'userMgmt'
			},
			{
				label: 'Users',
				code: 'users',
				defaultValue: false,
				group: 'userMgmt',
				features: [
					{
						label: 'Users Add',
						code: 'users.add',
						defaultValue: true,
					},
					{
						label: 'Users Delete',
						code: 'users.delete',
						defaultValue: false,
						features: [
							{
								label: 'Users Delete Active',
								code: 'users.delete.active',
								defaultValue: false,
							},
							{
								label: 'Users Delete Inactive',
								code: 'users.delete.inactive',
								defaultValue: false,
							},
						],
					},
					{
						label: 'Users Edit',
						code: 'users.edit',
						defaultValue: true,
					},
					{
						label: 'Max Users',
						code: 'maxUsers',
						defaultValue: true,
						additionalConfig: {
							type: CONFIG_TYPE_NUMBER,
							min: 1,
							max: 10,
							value: 4,
						},
					}
				],
			},
		]
	},
	alerts: {
		title: 'ALERTS',
		layout: LAYOUT_3_COL,
		features: [
			{
				label: 'Alert Manager',
				code: 'alert.manager',
				defaultValue: true,
				group: 'alert',
			},
			{
				label: 'Alert rules',
				code: 'alert.rules',
				defaultValue: true,
				group: 'alert',
				additionalConfig: {
					type: CONFIG_TYPE_NUMBER,
					min: 0,
					max: 10,
				},
			},
		]
	},
};