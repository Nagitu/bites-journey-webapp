// pages/api/yourApiEndpoint.js
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default async function (req, res) {
    try {
        const token = req.query.token; // Mendapatkan URL dari query parameter
        const decodedToken = jwtDecode(token);
        const user = decodedToken.username

        if (!token) {
            res
                .status(401)
                .json({error: 'Unauthorized'});
            return;
        }

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url:  `https://bites-journey-2.fly.dev/api/v1/user/${user}`,
            headers: {
                'Authorization': token,
                'x-api-key': 'binar-36',
                // 'Cookie': req.headers.cookie || '',  Menggunakan cookie yang dikirim oleh
                // klien
            }
        };

        const response = await axios.request(config);
        const responseData = response.data;

        // Di sini Anda dapat mengambil token baru dari header Cookie jika ada
        const newAccessToken = response.headers['token']; // Sesuaikan dengan nama header yang benar
        
        // Lakukan apa yang Anda perlu lakukan dengan responseData dan newAccessToken

        res
            .status(200)
            .json({responseData, newAccessToken});
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({error: 'Internal Server Error'});
    }
}
