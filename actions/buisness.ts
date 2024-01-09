"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { BuisnessSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { z } from "zod";
import { db } from "@/lib/db";

// for create new buisness
export async function createNewBuisness(
  values: z.infer<typeof BuisnessSchema>,
  userId: string
) {
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

// for update buisness
export async function updateBuisness(
  values: z.infer<typeof BuisnessSchema>,
  userId: string,
  buisnessId: string
) {
  const validatedFields = BuisnessSchema.safeParse(values);
  if (!validatedFields.success || !userId) {
    return { error: "Invalid fields!" };
  }
  const { name } = validatedFields.data;

  try {
    await db.business.update({
      where: {
        id: buisnessId,
        userId: userId,
      },
      data: {
        name,
      },
    });
    return { success: "Buisness Created!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
}

// for update buisness
export async function deleteBuisness(userId: string, buisnessId: string) {
  try {
    await db.business.delete({
      where: {
        id: buisnessId,
        userId: userId,
      },
    });
    return { success: "Buisness deleted!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
}

// for get all created buisnesses
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
