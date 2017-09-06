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
			}, {
				type: 'envelopes',
				id: 'clothing',
				attributes: {
					name: 'Clothing',
					amount: 46.66
				}
			}]
		}
	});

	this.post('/envelopes', (schema, request) => {
		const attrs = JSON.parse(request.requestBody).data.attributes.name;
		return schema.envelopes.create(attrs);
	});
}
