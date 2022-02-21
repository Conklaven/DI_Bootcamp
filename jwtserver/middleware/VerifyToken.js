import jwt from 'jsonwebtoken';
import Users from '../models/UserModel.js'

export const VerifyToken = (req, res, next) => {
    console.log('Verifying token', accessToken)
    const accessToken = req.cookies.accessToken ||
                        req.headers['x-access-token'] || 
                        req.headers['authorization'];
    if (accessToken == null) return res.sendStatus(401);
    console.log('access token: ' + accessToken);
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decode)=>{
        if(err) return res.sendStatus(403);
        let email = decode.email;
        let userId = decode.userId;
        try {
            const user= await Users.findAll({
                where:{
                email:email
                }
            })
            await next()
        } catch (error) {
            return res.sendStatus(403)
        }
        next();
    })
}