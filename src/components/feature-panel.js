import { useEffect, useState } from 'react';
import { LAYOUT_3_COL } from '../constants/constants';
import Features from './features';
import { FEATURES_PANEL_CONFIG as config} from "../config/features-panel-config";

const FeaturesPanel = () => {
	const [groupedFeatures, setGroupedFeatures] = useState({});

	const getFeaturesArrayByGroups = features => {
		const groups = features.reduce((acc, feature) => {
			const { group, code } = feature;
			if (group){
				if (acc[group]) {
					acc[group] = [
						...acc[group],
						feature,
					];
				} else {
					acc[group] = [
						feature,
					];
				}
			} else {
				acc[code] = [feature];
			}
			return acc;
		}, {});
		return groups;
	};

	const displayFeatures = (layout, featureGroups) => {
		switch (layout){
			case LAYOUT_3_COL:
				return (
					<div className="row">
						{Object.keys(featureGroups).map((key, index) => (
							<div className="col-lg-4 col-xs-12 my-3" key={index}>
								<Features
									features={featureGroups[key]}
								/>
							</div>
						))}
					</div>
				)
			default:
				return null;
		}
	};

	/**
	 * Create a map out of the original config creating a
	 * single array for all the features that are grouped together.
	 * Features that are not grouped remain in their own array with the single feature
	 */
	useEffect(() => {
		if (config) {
			const configWithGroupeFeatures = Object.entries(config).reduce((acc, [configKey, configValue]) => {
				const {
					title,
					layout,
					features,
				} = configValue;
				const grpFeatures = getFeaturesArrayByGroups(features);
				return {
					...acc,
					[configKey]: {
						title,
						layout,
						features: grpFeatures,
					},
				}
			}, {});
			setGroupedFeatures(configWithGroupeFeatures);
		}
	}, []);

	return (
		<div className="container py-4">
			{Object.entries(groupedFeatures).map(([, configFeatures], index) => {
				const {
					title,
					layout,
					features,
				} = configFeatures;
				return (
					<div key={index}>
						{title.toUpperCase()}
						{displayFeatures(layout, features)}
					</div>
				);
			})}
		</div>
	);
}

export default FeaturesPanel;