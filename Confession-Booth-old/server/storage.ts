import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { eq } from "drizzle-orm";
import { 
  type User, 
  type InsertUser, 
  type Confession, 
  type InsertConfession,
  type Purchase,
  type InsertPurchase,
  users,
  confessions,
  purchases
} from "@shared/schema";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createConfession(confession: InsertConfession): Promise<Confession>;
  
  createPurchase(purchase: InsertPurchase): Promise<Purchase>;
  updatePurchaseStatus(id: string, status: string): Promise<Purchase | undefined>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  async createConfession(insertConfession: InsertConfession): Promise<Confession> {
    const result = await db.insert(confessions).values(insertConfession).returning();
    return result[0];
  }
  
  async createPurchase(insertPurchase: InsertPurchase): Promise<Purchase> {
    const result = await db.insert(purchases).values(insertPurchase).returning();
    return result[0];
  }
  
  async updatePurchaseStatus(id: string, status: string): Promise<Purchase | undefined> {
    const result = await db.update(purchases)
      .set({ status })
      .where(eq(purchases.id, id))
      .returning();
    return result[0];
  }
}

export const storage = new DbStorage();
