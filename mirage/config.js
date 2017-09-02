export default function() {
	this.namespace = '/api';

	this.get('/envelopes', function() {
		return {
			data: [{
				type: 'envelopes',
				id: 'netflix',
				attributes: {
					name: 'Netflix',
					amount: 9.99,
				}
			}]
		}
	})
}
