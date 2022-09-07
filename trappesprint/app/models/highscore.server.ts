import type { User, Highscore } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Highscore } from "@prisma/client";

export function getAllHighscores() {
  return prisma.highscore.findMany({
    select: { id: true, user: true, time: true, createdAt: true },
    orderBy: { time: "asc" },
  });
}

export function createHighscore({
  time,
  userId,
}: Pick<Highscore, "time"> & {
  userId: User["id"];
}) {
  return prisma.highscore.create({
    data: {
      time,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
