export default function country(api) {
    return {
        "get": ()=>api.get('api/Browse/Countries')
    }
}