import JsonWebToken from "jsonwebtoken"
export const EncodeToken = ()=>{
    const KEY = JWT_SECRET;
    const EXPIRE = {expiresIn: JWT_SECRET_EXPIRES_IN};
    const PAYLOAD = {email, user_id};

    return jwt.sign(PAYLOAD, KEY, EXPIRE)
}

export const DecodeToken = ()=>{
    try {
        const KEY = JWT_SECRET;

        return jwt.verify(token, KEY);
    } catch (error) {
        return null;
    }
}