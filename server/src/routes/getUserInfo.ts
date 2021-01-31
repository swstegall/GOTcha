import {Request, Response} from 'express';
import database from '../database';

export const getUserInfo = async (req: Request, res: Response) => {
  const {id} = req.headers;
  const user = await database.user.findOne({
    where: {id},
  });
  if (user !== undefined && user !== null) {
    const payload = user.dataValues;
    res.status(200).send({success: true, payload});
    return;
  }
  res.status(400).send({success: false});
  return;
};
