import dotenv from "dotenv";

dotenv.config();

export const { APP_PORT, DEBUG_MODE, DB_PASSWORD, PUBLIC_DIR } = process.env;
