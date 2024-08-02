async function getCompany() {
	const { data } = await useFetch('/api/company')
	return data
}

async function getAgents() {
	const { data } = await useFetch('/api/agents')
	return data
}

async function getOffers() {
	const { data } = await useFetch('/api/offers')
	return data
}

export {getCompany, getAgents, getOffers}