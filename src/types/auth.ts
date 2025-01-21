import { SocialProviderList } from "better-auth/social-providers";

export type AppOAuthProvider = Extract<SocialProviderList, "google" | "github">;
