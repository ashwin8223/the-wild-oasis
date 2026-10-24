import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://prshjvvkqskbmiujjwts.supabase.co";
const supabaseKey = "sb_publishable_160zqnwlTj6QGhU0mW28MA_39DDvIe4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
