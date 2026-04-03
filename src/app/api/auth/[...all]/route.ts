import { auth } from "@/auth/config"
import { NextRequest } from "next/server"

// Export the auth handlers for Next.js API routes
export const { GET, POST } = auth.handler