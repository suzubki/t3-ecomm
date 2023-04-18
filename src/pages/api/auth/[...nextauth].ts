import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(authOptions);
}