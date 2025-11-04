import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://zvqjyjtwwertulvccyts.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cWp5anR3d2VydHVsdmNjeXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMDk0ODAsImV4cCI6MjA3Njg4NTQ4MH0.oV4NA1zEYSasmyx_VSKRpVa2zFNE7hWy2xUJtCQojrk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)