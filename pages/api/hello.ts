// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import "reflect-metadata"
import type { NextApiRequest, NextApiResponse } from 'next'
import { AppDataSource } from "../../db/data-source";
import { User } from "../../db/entity/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  await AppDataSource.initialize();
  console.log("Inserting a new user into the database...")
  const user = new User()
  user.firstName = "Timber"
  user.lastName = "Saw"
  user.age = 25
  await AppDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)
  res.status(200).json(user);
}
