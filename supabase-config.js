// Supabase connection config

const SUPABASE_URL = "https://yscuhozzbjlzfqgxxlgr.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzY3Vob3p6YmpsemZxZ3h4bGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MTkzNDUsImV4cCI6MjA4OTE5NTM0NX0.10CmyFD5P_OswFNfcpv7JLsIX-xAwmYiLdqmTjE5me8";

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false
  }
});

window.db = db;
