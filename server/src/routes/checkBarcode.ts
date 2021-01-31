import {Request, Response} from 'express';
import database from '../database';
import {goodCode} from '../../util/goodCode';

export const checkBarcode = async (req: Request, res: Response) => {
  const date: string = new Date().toUTCString();
  const {barcode} = req.body;
  const {id} = req.headers;
  const newBarcode = {
    userId: id,
    code: barcode,
    deletedAt: null,
    createdAt: date,
    updatedAt: date,
  };
  if (goodCode(barcode, 6)) {
    const existingScans = await database.scan.findAll({
      where: {
        deletedAt: null,
        userId: id,
        code: barcode,
      },
      attributes: ['id'],
    });
    if (existingScans.length !== undefined && existingScans.length > 0) {
      res
        .status(400)
        .send({
          success: false,
          code: 2,
          error: 'Barcode has already been scanned by this user',
        });
      return;
    }
    database.scan.create(newBarcode);
    res.status(200).send({success: true, code: 0});
    return;
  } else {
    res
      .status(400)
      .send({success: false, code: 1, error: 'Barcode scanned is not a winner.'});
    return;
  }
};
