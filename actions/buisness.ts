"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { BuisnessSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { z } from "zod";
import { db } from "@/lib/db";

export async function createNewBuisness(
  values: z.infer<typeof BuisnessSchema>,
  userId: string
) {
  console.log(values);
  const validatedFields = BuisnessSchema.safeParse(values);
  if (!validatedFields.success || !userId) {
    return { error: "Invalid fields!" };
  }
  const { name } = validatedFields.data;

  try {
    await db.business.create({
      data: {
        name,
        userId,
      },
    });
    return { success: "Buisness Created!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
}

export async function getAllBuisness() {
  try {
    const dataTmp = await db.business.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        userId: true,
        user: {
          select: {
            email: true,
          },
        },
      },
    });

    const data: Buisness[] = dataTmp.map((item) => ({
      name: item.name,
      email: item.user.email,
      id: item.id,
      createdAt: item.createdAt,
      userId: item.userId,
    }));
    return { data: data };
  } catch (error) {
    return null;
  }
}
