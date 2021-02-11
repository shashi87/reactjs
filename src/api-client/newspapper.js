export default function newspapper(api) {
    return {
        "get": (cityId, countryId, stateId)=>api.post('api/Browse/Publications', {
            "cityId": cityId,
            "countryId": countryId,
            "stateId": stateId,
            "mode": 2
        })
    }
}