export const splitQueryString = (inputStringQuery) => {
    let queryString = inputStringQuery;
    let id = queryString.split('-')[0]
    let title = queryString.split(id+"-")[1];
    return {id , title};
}
