// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {ServicesDetailAsync} from "services/ristpanel";

export default function handler(req, res) {
    ServicesDetailAsync().then(response => {
        res.status(200).json({ data : response.data })
    }).catch(err => {
        console.log(err,'ee')
        res.status(200).json({ error: err })
    });


}
