"use server";

import { getPasswordResetTokenbyEmail } from "@/data/resetToken";
import { getVerificationTokenByEmail } from "@/data/verifToken";
import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/schema";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";
import * as z from "zod";

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getPasswordResetTokenbyEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return passwordResetToken;
}

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);
  
    const existingToken = await getVerificationTokenByEmail(email);
  
    if (existingToken) {
      await db.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }
  
    const verficationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expires,
      }
    });
  
    return verficationToken;
  };