export default function state(api) {
    return {
        "get": (countryId)=>api.post('/api/Browse/States', {
            "countryId": countryId,
            "mode": 1
        })
    }
}