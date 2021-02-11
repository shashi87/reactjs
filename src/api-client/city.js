export default function city(api) {
    return {
        "get": (stateId, countryId)=>api.post('/api/Browse/Cities', {
            "stateId": stateId,
            "countryId": countryId,
            "mode": 2
        })
    }
}