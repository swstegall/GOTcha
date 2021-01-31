import {Request, Response} from 'express';

export const authTest = async (req: Request, res: Response) => {
  res.status(200).send({success: true});
};
