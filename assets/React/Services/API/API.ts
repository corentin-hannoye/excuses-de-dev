import ky from "ky";

const PREFIX_API = "/api/";

async function get(url: string) {
    return await ky
        .get(PREFIX_API + url, {
            headers: {
                "accept": "application/ld+json"
            },
        })
        .json()
}

export async function findAllApologies() {
    const res = await get("apologies");

    return res;
}

export async function findOneHttpCodeByCode(code: number) {
    const res = await get(`http_codes?code=${code}`);

    return (res["hydra:totalItems"] === 1 ? res["hydra:member"][0] : null);
}

export async function findOneTagByLibelle(libelle: string) {
    const res = await get(`tags?libelle=${libelle}`);

    return (res["hydra:totalItems"] === 1 ? res["hydra:member"][0] : null);
}

export async function findApologyByHttpCode(id: number) {
    const res = await get(`apologies?http_code=/api/http_codes/${id}`);

    return (res["hydra:totalItems"] > 0 ? res["hydra:member"] : null);
}

export async function create(url: string, data: object) {
    const res = await ky
        .post(PREFIX_API + url, {
            headers: {
                "content-type": "application/ld+json"
            },
            json: data
        });

    return await res.json();
}
