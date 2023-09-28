import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vaxlmkinsigvoqnwmpyb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZheGxta2luc2lndm9xbndtcHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMDU2NzgsImV4cCI6MjAxMDc4MTY3OH0.V08jgR8c79fsBB_o_916iq3wabzuScqsU8FYHgrDcX8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
