import { useMemo } from 'react';

import { addAction } from '../../../client/channel/lib/Toolbox';
import { useSetting } from '../../../client/contexts/SettingsContext';

addAction('pinned-messages', () => {
	const pinningAllowed = useSetting('Message_AllowPinning');
	return useMemo(() => (pinningAllowed ? {
		groups: ['channel', 'group', 'direct'],
		id: 'pinned-messages',
		title: 'Pinned_Messages',
		icon: 'pin',
		template: 'pinnedMessages',
		order: 11,
	} : null), [pinningAllowed]);
});
