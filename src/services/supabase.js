import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vwjvbuimhkpswdzwhpxi.supabase.co";
// The key is safe to expose in the browser as RLS is activated on the database
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3anZidWltaGtwc3dkendocHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDM1MjUsImV4cCI6MjA2OTE3OTUyNX0.1uvNIRZ-DpQIlgPxgIbhBbBqm91Krlf_DGfF-6cBgEg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
