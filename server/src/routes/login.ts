import * as bcrypt from 'bcryptjs';
import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import database from '../database';

const salt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET || 'thisisasecret';

export const generatePassword = (password: string) =>
  bcrypt.hashSync(password, salt);

export const login = async (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).send({
      login: 'failed',
      error: 'You must specify both a username and password to login!',
    });
    return;
  }
  req.body.username = req.body.username as string;

  const currentUser = (await database.user.findOne({
    where: {
      username: req.body.username,
      deletedAt: null,
    },
    include: [database.credential],
  })) as any;
  if (
    currentUser !== undefined &&
    currentUser !== null &&
    bcrypt.compareSync(
      req.body.password,
      (currentUser.credential && currentUser.credential.password) || ''
    )
  ) {
    res.send({
      login: 'success',
      token: jwt.sign(
        {
          id: currentUser.id,
          username: currentUser.username,
        },
        jwtSecret,
        {
          expiresIn: '3h',
        }
      ),
      username: currentUser.username,
    });
  } else {
    res
      .status(401)
      .send({login: 'failed', error: 'Incorrect username or password'});
  }
};

export const verifyToken = (token: string) => jwt.verify(token, jwtSecret);
