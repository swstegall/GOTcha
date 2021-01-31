import {Request, Response} from 'express';
import database from '../database';
import {generatePassword} from './login';
import {uuidv4} from '../../util/uuidv4';
import db from '../database';

let newUser: any;

export const addUser = async (req: Request, res: Response) => {
  const date: string = new Date().toUTCString();
  const userId: string = uuidv4();
  newUser = {
    id: userId,
    username: req.body.username,
    experience: 0,
    deletedAt: null,
    createdAt: date,
    updatedAt: date,
  };

  const existingUsers = await database.user.findAll({
    where: {
      deletedAt: null,
    },
    attributes: ['username'],
  });

  const userArray = new Array();
  existingUsers.forEach((element: any) => {
    userArray.push(element);
  });
  let exists: boolean = false;
  userArray.forEach(element => {
    if (req.body.username === element.username) {
      exists = true;
    }
  });
  if (exists) {
    res
      .status(400)
      .send({success: false, error: 'Username is already in use.'});
    return;
  }
  db.user.create(newUser);
  const newCredential: any = {
    id: userId,
    password: generatePassword(req.body.password as string),
    createdAt: date,
    updatedAt: date,
  };
  db.credential.create(newCredential);
  res.status(200).send({success: true});
};