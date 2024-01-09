"use client";

import { createBrowserClient } from "@supabase/ssr";
import { env } from "./env.client";

/**
 * In client components, import the `supabaseForClientComponent` variable and use it like this:
 * @example
 * const { data, error } = await supabase
 *   .from('users')
 *   .select();
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type Database = SupabaseClient;

export const supabaseForClientComponent = createBrowserClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
